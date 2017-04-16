<template>

### Checkbox

<div class="bs-docs-section" >
<div class="bs-example">
<h4>Checkbox</h4>
<n3-checkbox  label="single">single</n3-checkbox>

```html
<n3-checkbox label="single">single</n3-checkbox>
```
<hr>

<n3-checkbox-group v-model="checkboxValue" >
  <n3-checkbox-btn label="left" disabled>Left</n3-checkbox-btn>
  <n3-checkbox-btn label="middle" checked>Middle</n3-checkbox-btn>
  <n3-checkbox-btn label="right">Right</n3-checkbox-btn>
</n3-checkbox-group>

```html
<n3-checkbox-group v-model="checkboxValue" >
  <n3-checkbox-btn label="left" disabled>Left</n3-checkbox-btn>
  <n3-checkbox-btn label="middle" checked>Middle</n3-checkbox-btn>
  <n3-checkbox-btn label="right">Right</n3-checkbox-btn>
</n3-checkbox-group>
```

<n3-checkbox-group v-model="checkboxValue">
  <n3-checkbox label="left" disabled>Left</n3-checkbox>
  <n3-checkbox label="middle" checked>Middle</n3-checkbox>
  <n3-checkbox label="right">Right</n3-checkbox>
</n3-checkbox-group>

```html
<n3-checkbox-group v-model="checkboxValue">
  <n3-checkbox label="left" disabled>Left</n3-checkbox>
  <n3-checkbox label="middle" checked>Middle</n3-checkbox>
  <n3-checkbox label="right">Right</n3-checkbox>
</n3-checkbox-group>
```

### Group Params
| name | type | default | description 
|-------------  |---------------- |----------------  |-------- |
| options          | `Array`     |    -        |     options     |
| type          | `String`     |    `radio`       |     `radio`,`button` work with `options`     |

### Group Events

| name      | description    | params      |
|---------- |-------- |---------- |
| change | change | (currentValue) |

### Checkbox Params

| name | type | default | description 
|-------------  |---------------- |----------------  |-------- |
| disabled          | `Boolean`     |    false       |     disabled     |
| checked          | `Boolean`     |    false       |   checked     |

### Checkbox Events

| name      | description    | params      |
|---------- |-------- |---------- |
| change | change | (currentValue) |

<p>PS: params of form components，look <a href="#n3FormDocs" >Form</a> </p>

</div>
</template>

<script>
export default {
  data () {
    return {
      single: false,
      checkboxValue: []
    }
  }
}
</script>
