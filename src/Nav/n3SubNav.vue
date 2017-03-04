<template>
<span>
  <n3-dropdown :trigger="trigger" :show.sync="show" :click-close="true" effect="collapse">
    <div slot="trigger"   class="{{prefixCls}}-sub-nav-trigger" >
      <slot name="title"></slot>
      <n3-icon class="{{prefixCls}}-sub-nav-fa" :type="show ? 'angle-up' : 'angle-down'" ></n3-icon>
    </div>
    <slot></slot>  
  </n3-dropdown>
</span>
</template>
<script>
import n3Dropdown from '../Dropdown/n3Dropdown'
import n3Icon from '../Icon/n3Icon'

export default{
  props: {
    key: {
      type: [String, Number]
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data() {
    return {
      show: false
    }
  },
  watch: {
    show () {
      this.$dispatch('@n3NavOpen',this.key,this.show)
    }
  },
  events: {
    '@n3NavOpenChange': function(keys) {
      this.show = keys.findIndex(i => i == this.key) > -1
    }
  },
  computed:{
    trigger () {
      return this.$parent.trigger
    }
  },
  components: {
    n3Dropdown,
    n3Icon
  }
}
</script>