<template>

### 日期选择器

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

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| width          | `String`     |    `200px`        |     输入框宽度     |
| format          | `String`     |    `yyyy-MM-dd`        |     日期格式, 如 d, dd, M, MM ,MMM , MMMM, yyyy.     |

### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| change | 值变化 |

<p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
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
