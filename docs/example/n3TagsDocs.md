<template>

### 标签

<div class="bs-docs-section" id="标签"  >

> 标签

<div class="bs-example">
  <n3-label>Default</n3-label>
  <n3-label type="primary">primary</n3-label>
  <n3-label type="danger">danger</n3-label>
  <n3-label type="success">success</n3-label>
  <n3-label type="info">info</n3-label>
  <n3-label type="warning">warning</n3-label>
</div>

```html
<n3-label>Default</n3-label>
<n3-label type="primary">primary</n3-label>
<n3-label type="danger">danger</n3-label>
<n3-label type="success">success</n3-label>
<n3-label type="info">info</n3-label>
<n3-label type="warning">warning</n3-label>
```

### label参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `String` | `default` | 颜色 |
| hover | `Boolean` | `true` |  |    

> 标签组

<div class="bs-example">
  <n3-tags v-model="list" ></n3-tags>
  <n3-tags v-model="list" type="primary"></n3-tags>
  <n3-tags v-model="list" type="success"></n3-tags>
  <n3-tags v-model="list" type="danger"></n3-tags>
  <n3-tags v-model="list" type="warning"></n3-tags>
  <n3-tags v-model="list" removable type="primary"></n3-tags>
</div>

```html
<n3-tags v-model="list" ></n3-tags>
<n3-tags v-model="list" type="primary"></n3-tags>
<n3-tags v-model="list" type="success"></n3-tags>
<n3-tags v-model="list" type="danger"></n3-tags>
<n3-tags v-model="list" type="warning"></n3-tags>
<n3-tags v-model="list" removable type="primary"></n3-tags>
```

```javascript
export default {
  data () {
    return {
      list: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4',
        disabled: true
      }]
    }
  }
}
```

### tags参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `String` | `default` | 颜色 |
| value | `Array` | `[]` | 内容数组 |
| size | `String` |  | 大小 sm,lg,xl |
| removable | `Boolean` | `false` | 是否可删除 |
   
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4',
        disabled: true
      }]
    }
  }
}
</script>

