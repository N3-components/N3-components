<template>

## 动画

<div class="bs-docs-section">
<div class="bs-example" >
  <n3-button  @click.native="show=!show">fadeLeft</n3-button>
  <transition name="fadeLeft">
    <div v-if="show"  class="content">
        <h4>Title</h4>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </div>
  </transition>

</div>

```html
<!--作用于( v-if , v-show , v-for) 等元素-->
<n3-button  @click.native="show=!show">fadeLeft</n3-button>
<transition name="fadeLeft">
  <div v-if="show"  class="content">
      <h4>Title</h4>
      <p>...</p>
      <p>...</p>
      <p>...</p>
  </div>
</transition>
```

### 参数
| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| name          | String     |    -         |   <code>fade</code> <code>fadeLeft</code><code>fadeDown</code><code>bounce</code><code>scale</code>    |

</div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
  .content {
    box-shadow: 1px 1px 10px #ddd;
    padding:10px;
    margin-top: 10px;
  }
</style>
