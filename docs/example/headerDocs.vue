<template>
  <header class="bs-docs-nav" id="top" >
    <n3-container fluid style="width:92%">
      <n3-nav>
        <n3-nav-item >
          <a href="./index.html" >N3</a>
        </n3-nav-item>
        <n3-nav-item :active="active==='base'">
          <a href="./component.html" >组件</a>
        </n3-nav-item>
         <n3-nav-item disabled>
          <a >图表</a>
        </n3-nav-item>
        <n3-nav-item disabled>
          <a >工具</a>
        </n3-nav-item>
      </n3-nav>
    </n3-container>
  </header>
</template>
<script>
export default{
  props: {
    active: {
      type: String
    }
  }
}
</script>
