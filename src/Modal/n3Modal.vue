<template>
  <div :class="classObj">
    <div :class="`${prefixCls}-modal-dialog`" 
      :style="{'width': width}">
      <div :class="`${prefixCls}-modal-content`">
        <slot name="header">
          <div :class="`${prefixCls}-modal-header`">
            <button type="button" :class="`${prefixCls}-close`" @click="close"><span>&times;</span></button>
            <h4 :class="`${prefixCls}-modal-title`" >{{title}}</h4>
          </div>
        </slot>
        
        <div :class="`${prefixCls}-modal-body`">
          <slot name="body"></slot>
        </div>
      
        <div :class="`${prefixCls}-modal-footer`">
          <slot name="footer">
              <n3-button  @click.native="close">{{getL('cancel')}}</n3-button>
              <n3-button type="primary" @click.native="confirm">{{getL('confirm')}}</n3-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getScrollBarWidth from '../utils/getScrollBarWidth'
import EventListener from '../utils/EventListener'
import n3Button from '../Button/n3Button'
import element from '../utils/element'
import localeMixin from '../Mixin/localeMixin'

export default {
  name: 'n3Modal',
  mixins: [localeMixin('n3Modal')],
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
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
  data () {
    let show = this.show
    return {
      isShow: show
    }
  },
  watch: {
    isShow (val) {
      if (val) {
        this.$emit('show')
      } else {
        this.$emit('hide')
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
            if (e.target === el) this.isShow = false
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
          this.$emit('closed')
        }, 300)
      }
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    open () {
      this.isShow = true
    },
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>
