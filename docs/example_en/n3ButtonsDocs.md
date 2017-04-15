<template>

### Button

<div class="bs-docs-section" >
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

### Params
| name | type | default | description |
| --- | --- | --- | --- |
| size | `String` |  | `lg` `sm` `xs` |
| loading | `Boolean` |  | loading |
| disabled | `Boolean` |  | disabled |
| active | `Boolean` | `false` | active |
| badge | `String` `Number` |  | badge content |
| block | `Boolean` | `false` | whether is block element or not  |
| type | `String`, one of `default` `primary` `danger` `info` `warning` `success` | `default` |  |

</div>
</template>
