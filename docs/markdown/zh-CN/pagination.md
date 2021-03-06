
## Pagination 分页

### 使用指南
``` javascript
import { Pagination } from 'matrix';

Vue.use(Pagination);
```

### 代码演示

#### 基础用法


```html
<m-pagination 
  v-model="currentPage" 
  :total-items="24" 
  :items-per-page="5"
/>
```

```javascript
export default {
  data() {
    return  {
      currentPage: 1
    }
  }
}
```

#### 简单模式

```html
<m-pagination 
  v-model="currentPage" 
  :page-count="12"
  mode="simple" 
/>
```

#### 显示省略号

```html
<m-pagination 
  v-model="currentPage" 
  :total-items="125" 
  :show-page-size="3" 
  force-ellipses
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前页码 | `Number` | - | - |
| mode | 显示模式 | `String` | `multi` | `simple`  |
| items-per-page | 每页记录数 | `Number` | `10` | - |
| previous-text | 上一页 | `String` | `上一页` | - |
| next-text | 下一页 | `String` | `下一页` | - |
| show-page-size | 显示的页码个数 | `Number` | `5` | - |
| force-ellipses | 显示省略号 | `Boolean` | `false` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 页码改变时触发 | - |
