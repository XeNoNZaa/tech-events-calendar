// Generates ICS file from `public/calendar.json`

const data = require('../public/calendar')
const icalendar = require('icalendar')

function generateICS () {
  const ical = new icalendar.iCalendar()
  for (const event of generateEvents()) {
    ical.addComponent(event)
  }
  return ical.toString().replace('BEGIN:VEVENT', [
    'BEGIN:VTIMEZONE',
    'TZID:Asia/Bangkok',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:+064204',
    'DTSTART:19200331T235956',
    'TZNAME:GMT+7',
    'TZOFFSETTO:+0700',
    'RDATE:19200331T235956',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT'
  ].join('\r\n'))

  function generateEvents () {
    const result = []
    for (const event of data) {
      const genDate = new Date()
      const vEvent = new icalendar.VEvent(`${event.id}@thaiprogrammer-tech-events-calendar.spacet.me`)
      let start, end, startDate, endDate

      if (event.time != null) {
        const total = event.time.length
        startDate = new Date(event.start.year, event.start.month - 1, event.start.date)
        endDate = new Date(event.start.year, event.start.month - 1, event.start.date)
        startDate.setHours(event.time[0].from.hour)
        startDate.setMinutes(event.time[0].from.minute)
        endDate.setHours(event.time[total-1].to.hour)
        endDate.setMinutes(event.time[total-1].to.minute)
        var startProperty = vEvent.addProperty('DTSTART', startDate)
        startProperty.setParameter('TZID', 'Asia/Bangkok')
        var endProperty = vEvent.addProperty('DTEND', endDate)
        endProperty.setParameter('TZID', 'Asia/Bangkok')
      } else {
        // Full day support hacked from https://github.com/tritech/node-icalendar/pull/43
        startDate = new Date(event.start.year, event.start.month - 1, event.start.date)
        endDate = new Date(event.end.year, event.end.month - 1, event.end.date + 1)
        var startProperty = vEvent.addProperty('DTSTART', startDate)
        startProperty.setParameter('VALUE', 'DATE')
        startProperty.type = 'DATE'
        var endProperty = vEvent.addProperty('DTEND', endDate)
        endProperty.setParameter('VALUE', 'DATE')
        endProperty.type = 'DATE'
      }
      vEvent.setSummary(event.title)
      vEvent.setLocation(event.location.title)
      const url = 'https://github.com/ThaiProgrammer/tech-events-calendar#' + event.id
      vEvent.addProperty('URL', url)
      vEvent.setDescription(event.summary + '\r\n\r\n' + event.description + '\r\n\r\n' + url)
      vEvent.addProperty('CATEGORIES', event.categories)
      vEvent.addProperty('TRANSP', 'OPAQUE')
      result.push(vEvent)
    }
    return result
  }
}

const ics = generateICS()
const path = `public/calendar.ics`
require('fs').writeFileSync(path, ics)
console.log('* Generated', path)