<template>
<span >
    <span ref="trigger">
      <slot>
      </slot>
    </span>
    <transition :name="effect">
      <div 
        style="max-width:none"
        :class="classObj"
        ref="popover"
        v-show="isShow">
          <div :class="`${prefixCls}-popover-arrow`"></div>
          <h3 :class="`${prefixCls}-popover-title`" v-show="header">{{title}}</h3>
          <div :class="`${prefixCls}-popover-content`" ref="content">
           <slot name="content"></slot>
          </div>
      </div>
    </transition>
</span>
</template>

<script>
import PopoverMixin from '../Mixin/popoverMixin'
export default {
  name: 'n3Popover',
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

      klass[prefixCls + '-popover'] = true
      klass[prefixCls + '-popover-top'] = placement === 'top'
      klass[prefixCls + '-popover-left'] = placement === 'left'
      klass[prefixCls + '-popover-right'] = placement === 'right'
      klass[prefixCls + '-popover-bottom'] = placement === 'bottom'

      return klass
    }
  }
}
</script>