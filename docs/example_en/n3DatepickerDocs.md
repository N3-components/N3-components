<template>

### Datepicker

<div class="bs-docs-section" >
<div class="bs-example">
<p>
<pre>
Selected date is: {{new Date(value).toString().slice(0, -23)}}
</pre>
</p>
<n3-datepicker
  v-model="value"
  format="yyyy-MM-dd" >
</n3-datepicker>

</div>

```html
<n3-datepicker
  v-model="value"
  format="yyyy-MM-dd">
</n3-datepicker>

<n3-select multiple v-model="disabled" >
  <n3-option value="0">0</n3-option>
  <n3-option value="1">1</n3-option>
  <n3-option value="2">2</n3-option>
  <n3-option value="3">3</n3-option>
  <n3-option value="4">4</n3-option>
  <n3-option value="5">5</n3-option>
  <n3-option value="6">6</n3-option>
</n3-select>
```

### Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| width          | `String`     |    `200px`        |     width of input     |
| format          | `String`     |    `yyyy-MM-dd`        |     format value (d, dd, M, MM ,MMM , MMMM, yyyy. )   |
| readonly          | `Boolean`     |    `true`        | readonly |
| disabled          | `Boolean`     |    `false`        | disabled |

### Events

| name          |   description          |     params   
|-------------  |---------------- |---|
| change | value change |(currentValue) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>
</div>
</template>

<script>

export default {
  data () {
    return {
      value: '2016-03-25'
    }
  },
  methods: {
    change (val) {
    }
  }
}
</script>
