<template>

## 导航

<div class="bs-docs-section"  >
<div class="bs-example">
<n3-nav theme="default" >
<n3-nav-item active>
<a>导航一</a>
</n3-nav-item>
<n3-nav-item disabled>
<a >导航二</a>
</n3-nav-item>
<n3-nav-item>
<n3-sub-nav trigger="hover" :show="show1" @show="show1 = true" @hide="show1 = false">
<a slot="title">导航三</a>
<n3-nav-item >
  <a>子导航一</a>
</n3-nav-item>
<n3-nav-item >
  <a>子导航二</a>
</n3-nav-item>
<n3-nav-item >
  <a >子导航三</a>
</n3-nav-item>
</n3-sub-nav>
</n3-nav-item>
</n3-nav>

```html
<n3-nav theme="default" >
  <n3-nav-item active>
    <a >导航一</a>
  </n3-nav-item>
  <n3-nav-item disabled>
    <a >导航二</a>
  </n3-nav-item>
  <n3-nav-item>
    <n3-sub-nav>
      <a slot="title">导航三</a>
      <n3-nav-item >
        <a>子导航一</a>
      </n3-nav-item>
      <n3-nav-item >
        <a>子导航二</a>
      </n3-nav-item>
      <n3-nav-item >
        <a >子导航三</a>
      </n3-nav-item>
    </n3-sub-nav>
  </n3-nav-item>
</n3-nav>
```

<n3-nav theme="dark" type="vertical" style="width:300px;">
<n3-nav-item active>
<a >导航一</a>
</n3-nav-item>
<n3-nav-item disabled>
<a >导航二</a>
</n3-nav-item>
<n3-nav-item>
<n3-sub-nav :show="show2" @toggle="show2 = !show2">
<a slot="title">导航三</a>
<n3-nav-item >
<a>子导航一</a>
</n3-nav-item>
<n3-nav-item >
<a>子导航二</a>
</n3-nav-item>
<n3-nav-item >
<a >子导航三</a>
</n3-nav-item>
</n3-sub-nav>
</n3-nav-item>
<n3-nav-item >
<a>导航四</a>
</n3-nav-item>
</n3-nav>

```html
<n3-nav theme="dark" type="vertical" >
  <n3-nav-item active>
    <a >导航一</a>
  </n3-nav-item>
  <n3-nav-item disabled>
    <a >导航二</a>
  </n3-nav-item>
  <n3-nav-item>
    <n3-sub-nav>
      <a slot="title">导航三</a>
      <n3-nav-item >
        <a>子导航一</a>
      </n3-nav-item>
      <n3-nav-item >
        <a>子导航二</a>
      </n3-nav-item>
      <n3-nav-item >
        <a >子导航三</a>
      </n3-nav-item>
    </n3-sub-nav>
    </n3-nav-item>
    <n3-nav-item >
      <a>导航四</a>
  </n3-nav-item>
</n3-nav>
```
</div>

### n3-nav参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| type          | String     |    horizontal        |     水平,垂直     |
| theme          | String     |    default        |     颜色   <code>default</code><code>dark</code>  |


### n3-sub-nav参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| trigger          | String     |    click        |     展开方式   <code>click</code><code>hover</code>  |
| show          | Boolean     |    false        |    是否展开  |


### n3-nav-item参数

| 参数          | 类型            |   默认值         |   说明   |
|-------------  |---------------- |----------------  |-------- |
| active          | Boolean     |    false        |     是否激活 |
| disabled          | Boolean     |    false        |    是否不可用  |

</div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false
    }
  }
}
</script>
