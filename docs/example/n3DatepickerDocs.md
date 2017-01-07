<template>

## 日期选择器

<div class="bs-docs-section" >
<div class="bs-example">
<p>
<pre>
Selected date is: {{new Date(value).toString().slice(0, -23)}}
</pre>
</p>
<n3-datepicker
ref="dp"
v-model="value"
:disabled-days-of-Week="disabled"
:format="format.toString()" >
</n3-datepicker>
<h4>一周内无法选择的日期</h4>

<n3-select multiple :value.sync="disabled">
<n3-option value="0">0</n3-option>
<n3-option value="1">1</n3-option>
<n3-option value="2">2</n3-option>
<n3-option value="3">3</n3-option>
<n3-option value="4">4</n3-option>
<n3-option value="5">5</n3-option>
<n3-option value="6">6</n3-option>
</n3-select>

<h4>Format</h4>
<n3-select :value.sync="format" >
<n3-option value="yyyy,MM,dd">yyyy,MM,dd</n3-option>
<n3-option value="yyyy-MM-dd">yyyy-MM-dd</n3-option>
<n3-option value="yyyy.MM.dd">yyyy.MM.dd</n3-option>
<n3-option value="MMM/dd/yyyy">MMM/dd/yyyy</n3-option>
<n3-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</n3-option>
</n3-select>
</div>

```html
<n3-datepicker
  :value.sync="value"
  :disabled-days-of-Week="disabled"
  :format="format">
</n3-datepicker>

<n3-select multiple :value.sync="disabled" size=5>
  <n3-option value="0">0</n3-option>
  <n3-option value="1">1</n3-option>
  <n3-option value="2">2</n3-option>
  <n3-option value="3">3</n3-option>
  <n3-option value="4">4</n3-option>
  <n3-option value="5">5</n3-option>
  <n3-option value="6">6</n3-option>
</n3-select>
<n3-select  :value.sync="format">
  <n3-option value="yyyy,MM,dd">yyyy,MM,dd</n3-option>
  <n3-option value="yyyy-MM-dd">yyyy-MM-dd</n3-option>
  <n3-option value="yyyy.MM.dd">yyyy.MM.dd</n3-option>
  <n3-option value="MMM/dd/yyyy">MMM/dd/yyyy</n3-option>
  <n3-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</n3-option>
</n3-select>
```

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| width          | String     |    200px        |     输入框宽度     |
| format          | String     |    yyyy-MM-dd        |     日期格式, 如 d, dd, M, MM ,MMM , MMMM, yyyy.     |
| disabled-days-of-week          | Array     |    200px        |     一周内无法选择的日期     |
| width          | String     |    200px        |     输入框宽度     |
| hour-range          | String     |    [0,60]      |     小时范围     |
| minute-range          | String     |    [0,60]      |     分钟范围     |
| second-range          | String     |    [0,60]       |     秒范围     |
| manual          | Boolean     |    false       |     是否允许手动输入     |

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
      disabled: [],
      value: '2016-03-25',
      format: ['MMM/dd/yyyy']
    }
  },
  methods: {
    change (val) {
    }
  },
  watch: {
    disabled () {
      this.$refs.dp.getDateRange()
    },
    format (newV) {
      this.value = this.$refs.dp.stringify(new Date(this.value))
    }
  }
}
</script>
