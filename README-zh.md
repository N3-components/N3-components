N3-components - 强大的Vue组件库。
=========================

[![Shippable branch](https://img.shields.io/shippable/5444c5ecb904a4b21567b0ff/master.svg?maxAge=2592000)]()
[![Test Coverage](https://codeclimate.com/github/N3-components/N3-components/badges/coverage.svg)](https://codeclimate.com/github/N3-components/N3-components/coverage)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/N3-components/chinese?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![Code Climate](https://codeclimate.com/github/N3-components/N3-components/badges/gpa.svg)](https://codeclimate.com/github/N3-components/N3-components)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)]()

N3组件库是基于Vue.js构建的，让前端工程师和全栈工程师能快速构建页面和应用。

[官方主页](https://n3-components.github.io/N3-components/) | [English Introduction](./README.md) | [文档](https://n3-components.github.io/N3-components/component.html)

相关介绍
------------

![logo](./docs/static/img/logo.png)

N3组件库致力于构建良好的Vue开发者生态圈，提供良好的开发体验。下面是其中的一些特色：

* 超过60个组件 [组件列表](./src)

* 自定义样式

* 支持多种模块化范式（UMD）

* 使用ES6进行开发

NPM
------------
链接：[https://www.npmjs.com/package/N3-components](https://www.npmjs.com/package/N3-components)

```bash
npm install N3-components
```

快速上手
------------

您可以把N3组件安装到全局的Vue上，示例代码如下：

```javascript
import Vue from 'vue'
import N3Components from 'N3-components'
N3Components.install(Vue)
```

也可以在需要的时候引入该组件，示例代码如下：

```javascript
import Vue from 'vue'
import N3Components from 'N3-components'
import {n3Alert} from N3Components
```

依赖的项目
------------

* vue
* vue-focus
* velocity-animate

TODO 列表
----------

- 树状视图
- 抽屉菜单

讨论区
----------
- [提交ISSUE](https://github.com/N3-components/N3-components/issues/new) : bug反馈，建议提交等
- email: zhangking520@gmail.com
- gitter: [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/N3-components/chinese?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
- QQ群: 556286036 <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=ae2b542ef32e8595664c746572d9a48187167e269ef5b6c80d8ed326fce5efdd"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="N3-components交流群" title="N3-components交流群"></a>
- QQ群二维码:
![qrcode](https://n3-components.github.io/N3-components/static/img/N3-QQ.png)
