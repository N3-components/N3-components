<template>

### Dropdown

<div class="bs-docs-section"  >
<div class="bs-example">
  <n3-dropdown>
    <div slot="trigger">
      <n3-button>
        click
        <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
      </n3-button>
    </div>
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </n3-dropdown>
</div>


```html
<n3-dropdown>
  <div slot="trigger">
    <n3-button>
      click
      <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
    </n3-button>
  </div>
  <li><a href="#">Action</a></li>
  <li><a href="#">Another action</a></li>
  <li><a href="#">Something else here</a></li>
</n3-dropdown>
```

```javascript
export default {
  data () {
    return {
      show: false
    }
  }
}
```

### Params

| name | type | default | description |
| --- | --- | --- | --- |
| show | `Boolean` | `false` | show |
| trigger | `String` 如: `click``hover` | click | trigger type |
| click-close | `Boolean` | `false` | click close |

</div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
