<template>
  <div :class="`${prefixCls}-dropdown-con`">   
    <span ref="trigger"> 
      <slot name="trigger" ></slot>
    </span>

    <transition :name="effect" v-if="effect!='collapse'">
      <ul v-n3-position="isShow" :class="`${prefixCls}-dropdown-menu`" v-show="isShow" >
          <slot></slot>
      </ul>
    </transition>
    <n3-collapse-transition v-if="effect=='collapse'">
      <ul :class="`${prefixCls}-dropdown-menu`" v-show="isShow" >
          <slot></slot>
      </ul>
    </n3-collapse-transition>

  </div>
</template>
<script>
import EventListener from '../utils/EventListener'
import n3CollapseTransition from '../n3CollapseTransition'

export default {
  name: 'n3Dropdown',
  props: {
    show: {
      type: Boolean,
      default: false
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
  data () {
    let show = this.show
    return {
      isShow: show
    }
  },
  methods: {
    open () {
      this.isShow = true
      this.$emit('show')
    },
    close () {
      this.isShow = false
      this.$emit('hide')
    },
    toggleDropdown () {
      this.$emit('toggle')
      this.isShow ? this.close() : this.open()
    }
  },
  components: {
    n3CollapseTransition
  },
  mounted () {
    this.$nextTick(() => {
      let el = this.$el
      let triger = this.$refs.trigger.children[0]
      if (this.trigger === 'click') {
        this._clickEvent = EventListener.listen(triger, 'click', this.toggleDropdown)
        this._closeEvent = EventListener.listen(window, 'click', (e) => {
          if (!this.clickClose && !el.contains(e.target)) {
            this.close()
          }
        })
      } else if (this.trigger === 'hover') {
        this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', () => {
          this.open()
        })
        this._closeEvent = EventListener.listen(this.$el, 'mouseleave', () => {
          this.close()
        })
      }
    })
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove()
    if (this._clickEvent) this._clickEvent.remove()
    if (this._mouseenterEvent) this._mouseenterEvent.remove()
  }
}
</script>