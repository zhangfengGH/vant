## Tag 标记

### 使用指南
``` javascript
import { Tag } from 'matrix';

Vue.use(Tag);
```

### 代码演示

#### 基础用法
通过 type 属性控制 Tag 颜色，默认为灰色

```html
<m-tag>标签</m-tag>
<m-tag type="danger">标签</m-tag>
<m-tag type="success">标签</m-tag>
<m-tag type="primary">标签</m-tag>
```

#### 空心样式
设置`plain`属性设置为空心样式

```html
<m-tag plain>标签</m-tag>
<m-tag plain type="danger">标签</m-tag>
<m-tag plain type="primary">标签</m-tag>
<m-tag plain type="success">标签</m-tag>
```

#### 标记样式
通过`mark`设置为标记样式

```html
<m-tag mark>标签</m-tag>
<m-tag mark type="danger">标签</m-tag>
<m-tag mark type="primary">标签</m-tag>
<m-tag mark type="success">标签</m-tag>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 类型 | `String` | `''`| `primary` `success` `danger` |
| plain | 是否为空心样式 | `Boolean` | `false` | - |
| mark | 是否为标记样式 | `Boolean` | `false` | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义 Tag 显示内容 |
