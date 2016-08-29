<template>
	<div 
    v-el:dom
    :class="classObj"
		transition="fade"
		@click="handleClick"
		v-if="show">
		<h5>{{text}}</h5>
	</div>
</template>

<script>
export default {
  props: {
    top: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'center'
    },
    type: {
      type: String,
      default: 'default'
    },
    duration: {
      type: Number,
      default: 3000
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    text: {
      type: String
    },
    width: {
      type: String
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },

  data () {
    return {
      setT: ''
    }
  },

  computed: {
    classObj () {
      let {prefixCls, placement, type} = this
      let klass = {}

      klass[prefixCls + '-toast'] = true
      klass[prefixCls + '-toast-' + type] = true
      klass[prefixCls + '-' + placement] = true

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
      handler (val) {
        var self = this
        this.setT = window.clearTimeout(this.setT)

        if (val) {
          if (this.placement === 'top' || this.placement === 'bottom') {
            this.$els.dom.style.marginLeft = - this.$els.dom.offsetWidth / 2 + 'px'
          } else if (this.placement === 'center') {
            this.$els.dom.style.marginLeft = - this.$els.dom.offsetWidth / 2 + 'px'
            this.$els.dom.style.marginTop = - this.$els.dom.offsetHeight / 2 + 'px'
          }
        }

        if (val && this.duration) {
          this.setT = window.setTimeout(() => {
            self.show = false
          }, this.duration)
        }
      },
      immediate: true
    }
  }
}
</script>
