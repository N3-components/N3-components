<template>

## 文本框

<div class="bs-docs-section"  >
  <div class="bs-example">
   <n3-textarea v-model="value" ></n3-textarea>
  </div>

```html
<n3-textarea v-model="value" ></n3-textarea>
```

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| resize          | boolean     |    false        |     是否支持拖动     |
| max-length| Number | - |字符数限制 |
| max-height| String | - |最大高度 |
| min-height| String | - |最小高度 |

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
