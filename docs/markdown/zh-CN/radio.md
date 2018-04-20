## Radio 单选框

### 使用指南
``` javascript
import { Radio } from 'matrix';

Vue.use(Radio);
```

### 代码演示

#### 基础用法
通过`v-model`绑定值当前选中项的 name

```html
<m-radio-group v-model="radio">
  <m-radio name="1">单选框 1</m-radio>
  <m-radio name="2">单选框 2</m-radio>
</m-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### 禁用状态
通过`disabled`属性禁止选项切换，在`m-radio`上设置`diabled`可以禁用单个选项

```html
<m-radio-group v-model="radio" disabled>
  <m-radio name="1">单选框 1</m-radio>
  <m-radio name="2">单选框 2</m-radio>
</m-radio-group>
```

#### 与 Cell 组件一起使用
此时你需要再引入`Cell`和`CellGroup`组件。

```html
<m-radio-group v-model="radio">
  <m-cell-group>
    <m-cell><m-radio name="1">单选框 1</m-radio></m-cell>
    <m-cell><m-radio name="2">单选框 2</m-radio></m-cell>
  </m-cell-group>
</m-radio-group>
```

### Radio API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 唯一标识符 | 任意类型 | - | - |
| disabled | 是否为禁用状态 | `Boolean` | `false` | - |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前选中项的 name | 任意类型 | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

### RadioGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name |
