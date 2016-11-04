<template>
<div :class="`${prefixCls}-panel ${prefixCls}-panel-default`">
    <div :class="`${prefixCls}-panel-heading`">
      <h4 :class="`${prefixCls}-panel-title`">
        <a @click="toggleIsOpen()">
           <slot name="header">
            {{header}}
           </slot>
        </a>
      </h4>
    </div>
    <div
      :class="`${prefixCls}-panel-collapse`"
      v-el:panel
      v-show="isOpen"
      :transition="$parent.effect">
      <div :class="`${prefixCls}-panel-body`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import type from './utils/type'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    header: {
      type: String
    },
    index: {
    },
    onChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      height: 0
    }
  },
  methods: {
    toggleIsOpen () {
      this.isOpen = !this.isOpen
      this.$dispatch('n3@paneltoggle', this)

      if (type.isFunction(this.onChange)) {
        this.onChange({
          index: this.index,
          header: this.header,
          isOpen: this.isOpen
        })
      }
    }
  },
  ready () {
    const panel = this.$els.panel
    panel.style.display = 'block'
    if (!this.isOpen) panel.style.display = 'none'
  }
}
</script>
