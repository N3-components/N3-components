<template>

### Affix

<div class="bs-docs-section" >
  <div class="bs-example">
    <h3>
      <n3-affix :offset="0" >
        <nav class="sidebar">
          <ul>
            <li>...</li>
            <li>...</li>
            <li>...</li>
          </ul>
        </nav>
      </n3-affix>
    </h3>
  </div>

```html
<n3-affix :offset="0">
  <nav class="sidebar">
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>
  </nav>
</n3-affix>
```



### Params
| name | type | default | description |
| --- | --- | --- | --- |
| offset | `Number` | `0` | The pixel value from the top of the screen |

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar{
  background-color: #fff;
  box-shadow: 1px 1px 10px #ddd;
  z-index: 10000;
  padding:10px;
}
pre[class*='language-']{
  position: static;
}
</style>
