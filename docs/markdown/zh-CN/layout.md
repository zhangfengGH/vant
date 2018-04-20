## Layout 布局

提供了`m-row`和`m-col`两个组件来进行行列布局

### 使用指南
``` javascript
import { Row, Col } from 'matrix';

Vue.use(Row).use(Col);
```

### 代码演示

#### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比    
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<m-row>
  <m-col span="8">span: 8</m-col>
  <m-col span="8">span: 8</m-col>
  <m-col span="8">span: 8</m-col>
</m-row>

<m-row>
  <m-col span="4">span: 4</m-col>
  <m-col span="10" offset="4">offset: 4, span: 10</m-col>
</m-row>

<m-row>
  <m-col offset="12" span="12">offset: 12, span: 12</m-col>
</m-row>
```

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<m-row gutter="20">
  <m-col span="8">span: 8</m-col>
  <m-col span="8">span: 8</m-col>
  <m-col span="8">span: 8</m-col>
</m-row>
```

### API

#### Row
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - | - |

#### Column
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| span | 列元素宽度 | `String | Number` | - | - |
| offset | 列元素偏移距离 | `String | Number` | - | - |
