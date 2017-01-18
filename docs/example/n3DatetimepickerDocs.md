<template>

### 日期时间选择器

<div class="bs-docs-section"  >
<div class="bs-example">
<n3-datetimepicker v-model="value" format="yyyy-MM-dd hh:mm"></n3-datetimepicker>
</div>


```html
<n3-datetimepicker v-model="value" format="yyyy-MM-dd hh:mm"></n3-datetimepicker>
```

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| width          | `String`     |    `200px`        |     输入框宽度     |
| format          | `String`     |    `yyyy-MM-dd hh:mm:ss`       |     日期格式   |

### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| hide | 隐藏 |
| change | 改变 |


<p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
</div>
</template>

<script>

export default {
  methods: {
    hide (val) {
      console.log(val)
    }
  },
  data () {
    return {
      value: '2016-03-25 06:00:00',
      value1: ''
    }
  }
}
</script>
