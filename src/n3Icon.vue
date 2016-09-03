<template>
  <i :class="['fa','fa-'+type]" :style="{fontSize:size,color:color}"></i>
</template>
<script>
export default{
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    },
    color: {
      type: String
    }
  }
}
</script>