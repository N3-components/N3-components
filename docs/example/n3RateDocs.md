<template>

## 评分

<div class="bs-docs-section" id="评分">
<div class="bs-example">
  <n3-rate v-model="value" :allow-half="true"></n3-rate>
</div>

```html
<n3-rate v-model="value" :allow-half="true"></n3-rate>
```

### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |

</div>
</template>

<script>
  export default {
    data () {
      return {
        value: 3
      }
    }
  }
</script>
