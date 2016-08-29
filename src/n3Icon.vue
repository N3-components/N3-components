<template>
  <i :class="['fa','fa-'+type]" :style="{fontSize:size}"></i>
</template>
<script>
export default{
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    }
  }
}
</script>