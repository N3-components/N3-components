<template>
<span >
  <span v-el:trigger >
    <slot>
    </slot>
  </span>
  <div :class="classObj"
    v-el:popover
    v-show="show"
    :transition="effect">
    <div :class="`${prefixCls}-tooltip-arrow`"></div>
    <div :class="`${prefixCls}-tooltip-inner`">
      {{{content}}}
    </div>
  </div>
</span>
</template>

<script>
import PopoverMixin from './popoverMixins'
export default {
  props: {
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  mixins: [PopoverMixin],
  computed: {
    classObj () {
      let {prefixCls, placement} = this
      let klass = {}

      klass[prefixCls + '-tooltip'] = true
      klass[prefixCls + '-tooltip-top'] = placement === 'top'
      klass[prefixCls + '-tooltip-left'] = placement === 'left'
      klass[prefixCls + '-tooltip-right'] = placement === 'right'
      klass[prefixCls + '-tooltip-bottom'] = placement === 'bottom'

      return klass
    }
  }
}
</script>
