<template>
  <transition name="fade">
    <div
     v-show="isShow"
     :class="classObj"
      :style="{width:width}">

      <n3-icon :class="`${prefixCls}-alert-icon`" :type="iconType" ></n3-icon>

      <button v-if="dismissable" type="button" :class="`${prefixCls}-close`"
         @click="handleClose" >
        <span>&times;</span>
      </button>

      <div v-if="description" :class="`${prefixCls}-alert-content`">
        <h4>{{message}}</h4>
        <p><slot></slot></p>
      </div>
      <span v-else>
          <slot></slot>
      </span>
    </div>
  </transition>
</template>

<script>
import n3Icon from '../Icon/n3Icon'

export default {
  name: 'n3Alert',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    dismissable: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 0
    },
    width: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: ''
    },
    message: {
      type: String
    },
    description: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    method: {
      type: Boolean,
      default: false
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
    handleClose (e) {
      this.isShow = false
      this.$emit('close')
    }
  },
  watch: {
    isShow (val) {
      if (val) {
        this.$nextTick(() => {
          if (this.method) {
            let parent = this.$el.parentNode
            parent.style.position = 'fixed'
            parent.style.zIndex = 1200
            this.$el.style.position = 'relative'
            this.$el.style.marginBottom = '20px'
            if (this.placement === 'top' || this.placement === 'bottom') {
              parent.style.marginLeft = -1 * (this.$el.offsetWidth / 2) + 'px'
            } else if (this.placement === 'center') {
              parent.style.marginLeft = -1 * (this.$el.offsetWidth / 2) + 'px'
              parent.style.marginTop = -1 * (this.$el.offsetHeight / 2) + 'px'
            }
          } else {
            if (this.placement === 'top' || this.placement === 'bottom') {
              this.$el.style.marginLeft = -1 * (this.$el.offsetWidth / 2) + 'px'
            } else if (this.placement === 'center') {
              this.$el.style.marginLeft = -1 * (this.$el.offsetWidth / 2) + 'px'
              this.$el.style.marginTop = -1 * (this.$el.offsetHeight / 2) + 'px'
            }
          }

          if (this._timeout) clearTimeout(this._timeout)
          if (val && !!this.duration) {
            this._timeout = setTimeout(() => {
              this.isShow = false
            }, this.duration)
          }
        })
      }
    }
  },
  computed: {
    iconType () {
      let {type} = this
      let map = {
        success: 'check-circle-o',
        danger: 'times-circle-o',
        warning: 'exclamation-circle',
        info: 'info-circle'
      }
      if (this.icon) {
        return this.icon
      }
      return map[type]
    },
    classObj () {
      let {prefixCls, type, placement, small} = this
      let klass = {}

      klass[prefixCls + '-alert-small'] = small
      klass[prefixCls + '-alert'] = true
      klass[prefixCls + '-alert-' + type] = true
      klass[prefixCls + '-alert-' + placement] = !this.method

      return klass
    }
  },
  components: {
    n3Icon
  }
}
</script>