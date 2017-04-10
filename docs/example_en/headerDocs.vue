<template>
  <header class="bs-docs-nav" id="top" >
    <n3-container fluid style="width:92%">
      <n3-nav mode="horizontal">
        <n3-nav-item index="1">
          <a class="link" href="./index.html" >N3</a>
        </n3-nav-item>
         <n3-nav-item index="2">
          <a class="link" href="./component.html">EN</a>
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
