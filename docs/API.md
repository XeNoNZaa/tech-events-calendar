# Event Calendar API #

|API Name|รายละเอียด|
|---|---|
|Calendar API|API แสดงรายการอีเว้นท์ต่างๆ|

## Calendar API ##

### Request ###

- METHOD : GET
- URL : https://thaiprogrammer-tech-events-calendar.spacet.me/calendar.json
```sh
curl https://thaiprogrammer-tech-events-calendar.spacet.me/calendar.json
```

### Responsed Data ###

รายการอีเว้นท์การจัดงานต่างๆ ในรูปแบบของอาเรย์

#### Responsed parameter ####

|ตัวแปร|รายละเอียด|ชนิดข้อมูล|Require|
|---|---|---|--:|
|id|ไอดีของงานอีเว้นท์|String|Require|
|title|หัวข้อของงานอีเวนท์|String|Require|
|summary|สรุปสาระสำคัญของงานอีเว้นท์|String|Require|
|description|รายละเอียดของงานอีเว้น|String|Require|
|start|วันที่เริ่มงานอีเว้นท์|[Date Object](#object-date)|Require|
|end|วันที่สิ้นสุดงานอีเว้นท์|[Date Object](#object-date)|Require|
|time|เวลาการจัดงานอีเว้นท์|_Array_\<[Time Object](#object-time)>||
|location|สถานที่จัดงานอีเว้นท์|[Location Object](#object-location)||
|categories|ประเภทของอีเว้นท์|_Array_\<String>|Require|
|topics|หัวข้อที่เกี่ยวข้องกับงานอีเว้นท์|_Array_\<String>||
|links|ลิงค์สำหรับงานอีเว้นท์|_Array_\<[Link Object](#object-link)>||
|resources|แหล่งที่มาของงานอีเว้นท์|_Array_\<[Resource Object](#object-resource)>||
|communityResources|ลิงค์กลุ่มของงานอีเว้นท์|_Array_\<[Resource Object](#object-resource)>||
|declared|อ้างอิงแหล่งเข้าถึงข้อมูล|[Declared Object](#object-declared)||

##### Object: Date #####

|ตัวแปร|รายละเอียด|ชนิดข้อมูล|Require|
|---|---|---|--:|
|year|ปีที่จัดงานอีเว้นท์|Integer|Require|
|month|เดือนที่จัดงานอีเว้นท์|Integer|Require|
|date|วันที่จัดงานอีเว้นท์|Integer|Require|

##### Object: Time #####

|ตัวแปร|รายละเอียด|ชนิดข้อมูล|Require|
|---|---|---|--:|
|from|เวลาเปิดงานอีเว้นท์|Object {hour:int, monute:int}|Require|
|to|เวลาปิดงานอีเว้นท์|Object {hour:int, monute:int}|Require|
|after|???|Boolean||
|agendar|??? Lecture/Tutorial Meetup|String||

##### Object: Location #####

|ตัวแปร|รายละเอียด|ชนิดข้อมูล|Require|
|---|---|---|--:|
|title|ชื่อสถานที่ที่สามารถค้นหาผ่าน Google Map|String|Require|
|url|ลิงค์สถานที่|String|Require|
|detail|รายละเอียดสถานที่จัดงาน เช่น ห้อง ชั้น|String||

##### Object: Link #####

|ตัวแปร|รายละเอียด|ชนิดข้อมูล|Require|
|---|---|---|--:|
|title|ชื่อลิงค์|String|Require|
|detail|รายละเอียดลิงค์|String||
|type|ประเภทของลิงค์ เช่น website, rsvp, ticket|String|Require|
|url|ลิงค์|String|Require|
|price|ราคาบัตรของงานอีเว้นท์|String|Require when type ticket|

##### Object: Resource #####

|ตัวแปร|รายละเอียด|ชนิดข้อมูล|Require|
|---|---|---|--:|
|title|ชื่อแหล่งที่มา|String|Require|
|type|ประเภทของแหล่งที่มา เช่น video|String|Require|
|url|ลิงค์|String|Require|

##### Object: Declared #####

|ตัวแปร|รายละเอียด|ชนิดข้อมูล|Require|
|---|---|---|--:|
|filename|ชื่อไฟล์อ้างอิง|String|Require|
|line|บรรทัดที่เริ่มอ่านข้อมูล|Integer|Require|
|column|คอลั่มที่เริ่มอ่านข้อมูล|Integer|Require|

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
  }
  ,/// {Event Object}
]
```

#### Example MD ####
```
---
id: ampconf-2019
date: 2019-04-17 ~ 2019-04-18
location:
  title: Tokyo
  detail: >-
    [ROPPONGI ACADEMY HILLS](https://goo.gl/maps/beyjcpb2wNm);

categories:
  - Conference
topics:
  - AMP
links:
  - type: website
    url: 'https://www.ampproject.org/amp-conf/'
    title: 2019.jsconf.asia
  - type: ticket
    url: 'https://events.withgoogle.com/amp-conf-2019/registrations/new/'
    title: Buy tickets
    price: FREE
---
# AMP Conf 2019

> Building the future web, together.

The AMP team and community is bringing its yearly gathering to Tokyo for two days full of talks by developers for developers, all crafted to help you create a best-in-class user experience. Whether you're interested in rich animations, dynamic content, DevOps or monetization, we got you covered. We can't wait to meet you.
```
