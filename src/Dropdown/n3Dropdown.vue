<template>
  <div class="{{prefixCls}}-dropdown-con">   
    <span v-el:trigger> 
      <slot name="trigger" ></slot>
    </span>
    <ul class="{{prefixCls}}-dropdown-menu" v-show="show" :transition="effect">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import EventListener from '../utils/EventListener'

export default {
  props: {
    show: {
      type: Boolean,
      twoWay: true
    },
    trigger: {
      type: String,
      default: 'click'
    },
    clickClose: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: 'fadeDown'
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  methods: {
    toggleDropdown () {
      this.show = !this.show
    }
  },
  ready () {
    let el = this.$el
    let triger = this.$els.trigger.children[0]

    if (this.trigger === 'click') {
      this._clickEvent = EventListener.listen(triger, 'click', this.toggleDropdown)
      this._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!this.clickClose && !el.contains(e.target)) this.show = false
      })
    } else if (this.trigger === 'hover') {
      this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', () => {
        this.show = true
      })
      this._closeEvent = EventListener.listen(this.$el, 'mouseleave', () => {
        this.show = false
      })
    }
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove()
    if (this._clickEvent) this._clickEvent.remove()
    if (this._mouseenterEvent) this._mouseenterEvent.remove()
  }
}
</script>