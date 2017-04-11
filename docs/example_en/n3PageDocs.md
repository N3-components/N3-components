<template>

### Page

<div class="bs-docs-section" id="Page"  >
<div class="bs-example">
  <n3-page :total="100" @change="pagechange" v-model="current"  :show-sizer="true" :show-elevator="true"></n3-page>
  <hr></hr>
  <n3-page :total="100"  simple></n3-page>
</div>

```html
<n3-page :total="100" @change="pagechange" v-model="current"  :show-sizer="true" :show-elevator="true"></n3-page>
<n3-page :total="100" simple></n3-page>
```

```javascript
export default {
  data () {
    return {
      current: 1
    }
  },
  methods: {
    pagechange (page) {
      console.log(page)
    }
  }
}
```

### 参数

| name | type | default | description |
| --- | --- | --- | --- |
| total | `Number` |  | total page |
| current | `Number` | 1 | current page |
| value | `Number` |  |  |
| pagesize | `Number` | 10 | pagesize |
| pagesize-opts | `Array` | `[10, 20, 30, 40]` | pagesize options |
| simple | `Boolean` | `false` | simple type |
| show-total | `Boolean` | `false` | show total |
| show-elevator | `Boolean` | `false` | show elevator |
| show-sizer | `Boolean` | `false` | show sizer |

### Events

| name      | description    | params      |
|---------- |-------- |---------- |
| change  | change | `page`, `currentPagesize` |

</div>
</template>

<script>
export default {
  data () {
    return {
      current: 1
    }
  },
  methods: {
    pagechange (page) {
      console.log(page)
    }
  }
}
</script>
