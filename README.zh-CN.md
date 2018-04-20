<p>
    <a href="https://github.com/youzan/"><img alt="logo" width="36px" src="https://img.yzcdn.cn/public_files/2017/02/09/e84aa8cbbf7852688c86218c1f3bbf17.png" alt="youzan">
    </a>
</p>
<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="120" style="margin-bottom: 10px;">
</p>
<p align="center" style="margin: 30px 0 35px;">A Vue.js 2.0 Mobile UI at YouZan</p>

[![Build Status](https://travis-ci.org/youzan/matrix.svg?branch=master)](https://travis-ci.org/youzan/matrix)
[![downloads](https://img.shields.io/npm/dt/matrix.svg)](https://www.npmjs.com/package/matrix)
[![Coverage Status](https://img.shields.io/codecov/c/github/youzan/matrix/dev.svg)](https://codecov.io/github/youzan/matrix?branch=dev)
[![npm version](https://img.shields.io/npm/v/matrix.svg?style=flat)](https://www.npmjs.com/package/matrix)
[![license](https://img.shields.io/npm/l/matrix.svg)](https://www.npmjs.com/package/matrix)

## 特性

* 50+ 个经过有赞线上业务检验的组件
* 单元测试覆盖率超过 90%
* 完善的中英文文档和示例
* 支持 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* 支持 TypeScript
* 支持 SSR
 
## 安装

```shell
npm i -S matrix
```

## 快速上手

#### 方式一. 使用  [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory。
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

接着你可以在代码中直接引入 matrix 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'matrix';
```

#### 方式二. 按需引入组件

```js
import Button from 'matrix/lib/button';
import 'matrix/lib/matrix-css/base.css';
import 'matrix/lib/matrix-css/button.css';
```

#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import matrix from 'matrix';
import 'matrix/lib/matrix-css/index.css';

Vue.use(matrix);
```

### CDN

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/matrix/lib/matrix-css/index.css">

<!-- 引入组件 -->
<script src="https://unpkg.com/matrix/lib/matrix.min.js"></script>
```

更多内容请参考 [快速上手](https://www.youzanyun.com/zanui/matrix#/zh-CN/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](./.github/CONTRIBUTING.zh-CN.md)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/matrix/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/matrix/pulls)。

## 浏览器支持

现代浏览器以及 Android 4.0+, iOS 6+.

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

![qrcode](https://img.yzcdn.cn/v2/image/youzanyun/zanui/pc/zanui_vue_mobile_preview_03.png)

## 链接

* [详细文档](https://www.youzanyun.com/zanui/matrix)
* [更新日志](https://www.youzanyun.com/zanui/matrix#/zh-CN/changelog)
* [React 组件库](https://www.youzanyun.com/zanui/zent)
* [微信小程序组件库](https://github.com/youzan/zanui-weapp)
* [matrix-demo](https://github.com/youzan/matrix-demo)
* [vue-cli-template-matrix](https://github.com/youzan/vue-cli-template-matrix)

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
