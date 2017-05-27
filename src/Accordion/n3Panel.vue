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
    <n3-collapse-transition>
      <div
        :class="`${prefixCls}-panel-collapse`"
        v-if="open">
        <div :class="`${prefixCls}-panel-body`">
          <slot></slot>
        </div>
      </div>
    </n3-collapse-transition>
  </div>
</template>

<script>
import type from '../utils/type'
import n3CollapseTransition from '../n3CollapseTransition'

export default {
  name: 'n3Panel',
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
      this.$emit('change', item)
    }
  },
  components: {
    n3CollapseTransition
  }
}
</script>
