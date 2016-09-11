<template>
  <div 
    :style="{width:width}"
    :class="classObj"
    v-show="show"
    :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
    <div class="{{prefixCls}}-aside-dialog">
      <div class="{{prefixCls}}-aside-content">
        <div class="{{prefixCls}}-aside-header">
          <button type="button" class="{{prefixCls}}-close" @click='close'><span>&times;</span></button>
          <h4 class="{{prefixCls}}-aside-title">{{header}}</h4>
        </div>
        <div class="{{prefixCls}}-aside-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventListener from './utils/EventListener'
import getScrollBarWidth from './utils/getScrollBarWidth'
import type from './utils/type'

export default {
  props: {
    show: {
      type: Boolean,
      require: true,
      twoWay: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    header: {
      type: String
    },
    width: {
      type: String,
      default: '320px'
    },
    onShow: {
      type: Function
    },
    onHide: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
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
        body.classList.add(prefixCls + '-modal-open')
        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px'
        }
        backdrop.className += ' ' + prefixCls + '-aside-in'
        this._clickEvent = EventListener.listen(backdrop, 'click', this.close)
        if (type.isFunction(this.onShow)) {
          this.onShow()
        }
      } else {
        if (this._clickEvent) this._clickEvent.remove()
        backdrop = document.querySelector('.' + prefixCls + '-aside-backdrop')
        backdrop.className = prefixCls + '-aside-backdrop'
        setTimeout(() => {
          body.classList.remove(prefixCls + '-modal-open')
          body.style.paddingRight = '0'
          body.removeChild(backdrop)
        }, 300)
        if (type.isFunction(this.onHide)) {
          this.onHide()
        }
      }
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>