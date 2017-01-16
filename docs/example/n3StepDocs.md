<template>

## 步骤条

<div class="bs-docs-section" id="步骤条" >

> 普通步骤条

<div class="bs-example">
<n3-step :labels="['第一步 我的文案比较长','第二步','第三步']"></n3-step>
</div>

```html
<n3-step :labels="['第一步 我的文案比较长','第二步','第三步']"></n3-step>
```

> 前台步骤条

<div class="bs-example">
<n3-step round :labels="['第一步 我的文案比较长','第二步','第三步']" :current="2"></n3-step>
</div>

```html
<n3-step round :labels="['第一步 我的文案比较长','第二步','第三步']" :current="2"></n3-step>
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| labels | `Array` |  | 文案数组 |
| current | `Number` | `1` | 当前步数 |
| round | `Boolean` | `false` | 是否为前台步骤条 |

</div>
</template>
