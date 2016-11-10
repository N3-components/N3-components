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
    <transition :name="$parent.effect">
      <div
        :class="`${prefixCls}-panel-collapse`"
        ref="panel"
        v-show="open">
        <div :class="`${prefixCls}-panel-body`">
          <slot></slot>
        </div>
      </div>
    <transition>
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
    let open = this.isOpen
    return {
      height: 0,
      open: open
    }
  },
  watch: {
    isOpen (val) {
      this.open = this.isOpen
    }
  },
  methods: {
    toggleIsOpen () {
      this.open = !this.open
      let item = {
        index: this.index,
        header: this.header,
        isOpen: this.open
      }

      this.$parent.change(this)
      if (type.isFunction(this.onChange)) {
        this.onChange(item)
      }
    }
  },
  ready () {
    const panel = this.$refs.panel
    panel.style.display = 'block'
    if (!this.open) panel.style.display = 'none'
  }
}
</script>
