<template>
  <transition :name="(this.placement === 'left') ? 'slideleft' : 'slideright'">
    <div 
      :style="{width:width}"
      :class="classObj"
      v-show="show">
      <div :class="`${prefixCls}-aside-dialog`">
        <div :class="`${prefixCls}-aside-content`">
          <div :class="`${prefixCls}-aside-header`" v-if="header">
            <button type="button" :class="`${prefixCls}-close`" @click='close'><span>&times;</span></button>
            <h4 :class="`${prefixCls}-aside-title`">{{title}}</h4>
          </div>
          <div :class="`${prefixCls}-aside-body`">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import EventListener from '../utils/EventListener'
import getScrollBarWidth from '../utils/getScrollBarWidth'
import element from '../utils/element'

export default {
  name: 'n3Aside',
  props: {
    placement: {
      type: String,
      default: 'right'
    },
    title: {
      type: String
    },
    header: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '320px'
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    classObj () {
      let {prefixCls, placement} = this
      let klass = {}

      klass[prefixCls + '-aside'] = true
      klass[prefixCls + '-aside-left'] = placement === 'left'
      klass[prefixCls + '-aside-right'] = placement === 'right'

      return klass
    }
  },
  watch: {
    show (val) {
      let backdrop = document.createElement('div')
      let prefixCls = this.prefixCls
      const body = document.body
      backdrop.className = prefixCls + '-aside-backdrop'
      const scrollBarWidth = getScrollBarWidth()
      if (val) {
        body.appendChild(backdrop)
        element.addClass(body, prefixCls + '-modal-open')
        backdrop.className += ' ' + prefixCls + '-aside-in'
        this._clickEvent = EventListener.listen(backdrop, 'click', this.close)
        this.$emit('show')
      } else {
        if (this._clickEvent) this._clickEvent.remove()
        backdrop = document.querySelector('.' + prefixCls + '-aside-backdrop')
        backdrop.className = prefixCls + '-aside-backdrop'
        setTimeout(() => {
          element.removeClass(body, prefixCls + '-modal-open')
          body.style.paddingRight = '0'
          body.removeChild(backdrop)
        }, 300)
        this.$emit('hide')
      }
    }
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
    }
  }
}
</script>
