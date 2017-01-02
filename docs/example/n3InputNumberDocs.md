<template>

## 数字输入框

<div class="bs-docs-section">
  <div class="bs-example">
    <n3-input-number v-model="value" ></n3-input-number>
  </div>

```html
<n3-input-number v-model="value"></n3-input-number>
```


### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| max          | Number     |    -        |     最大值     |
| min          | Number     |    -        |     最小值     |
| step          | Number     |    1        |     增减量值     |

### 事件

| 名称          |   说明          |        
|-------------  |---------------- |
| blur          | 失焦     |  
| focus          | 聚焦     |  
| change | 值变化 |


<p>其他表单相关参数，请移步 <a href="#n3FormDocs" >表单验证</a> 待验证组件参数</p>
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
