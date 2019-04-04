# Event Calendar API #

|API Name|รายละเอียด|
|---|---|
|Calendar API|API แสดงรายการอีเว้นท์ต่างๆ|

## Calendar API ##

### Request URL ###

https://thaiprogrammer-tech-events-calendar.spacet.me/calendar.json

### Responsed Data ###

Array of Events

#### Responsed parameter ####

|Name|Description|type|Require|
|---|---|---|--:|
|id|ไอดีของอีเว้นท์|String|Require|
|title|---|String|Require|
|summary|---|String|Require|
|description|---|String|Require|
|start|---|[Date Object](#object-date)|Require|
|end|---|Date Object|Require|
|time|---|_Array_\<Time Object>||
|location|---|Location Object||
|categories|---|_Array_\<String>||
|topics|---|_Array_\<String>||
|links|---|_Array_\<Link Object>||
|resources|---|_Array_\<Resource Object>||
|communityResources|---|_Array_\<Resource Object>||
|declared|---|Declared Object||

##### Object: Date #####

|Name|Description|type|Require|
|---|---|---|--:|
|id|ไอดีของอีเว้นท์|String|Require|

#### Example array object of events ####

```javascript
[
  {// Event Detail
    
    // Require
    // Event ID
    "id" : `EVENT_2019_ID`,
    
    // Require
    // Event title
    "title" : `EVENT_2019_ID`,
    
    // Require
    // Event summary
    "summary" : `Summary detail`,
    
    // Require
    // Event description
    "description" : `Description`,
    
    // Require
    // Object of Start Date contain Year, month, date
    "start" : {year, month, date},
    
    // Require
    // Object of End Date contain Year, month, date
    "end" : {year, month, date},
    
    // Array of time to present any thing    
    "time" : [{from: {hour, minute}}, {to: {hour, minute}}, after, agendar],
    
    // Require location.title
    // Object location of this event
    "location": {title, url, detail},
    
    // Require 1 items
    // Array of catagories
    "categories" : [],
    
    // Array of topic in this Event
    "topics" : [],
    
    // Links Require 1
    // Object Link Require title, type, url
    // Array of Object link
    // type : website, rsvp, ticket
    // price : require when type ticket
    "links" : [{title, detail, type, url, price}],
    
    // Object resource require title, type, url
    // Array of resource in this event
    "resources" : [{title, type, url}]
    
    // Array of resource ???
    "communityResources" : [{title, type, url}]
    
    // DECLARED ???
    "declared" : {filename, line, column}
  }
]
```

#### Example JSON ####

```javascript
[
  {
    "id": "ampconf-2019",
    "start": {
      "year": 2019,
      "month": 4,
      "date": 17
    },
    "end": {
      "year": 2019,
      "month": 4,
      "date": 18
    },
    "categories": [
      "Conference"
    ],
    "topics": [
      "AMP"
    ],
    "time": null,
    "title": "AMP Conf 2019",
    "location": {
      "title": "Tokyo",
      "detail": "[ROPPONGI ACADEMY HILLS](https://goo.gl/maps/beyjcpb2wNm);"
    },
    "summary": "Building the future web, together.",
    "description": "The AMP team and community is bringing its yearly gathering to Tokyo for two days full of talks by developers for developers, all crafted to help you create a best-in-class user experience. Whether you're interested in rich animations, dynamic content, DevOps or monetization, we got you covered. We can't wait to meet you.",
    "links": [
      {
        "type": "website",
        "url": "https://www.ampproject.org/amp-conf/",
        "title": "2019.jsconf.asia"
      },
      {
        "type": "ticket",
        "url": "https://events.withgoogle.com/amp-conf-2019/registrations/new/",
        "title": "Buy tickets",
        "price": "FREE"
      }
    ],
    "resources": [
      
    ],
    "communityResources": [
      
    ],
    "declared": {
      "filename": "data/2019-04/ampconf-2019.md",
      "line": 1,
      "column": 1
    }
  },
  {
    "id": "jsconf-asia-2019",
    "start": {
      "year": 2019,
      "month": 6,
      "date": 14
    },
    "end": {
      "year": 2019,
      "month": 6,
      "date": 16
    },
    "categories": [
      "Conference"
    ],
    "topics": [
      "JavaScript"
    ],
    "time": null,
    "title": "JSConf.Asia 2019",
    "location": {
      "title": "Singapore",
      "detail": "[LASALLE College of the Arts](https://www.google.fr/maps/place/LASALLE+College+of+the+Arts/@1.3026003,103.8514892,19.89z/data=!4m5!3m4!1s0x31da19bbe54abb45:0xed0ecef2d74379c!8m2!3d1.3029095!4d103.8515946);"
    },
    "summary": "งาน JavaScript ที่ใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้\nจะได้เจอคนจาก Microsoft, Mozilla, … ด้วย",
    "description": "JSConf.Asia 2019 is a 3 day long celebration of the web technology and design. It is the sixth edition of Southeast Asia’s most influential community event from developers for developers with the aim to educate, inspire and entertain around open source and the web.",
    "links": [
      {
        "type": "website",
        "url": "https://2019.jsconf.asia/",
        "title": "2019.jsconf.asia"
      },
      {
        "type": "ticket",
        "url": "https://events.pouchnation.com/event/jsconfasia2019",
        "title": "Buy tickets",
        "price": "790 SGD (2019 Jan)"
      },
      {
        "type": "rsvp",
        "url": "https://www.facebook.com/events/491088001393972/",
        "title": "Facebook event"
      }
    ],
    "resources": [
      
    ],
    "communityResources": [
      
    ],
    "declared": {
      "filename": "data/2019-06/jsconf-asia-2019.md",
      "line": 1,
      "column": 1
    }
  }
]
```
