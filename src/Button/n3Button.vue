<template>
  <a :class="classObj">
  	<slot></slot>	
  	<n3-loading v-if="loading" size="xs" style="position:relative;top:2px"></n3-loading>
    <n3-badge  v-if="badge">{{badge}}</n3-badge>
  </a>
</template>
<script>
import n3Loading from '../Loading/n3Loading'
import n3Badge from '../Badge/n3Badge'

export default{
  name: 'n3Button',
  props: {
    size: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    },
    badge: {
      type: [String, Number]
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  computed: {
    classObj () {
      let {prefixCls, type, size, block, active, disabled} = this
      let klass = {}

      klass[prefixCls + '-btn'] = true
      klass[prefixCls + '-btn-block'] = block
      klass[prefixCls + '-btn-active'] = active
      klass[prefixCls + '-btn-disabled'] = disabled
      size ? klass[prefixCls + '-btn-' + size] = true : ''
      type ? klass[prefixCls + '-btn-' + type] = true : ''

      return klass
    }
  },
  components: {
    n3Loading,
    n3Badge
  }
}
</script>