<template>
  <div
   v-show="show"
   :class="classObj"
    transition="fade"
    :style="{width:width}">

    <n3-icon class="{{prefixCls}}-alert-icon" :type="iconType" ></n3-icon>

    <button v-if="dismissable" type="button" class="{{prefixCls}}-close"
      @click="_handleClose" >
      <span>&times;</span>
    </button>

    <div v-if="description" class="{{prefixCls}}-alert-content">
      <h4>{{message}}</h4>
      <p><slot></slot></p>
    </div>
    <span v-else>
        <slot></slot>
    </span>
  </div>
</template>

<script>
import type from 'get-type'
import n3Icon from './n3Icon'

export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    dismissable: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true,
      twoWay: true
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
    onClose: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  methods: {
    _handleClose (e) {
      this.show = false
      if (type.isFunction(this.onClose)) {
        this.onClose()
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        if (this.placement === 'top' || this.placement === 'bottom') {
          this.$el.style.marginLeft = - this.$el.offsetWidth / 2 + 'px'
        } else if (this.placement === 'center') {
          this.$el.style.marginLeft = - this.$el.offsetWidth / 2 + 'px'
          this.$el.style.marginTop = - this.$el.offsetHeight / 2 + 'px'
        }
      }

      if (this._timeout) clearTimeout(this._timeout)
      if (val && !!this.duration) {
        this._timeout = setTimeout(() => this.show = false, this.duration)
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
      return map[type]
    },
    classObj () {
      let {prefixCls, type, placement, small} = this
      let klass = {}

      klass[prefixCls + '-alert-small'] = small
      klass[prefixCls + '-alert'] = true
      klass[prefixCls + '-alert-' + type] = true
      klass[prefixCls + '-' + placement] = true

      return klass
    }
  },
  components: {
    n3Icon
  }
}
</script>