## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'matrix';

Vue.use(Loading);
```

### 代码演示

#### Circular

```html
<m-loading color="black" />
<m-loading color="white" />
```

#### Spinner

```html
<m-loading type="spinner" color="black" />
<m-loading type="spinner" color="white" />
```

#### Circle

```html
<m-loading type="circle" color="black" />
<m-loading type="circle" color="white" />
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| color | 颜色 | `String` | `black` | `white` |
| type | 类型 | `String` | `circular` | `spinner` `circle` |
| size | 大小 | `String` | `30px` | - |
