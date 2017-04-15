<template>

### 多选框

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

### Group 参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| options          | `Array`     |    -        |     选项     |
| type          | `String`     |    `radio`       |     `radio`,`button` 使用options时起作用     |

### Group Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 值变化 | (currentValue) |

### Checkbox 参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| disabled          | `Boolean`     |    false       |     禁用     |
| checked          | `Boolean`     |    false       |   选中     |

### Checkbox Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 值变化 | (currentValue) |

    
其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数

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
