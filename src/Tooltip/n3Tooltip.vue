<template>
<span>
  <span ref="trigger">
    <slot>
    </slot>
  </span>
  <transition :name="effect">
    <div :class="classObj"
      ref="popover"
      v-show="isShow">
      <div :class="`${prefixCls}-tooltip-arrow`"></div>
      <div :class="`${prefixCls}-tooltip-inner`">
        <span v-html="content"></span>
      </div>
    </div>
  </transition>
</span>
</template>

<script>
import PopoverMixin from '../Mixin/popoverMixin'
export default {
  name: 'n3Tooltip',
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
