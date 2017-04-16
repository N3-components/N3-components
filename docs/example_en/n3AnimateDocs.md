<template>

### Animate

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
<!--work width ( v-if , v-show , v-for)-->
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

### Params
| name | type | default | description
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
