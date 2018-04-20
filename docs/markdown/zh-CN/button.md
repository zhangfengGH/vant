## Button 按钮

### 使用指南
``` javascript
import { Button } from 'matrix';

Vue.use(Button);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`danger`三种类型，默认为`default`

```html
<m-button type="default">默认按钮</m-button>
<m-button type="primary">主要按钮</m-button>
<m-button type="danger">危险按钮</m-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<m-button size="large">大号按钮</m-button>
<m-button size="normal">普通按钮</m-button>
<m-button size="small">小型按钮</m-button>
<m-button size="mini">迷你按钮</m-button>
```

#### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<m-button disabled>禁用状态</m-button>
```

#### 加载状态

```html 
<m-button loading />
<m-button loading type="primary" />
```

#### 自定义按钮标签

按钮标签默认为`button`，可以使用`tag`属性来修改按钮标签

```html 
<m-button tag="a" href="https://www.youzan.com" target="_blank">
  按钮
</m-button>
```

#### 页面底部操作按钮

```html 
<m-button type="primary" bottom-action>按钮</m-button>

<m-row>
  <m-col span="12">
    <m-button bottom-action>按钮</m-button>
  </m-col>
  <m-col span="12">
    <m-button type="primary" bottom-action>按钮</m-button>
  </m-col>
</m-row>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `String` | `default` | `primary` `danger` |
| size | 按钮尺寸 | `String` | `normal` | `large` `small` `mini` |
| text | 按钮文字 | `String` | - | - |
| tag | 按钮标签 | `String` | `button` | 任意`HTML`标签 |
| native-type | 按钮类型（原生） | `String` | - | - |
| disabled | 是否禁用 | `Boolean` |  `false` | - |
| loading | 是否显示为加载状态 | `Boolean` |  `false` | - |
| block | 是否为块级元素 | `Boolean` |   `false` | - |
| bottom-action | 是否为底部行动按钮 | `Boolean` | `false` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |
