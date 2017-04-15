<template>

### Step

<div class="bs-docs-section"  >

> default

<div class="bs-example">
<n3-step :labels="['Step1 current cotent','Step2','Step3']"></n3-step>
</div>

```html
<n3-step :labels="['Step1 current cotent','Step2','Step3']"></n3-step>
```

> round

<div class="bs-example">
<n3-step round :labels="['Step1 current cotent','Step2','Step3']" :current="2"></n3-step>
</div>

```html
<n3-step round :labels="['Step1 current cotent','Step2','Step3']" :current="2"></n3-step>
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| labels | `Array` |  | labels |
| current | `Number` | `1` | current step |
| round | `Boolean` | `false` | round |

</div>
</template>
