<template>
  <div :class="classObj">
    <div class="{{prefixCls}}-modal-dialog" 
      :style="{'width': width}">
      <div class="{{prefixCls}}-modal-content">
        <slot name="header">
          <div class="{{prefixCls}}-modal-header">
            <button type="button" class="{{prefixCls}}-close" @click="close"><span>&times;</span></button>
            <h4 class="{{prefixCls}}-modal-title" >{{title}}</h4>
          </div>
        </slot>
        
        <div class="{{prefixCls}}-modal-body">
          <slot name="body"></slot>
        </div>
      
        <slot name="footer">
          <div class="{{prefixCls}}-modal-footer">
            <n3-button  @click="close">取消</n3-button>
            <n3-button type="primary" @click="confirm">确定</n3-button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import getScrollBarWidth from './utils/getScrollBarWidth'
import EventListener from './utils/EventListener'
import n3Button from './n3Button'
import type from './utils/type'
import element from './utils/element'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      require: true,
      type: Boolean,
      twoWay: true
    },
    width: {
      type: String,
      default: '600px'
    },
    effect: {
      type: String,
      default: 'fade'
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    onShow: {
      type: Function
    },
    onHide: {
      type: Function
    },
    onConfirm: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  components: {
    n3Button
  },
  computed: {
    classObj () {
      let {prefixCls, effect} = this
      let klass = {}

      klass[prefixCls + '-modal'] = true
      klass[prefixCls + '-modal-' + effect] = true

      return klass
    }
  },
  watch: {
    show (val) {
      if (val) {
        if (type.isFunction(this.onShow)) {
          this.onShow()
        }
      } else {
        if (type.isFunction(this.onHide)) {
          this.onHide()
        }
      }

      const el = this.$el
      const body = document.body
      const scrollBarWidth = getScrollBarWidth()
      if (val) {
        el.querySelector('.' + this.prefixCls + '-modal-content').focus()
        el.style.display = 'block'
        setTimeout(() => element.addClass(el, this.prefixCls + '-modal-in'), 0)
        element.addClass(body, this.prefixCls + '-modal-open')
        if (!scrollBarWidth) {
          element.addClass(body, this.prefixCls + '-modal-hide-y')
        }
        if (this.backdrop) {
          this._blurModalContentEvent = EventListener.listen(this.$el, 'click', (e) => {
            if (e.target === el) this.show = false
          })
        }
      } else {
        if (this._blurModalContentEvent) this._blurModalContentEvent.remove()
        element.removeClass(el, this.prefixCls + '-modal-in')
        setTimeout(() => {
          el.style.display = 'none'
          element.removeClass(body, this.prefixCls + '-modal-open')
          element.removeClass(body, this.prefixCls + '-modal-hide-y')
          body.style.paddingRight = '0'
        }, 300)
      }
    }
  },
  methods: {
    close () {
      this.show = false
    },
    confirm () {
      if (type.isFunction(this.onConfirm)) {
        this.onConfirm()
      }
    }
  }
}
</script>