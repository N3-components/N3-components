<template>

### InputNumber

<div class="bs-docs-section">
<div class="bs-example">
  <n3-input-number v-model="value" ></n3-input-number>
</div>

```html
<n3-input-number v-model="value"></n3-input-number>
```


### Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| name           | `String`     |    －        |        |
| readonly          | `Boolean`     |    `false`        |   readonly    |
| disabled          | `Boolean`     |    `false`       |    disabled    |
| width          | `String`     |    `220px`        |   width    |
| placeholder          | `String`   |    －        |  placeholder      |
| max          | `Number`     |    -        |     max     |
| min          | `Number`     |    -        |     min     |
| step          | `Number`     |    `1`       |     step     |

### Events

| name          |   description          |  params  |      
|-------------  |---------------- | -----|
| blur          | blur     | - |
| focus          | focus     | - |
| change | change |  (currentValue) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>

</div>
</template>

<script>

export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
