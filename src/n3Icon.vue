<template>
  <i :class="['fa','fa-'+type]" ></i>
</template>
<script>
export default{
  props: {
    type: {
      type: String
    }
  }
}
</script>