<template>
  <li :class="`${prefixCls}-nav-item-group`">
    <div :class="`${prefixCls}-nav-item-group__title`" :style="{paddingLeft: levelPadding + 'px'}">
      <template v-if="!$slots.title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'n3NavGroup',
    componentName: 'n3NavGroup',
    props: {
      title: {
        type: String
      },
      prefixCls: {
        type: String,
        default: 'n3'
      }
    },
    data() {
      return {
        paddingLeft: 20
      }
    },
    computed: {
      levelPadding() {
        let padding = 10
        let parent = this.$parent
        while (parent && parent.$options.componentName !== 'n3Nav') {
          if (parent.$options.componentName === 'n3SubNav') {
            padding += 20
          }
          parent = parent.$parent
        }
        padding === 10 && (padding = 20)
        return padding
      }
    }
  }
</script>