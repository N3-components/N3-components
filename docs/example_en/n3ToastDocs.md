<template>

### Toast

<div class="bs-docs-section" id="Toast"  >
<div class="bs-example">
  <n3-button @click.native="showToast">Click</n3-button>
<div>

```html
<n3-button @click.native="showToast">Click</n3-button>
```

```javascript
export default {
  methods: {
    showToast () {
      this.n3Toast({
        text: 'success',
        type: 'success',
        placement: 'top',
        closeOnClick : true
      })
    }
  }
}
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| placement | `String`  one of  `top`, `top-right`,`top-left`, `bottom`,`bottom-left`, `bottom-right` | `center`.| placement |
| type | `String` | `default` | color |
| duration | `Number` | `3000` | duration setting ,you can set it as `0` to prevent Alert to be closed |
| closeOnClick | `Boolean` | `true` | it will hide when click |

</div>
</template>

<script>
export default {
  methods: {
    showToast () {
      this.n3Toast({
        text: 'success',
        type: 'success',
        placement: 'top',
        closeOnClick : true
      })
    }
  }
}
</script>
