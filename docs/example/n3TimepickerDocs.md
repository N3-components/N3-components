<template>

### 时间选择器

<div class="bs-docs-section"  >
<div class="bs-example">
<n3-timepicker v-model="value"  format="hh:mm:ss"></n3-timepicker>
</div>

```html
<n3-timepicker v-model="value"  format="hh:mm:ss"></n3-timepicker>
```


### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| format          | `String`     |    `hh:mm:ss`        |     格式     |
| hour-range          | `String`     |    `[0,60]`      |     小时范围     |
| minute-range          | `String`     |    `[0,60]`      |     分钟范围     |
| second-range          | `String`     |    `[0,60]`       |     秒范围     |

### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| hide | 隐藏 |
| change | 改变 |

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
      value: '',
      value1: ''
    }
  }
}
</script>
