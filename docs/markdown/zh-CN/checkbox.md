## Checkbox 复选框

### 使用指南
``` javascript
import { Checkbox, CheckboxGroup } from 'matrix';

Vue.use(Checkbox).use(CheckboxGroup);
```

### 代码演示

#### 基础用法
通过`v-model`绑定 checkbox 的勾选状态

```html
<m-checkbox v-model="checked">复选框 1</m-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

#### 禁用状态

```html
<m-checkbox v-model="checked" disabled>复选框 2</m-checkbox>
```
#### 禁用内容部分点击事件

```html
<m-checkbox v-model="checked" label-disabled>复选框 3</m-checkbox>
```
#### Checkbox 组

需要与`m-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`m-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<m-checkbox-group v-model="result">
  <m-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </m-checkbox>
</m-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

#### 设置最大可选数

```html
<m-checkbox-group v-model="result" :max="2">
  <m-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </m-checkbox>
</m-checkbox-group>
```

#### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件

```html
<m-checkbox-group v-model="result">
  <m-cell-group>
    <m-cell v-for="(item, index) in list" :key="item">
      <m-checkbox :name="item">复选框 {{ item }}</m-checkbox>
    </m-cell>
  </m-cell-group>
</m-checkbox-group>
```

### Checkbox API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 是否为选中状态 | `Boolean` | `false` | - |
| name | 标识 Checkbox 名称 | 任意类型 | - | - |
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |
| label-disabled | 是否禁用单选框内容点击 | `Boolean` | `false` | - |
| shape | 形状 | `String` | `round` | `square` |

### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 所有选中项的 name | `Array` | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |
| max | 设置最大可选数 | `Number` | `0`（无限制） | - |

### Checkbox Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### CheckboxGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
