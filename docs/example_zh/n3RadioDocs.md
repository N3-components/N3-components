<template>

### 单选框

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


### group 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| options          | `Array`     |    -        |     选项     |
| type          | `String`     |    `radio`       |     `radio`,`button` 使用`options`时起作用     |

### 事件

| 名称          |   说明          |     参数   
|-------------  |---------------- | ----| 
| change | 值变化 |(currentValue) |

### radio 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| disabled          | `Boolean`     |    `false`       |     禁用     |
| checked          | `Boolean`     |    `false`       |   选中     |

### 事件

| 名称          |   说明          |    参数    |
|-------------  |---------------- | ------|
| change | 值变化 |(currentValue) |


<hr>
   
<p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>

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
