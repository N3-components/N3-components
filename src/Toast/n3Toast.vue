<template>
  <transition name="fade">
    <div
      ref="dom"
      :class="classObj"
      @click="handleClick"
      v-if="show">
      <h5 v-text="text"></h5>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'n3Toast',
  props: {
    placement: {
      type: String,
      default: 'center',
      validator(v) {
        return [
          'bottom-right',
          'top',
          'top-right',
          'top-left',
          'bottom',
          'bottom-left',
        ].includes(v);
      },
    },
    type: {
      type: String,
      default: 'default',
      validator(v) {
        return [
          'default',
          'success',
          'primary',
          'info',
          'warning',
          'danger',
        ].includes(v);
      },
    },
    duration: {
      type: Number,
      default: 3000
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      required: true
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
      let {prefixCls, placement, type} = this
      let klass = {}

      klass[prefixCls + '-toast'] = true
      klass[prefixCls + '-toast-' + type] = true
      klass[prefixCls + '-toast-' + placement] = true

      return klass
    }
  },
 
  methods: {
    handleClick () {
      if (this.closeOnClick) {
        this.show = false
      }
    }
  },

  watch: {
    show: {
      handler (val, newVal) {
        this.setT = window.clearTimeout(this.setT)
        if (val) {
          this.$nextTick(() => {
            // recompute position
            if (this.placement === 'top' || this.placement === 'bottom') {
              this.$refs.dom.style.marginLeft = -1 * this.$refs.dom.offsetWidth / 2 + 'px'
            } else if (this.placement === 'center') {
              this.$refs.dom.style.marginLeft = -1 * this.$refs.dom.offsetWidth / 2 + 'px'
              this.$refs.dom.style.marginTop = -1 * this.$refs.dom.offsetHeight / 2 + 'px'
            }
          })
        }
      /* if (val && this.duration) {
        this.setT = window.setTimeout(() => {
          self.show = false
        }, this.duration)
      } */
      },
      immediate: true
    }
  }
}
</script>
