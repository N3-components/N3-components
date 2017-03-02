<template>

### 按钮

<div class="bs-docs-section" id="按钮"  >
<div class="bs-example">

<n3-button loading >default</n3-button>
<n3-button badge="2" >badge</n3-button>
<n3-button disabled>default</n3-button>
<n3-button active type="primary" loading>primary</n3-button>
<n3-button type="success">success</n3-button>
<n3-button type="info">info</n3-button>
<n3-button type="warning">warning</n3-button>
<n3-button type="danger">danger</n3-button>

```html
<n3-button loading >default</n3-button>
<n3-button badge="2" >badge</n3-button>
<n3-button disabled>default</n3-button>
<n3-button type="primary" loading>primary</n3-button>
<n3-button type="success">success</n3-button>
<n3-button type="info">info</n3-button>
<n3-button type="warning">warning</n3-button>
<n3-button type="danger">danger</n3-button>
```

<n3-button type="primary" size="lg">primary lg</n3-button>
<n3-button type="primary">primary default</n3-button>
<n3-button type="primary" size="sm">primary sm</n3-button>
<n3-button type="primary" size="xs">primary xs</n3-button>

```html
<n3-button type="primary" size="lg">lg</n3-button>
<n3-button type="primary">default</n3-button>
<n3-button type="primary" size="sm">sm</n3-button>
<n3-button type="primary" size="xs">xs</n3-button>
```

<n3-button-group>
  <n3-button >default</n3-button>
  <n3-button >default</n3-button>
  <n3-button type="primary">primary</n3-button>
  <n3-button >default</n3-button>
</n3-button-group>

```html
<n3-button-group>
  <n3-button >default</n3-button>
  <n3-button >default</n3-button>
  <n3-button type="primary">primary</n3-button>
  <n3-button >default</n3-button>
</n3-button-group>
```

</div>

### Button参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `String` |  | `lg` `sm` `xs` |
| loading | `Boolean` |  | `加载状态` |
| disabled | `Boolean` |  | 禁用状态 |
| active | `Boolean` | `false` | 激活状态 |
| badge | `String` `Number` |  | 徽标 |
| block | `Boolean` | `false` | 是否块级元素 |
| type | `String`, 如: `default` `primary` `danger` `info` `warning` `success` | `default` |  |

</div>
</template>
