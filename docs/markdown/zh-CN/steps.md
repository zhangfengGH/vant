## Steps 步骤条

### 使用指南
``` javascript
import { Step, Steps } from 'matrix';

Vue.use(Step).use(Steps);
```

### 代码演示

#### 基础用法

```html
<m-steps :active="active">
  <m-step>买家下单</m-step>
  <m-step>商家接单</m-step>
  <m-step>买家提货</m-step>
  <m-step>交易完成</m-step>
</m-steps>
```

```javascript
export default {
  data() {
    return {
      active: 0
    };
  }
}
```

#### 描述信息

通过`title`和`description`属性来定义描述信息信息

```html
<m-steps
  :active="active"
  icon="logistics"
  title="标题"
  description="描述信息"
>
  <m-step>买家下单</m-step>
  <m-step>商家接单</m-step>
  <m-step>买家提货</m-step>
  <m-step>交易完成</m-step>
</m-steps>
```

#### 竖向步骤条
可以通过设置`direction`属性来改变步骤条的显示方式

```html
<m-steps direction="vertical" :active="0" active-color="#f60">
  <m-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </m-step>
  <m-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </m-step>
  <m-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </m-step>
</m-steps>
```

### Steps API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| active | 当前步骤，起始值为0 | `Number` | - | - |
| icon | 当前步骤的icon | `String` | - | - |
| icon-class | 当前步骤栏为icon添加的类 | `String` | - | - |
| title | 当前步骤标题 | `String` | - | - |
| description | 当前步骤描述 | `String` | - | - |
| direction | 显示方向 | `String` | `horizontal` | `vertical` |
| active-color | active状态颜色 | `String` | `#06bf04` | - |

### Steps Slot

| Name | 说明 |
|-----------|-----------|
| icon | 自定义icon区域 |
| message-extra | 状态栏添加额外的元素 |
