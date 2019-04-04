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
|end|---|[Date Object](#object-date)|Require|
|time|---|_Array_\<[Time Object](#object-time)>||
|location|---|[Location Object](#object-location)||
|categories|---|_Array_\<String>|Require 1 items|
|topics|---|_Array_\<String>||
|links|---|_Array_\<[Link Object](#object-link)>||
|resources|---|_Array_\<[Resource Object](#object-resource)>||
|communityResources|---|_Array_\<[Resource Object](#object-resource)>||
|declared|---|[Declared Object](#object-declared)||

##### Object: Date #####

|Name|Description|type|Require|
|---|---|---|--:|
|year|ปีที่จัดอีเว้นท์|Integer|Require|
|month|เดือนที่จัดอีเว้นท์|Integer|Require|
|date|วันที่จัดอีเว้นท์|Integer|Require|

##### Object: Time #####

|Name|Description|type|Require|
|---|---|---|--:|
|from|---|Object {hour:int, monute:int}|Require|
|to|---|Object {hour:int, monute:int}|Require|
|after||Boolean||
|agendar|Lecture/Tutorial Meetup|String||

##### Object: Location #####

|Name|Description|type|Require|
|---|---|---|--:|
|title||String|Require|
|url||String|Require|
|detail||String||

##### Object: Link #####

|Name|Description|type|Require|
|---|---|---|--:|
|title||String|Require|
|detail||String||
|type|website, rsvp, ticket|String|Require|
|url||String|Require|
|price||String|Require when type ticket|

##### Object: Resource #####

|Name|Description|type|Require|
|---|---|---|--:|
|title||String|Require|
|type|video|String|Require|
|url||String|Require|

##### Object: Declared #####

|Name|Description|type|Require|
|---|---|---|--:|
|filename||String|Require|
|line||Integer|Require|
|column||Integer|Require|

#### Example array object of events ####

```javascript
[
  {    
    "id" : `EVENT_2019_ID`,
    "title" : `EVENT_2019_ID`,
    "summary" : `Summary detail`,
    "description" : `Description`,
    "start" : {year, month, date},
    "end" : {year, month, date},  
    "time" : [{from: {hour, minute}}, {to: {hour, minute}}, after, agendar],
    "location": {title, url, detail},
    "categories" : [],
    "topics" : [],
    "links" : [{title, detail, type, url, price}],
    "resources" : [{title, type, url}]
    "communityResources" : [{title, type, url}]
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
