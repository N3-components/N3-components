<template>

### Radio

<div class="bs-docs-section" >
  <div class="bs-example">
    <h4>Radio</h4>

<n3-radio-group v-model="radioValue" type="primary">
  <n3-radio label="left" disabled>Left</n3-radio>
  <n3-radio label="middle" checked>Middle</n3-radio>
  <n3-radio label="right">Right</n3-radio>
</n3-radio-group>

```html
<n3-radio-group v-model="radioValue" type="primary">
  <n3-radio label="left" disabled>Left</n3-radio>
  <n3-radio label="middle" checked>Middle</n3-radio>
  <n3-radio label="right">Right</n3-radio>
</n3-radio-group>
```


<n3-radio-group v-model="radioValue" type="primary">
  <n3-radio-btn label="left" disabled>Left</n3-radio-btn>
  <n3-radio-btn label="middle" checked>Middle</n3-radio-btn>
  <n3-radio-btn label="right">Right</n3-radio-btn>
</n3-radio-group>

```html
<n3-radio-group v-model="radioValue" type="primary">
  <n3-radio-btn label="left" disabled>Left</n3-radio-btn>
  <n3-radio-btn label="middle" checked>Middle</n3-radio-btn>
  <n3-radio-btn label="right">Right</n3-radio-btn>
</n3-radio-group>

```


### group Params
| name | type | default | description |
|-------------  |---------------- |----------------  |-------- |
| options          | `Array`     |    -        |     options     |
| type          | `String`     |    `radio`       |     `radio`,`button` works with `options`    |

### Events

| name          |   description          |     params   
|-------------  |---------------- | ----| 
| change | change |(currentValue) |

### radio Params
| name | type | default | description 
|-------------  |---------------- |----------------  |-------- |
| disabled          | `Boolean`     |    `false`       |     disabled     |
| checked          | `Boolean`     |    `false`       |   checked    |

### Events

| name          |   description          |    params    |
|-------------  |---------------- | ------|
| change | change |(currentValue) |


<hr>
<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>

</div>
</template>

<script>

export default {
  data () {
    return {
      radioValue: ''
    }
  }
}
</script>
