<p>
    <a href="https://github.com/youzan/"><img alt="logo" width="36" height="36" src="https://img.yzcdn.cn/public_files/2017/02/09/e84aa8cbbf7852688c86218c1f3bbf17.png" alt="youzan">
    </a>
</p>
<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<p align="center" style="margin: 30px 0 35px;">A Vue.js 2.0 Mobile UI at YouZan</p>

[![Build Status](https://travis-ci.org/youzan/matrix.svg?branch=master)](https://travis-ci.org/youzan/matrix)
[![downloads](https://img.shields.io/npm/dt/matrix.svg)](https://www.npmjs.com/package/matrix)
[![Coverage Status](https://img.shields.io/codecov/c/github/youzan/matrix/dev.svg)](https://codecov.io/github/youzan/matrix?branch=dev)
[![npm version](https://img.shields.io/npm/v/matrix.svg?style=flat)](https://www.npmjs.com/package/matrix)
[![license](https://img.shields.io/npm/l/matrix.svg)](https://www.npmjs.com/package/matrix)

[访问中文版](./README.zh-CN.md)

## Features

* 50+ Reusable components
* 90%+ Unit test coverage
* Extensive documentation and demos
* Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* Support TypeScript
* Support SSR

## Install

```shell
npm i -S matrix
```

## Quickstart

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "matrix",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

Then you can import components from matrix, equivalent to import manually below.

```js
import { Button } from 'matrix';
```

#### 2. Manually import

```js
import Button from 'matrix/lib/button';
import 'matrix/lib/matrix-css/base.css';
import 'matrix/lib/matrix-css/button.css';
```

#### 3. Import all components

```js
import Vue from 'vue';
import matrix from 'matrix';
import 'matrix/lib/matrix-css/index.css';

Vue.use(matrix);
```

### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://unpkg.com/matrix/lib/matrix-css/index.css" />

<!-- import script -->
<script src="https://unpkg.com/matrix/lib/matrix.min.js"></script>
```

See more in [Quickstart](https://www.youzanyun.com/zanui/matrix#/en-US/quickstart).

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 6+.

## Links

* [Documentation](https://www.youzanyun.com/zanui/matrix)
* [Changelog](https://www.youzanyun.com/zanui/matrix#/en-US/changelog)
* [React UI](https://www.youzanyun.com/zanui/zent)
* [Weapp UI](https://github.com/youzan/zanui-weapp)
* [matrix Demo](https://github.com/youzan/matrix-demo)
* [vue-cli-template-matrix](https://github.com/youzan/vue-cli-template-matrix)

## Preview

You can scan the following QR code to access the demo：

![qrcode](https://img.yzcdn.cn/v2/image/youzanyun/zanui/pc/zanui_vue_mobile_preview_03.png)

## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
