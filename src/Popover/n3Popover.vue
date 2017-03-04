<template>
<span >
    <span v-el:trigger >
      <slot>
      </slot>
    </span>
    <div 
      style="max-width:none"
      :class="classObj"
      v-el:popover
      v-show="show"
      :transition="effect">
        <div class="{{prefixCls}}-popover-arrow"></div>
        <h3 class="{{prefixCls}}-popover-title" v-show="header">{{title}}</h3>
        <div class="{{prefixCls}}-popover-content" v-el:content>
         <slot name="content"></slot>
        </div>
    </div>
</span>
</template>

<script>
import PopoverMixin from '../mixin/popoverMixins'
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