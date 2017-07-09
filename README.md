N3-components - Powerful Vue Library.
=========================

[![Shippable branch](https://img.shields.io/shippable/5444c5ecb904a4b21567b0ff/dev.svg?maxAge=2592000)]()
[![Test Coverage](https://codeclimate.com/github/N3-components/N3-components/badges/coverage.svg)](https://codeclimate.com/github/N3-components/N3-components/coverage)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/N3-components/english?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![Code Climate](https://codeclimate.com/github/N3-components/N3-components/badges/gpa.svg)](https://codeclimate.com/github/N3-components/N3-components)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)]()

N3 components library is built with Vue.js, is a powerful library for frontend or full-stack engineers to build web pages quickly.

[Home Page](https://n3-components.github.io/N3-components/) | [中文说明](https://github.com/N3-components/N3-components/blob/master/README-zh.md) | [Documents](https://n3-components.github.io/N3-components/)

Introduction
------------

![logo](https://n3-components.github.io/N3-components/static/img/logo.png)

N3 components applys oneself to structure a great ecological circle of developers using Vue.js. Supporting as follows:

* More than 60 components. [See Here](https://github.com/N3-components/N3-components/tree/master/src)

* Personality Of Style.

* UMD.

* Using ES6.

NPM
------------
Link：[https://www.npmjs.com/package/N3-components](https://www.npmjs.com/package/N3-components)

```bash
npm install N3-components --save-dev
```

CNPM
------------

Link：[https://npm.taobao.org/package/N3-components](https://npm.taobao.org/package/N3-components)

```bash
cnpm install N3-components --save-dev
```

CDN
------------

* js Link：https://unpkg.com/N3-components@version/dist/index.min.js (Notice the version)
* css Link：https://unpkg.com/N3-components@version/dist/index.min.css (Notice the version)

Quick Start
------------

You can install components for your global environment.

```javascript
import Vue from 'vue'
import N3Components from 'N3-components'
import 'N3-components/dist/index.css'

// install N3
Vue.use(N3Components)

// for English  (default chinese)
// version 2.2.0 or later
Vue.use(N3Components, 'en')
```

You can also import single component when needed.

```javascript
import Vue from 'vue'
import N3Components from 'N3-components'
import {n3Alert} from N3Components

// set language  
// window.n3Locale = 'en'
//
```

theme customization

```
// default 
import 'N3-components/src/style/default.less' 

// theme customization
import 'your-theme.less' 

```

your-theme.less

```
@import 'N3-components/src/style/common.less' 

/*base color*/
@whiteColor: #fff;
@blackColor: #000;
@lightBlackColor: #333;
@grayColor: #ccc;
@weightGrayColor: #999;
@lightGrayColor: #eee; 
@lightColor: #f9f9f9; 

/*font color*/
@fontColor: #555;

/*theme color*/
@primaryColor: #41cac0;
@primaryColorhover: #39b2a9;
@hoverColor:rgba(65, 202, 192, 0.05);

/*extend color*/
@successColor: #19d567;
@successColorhover: #30d073;

@infoColor: #2db7f5;
@infoColorhover: #43bcf3;

@dangerColor: #f50;
@dangerColorhover: #f9702b;

@warningColor: #fa0;
@warningColorhover: #f5b73b;

```


Requirements
------------

* vue
* vue-focus
* velocity-animate

Discussing
----------
- [submit issue](https://github.com/N3-components/N3-components/issues/new)
- email: zhangking520@gmail.com
- gitter: [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/N3-components/english?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
- QQ Group: 556286036 <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=ae2b542ef32e8595664c746572d9a48187167e269ef5b6c80d8ed326fce5efdd"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="N3-components交流群" title="N3-components交流群"></a>
- QQ Group Qrcode:
![qrcode](https://n3-components.github.io/N3-components/static/img/N3-QQ.png)


Contribute
---------

[Contribute](https://github.com/N3-components/N3-components/blob/master/contribute.md)

Change log
--------

[Change Log](https://github.com/N3-components/N3-components/blob/master/log.md)


License
------------

MIT