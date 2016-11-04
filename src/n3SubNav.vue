<template>
<span>
  <n3-dropdown :trigger="trigger" :show.sync="show" :click-close="true" effect="collapse">
    <div slot="trigger"   :class="`${prefixCls}-sub-nav-trigger`" >
      <slot name="title"></slot>
      <n3-icon :class="`${prefixCls}-sub-nav-fa`" :type="show ? 'angle-up' : 'angle-down'" ></n3-icon>
    </div>
    <slot></slot>  
  </n3-dropdown>
</span>
</template>
<script>
import n3Dropdown from './n3Dropdown'
import n3Icon from './n3Icon'

export default{
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    show: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  components: {
    n3Dropdown,
    n3Icon
  }
}
</script>