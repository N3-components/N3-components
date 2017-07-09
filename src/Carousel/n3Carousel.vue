<template>
<div :class="`${prefixCls}-carousel ${prefixCls}-slide`">
  <ol :class="`${prefixCls}-carousel-indicators`" v-show="indicators">
    <transition-group name="fade">
    <li v-for="(i,index) in indicator" 
      :key="index"
      @click="handleIndicatorClick(index)" 
      :class="[index === activeIndex ? prefixCls + '-carousel-active'  : '']">
    </li>
    </transition-group>
  </ol>
  <div :class="`${prefixCls}-carousel-inner`">
    <slot></slot>
  </div>
  <a v-show="controls" :class="`${prefixCls}-carousel-left ${prefixCls}-carousel-control`" @click="prevClick">
    <n3-icon type="chevron-left"></n3-icon>
  </a>
  <a v-show="controls" :class="`${prefixCls}-carousel-right ${prefixCls}-carousel-control`" @click="nextClick">
    <n3-icon type="chevron-right"></n3-icon>
  </a>
</div>
</template>

<script>
import EventListener from '../utils/EventListener'
import n3Icon from '../Icon/n3Icon'
import element from '../utils/element'

export default {
  name: 'n3Carousel',
  props: {
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      intervalID: '',
      indicator: [],
      activeIndex: 0,
      isAnimating: false
    }
  },
  computed: {
    slider () {
      return this.$el.querySelectorAll('.' + this.prefixCls + '-carousel-item')
    }
  },
  watch: {
    activeIndex (newVal, oldVal) {
      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)
    },

    indicator (val) {
      if (val.length > 0) {
        if (this.intervalID) clearInterval(this.intervalID)
        this.isAnimating = false
        this.activeIndex = 0
        element.addClass(this.slider[0], this.prefixCls + '-carousel-active')
        this.resetInterval()
      }
    }
  },
  components: {
    n3Icon
  },
  methods: {
    handleIndicatorClick (index) {
      if (this.isAnimating) return false
      this.isAnimating = true
      this.activeIndex = index
    },
    slide (direction, selected, prev) {
      if (this._prevSelectedEvent) this._prevSelectedEvent.remove()
      if (this._selectedEvent) this._selectedEvent.remove()

      let prevSelectedEl = this.slider[prev]
      let selectedEl = this.slider[selected]
      let transitionendFn = () => {
        [...this.slider].forEach(el => {
          element.setClass(el, this.prefixCls + '-carousel-item')
        })
        element.addClass(selectedEl, this.prefixCls + '-carousel-active')
        this.isAnimating = false
      }

      direction === 'left' ? element.addClass(selectedEl, this.prefixCls + '-carousel-next') : element.addClass(selectedEl, this.prefixCls + '-carousel-prev')

      this._prevSelectedEvent = EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)
      this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)
      // remove animation for IE9
      if (element.isIE9) {
        setTimeout(() => {
          transitionendFn()
        })
      }
      element.addClass(prevSelectedEl, this.prefixCls + '-carousel-' + direction)
      element.addClass(selectedEl, this.prefixCls + '-carousel-' + direction)
    },
    nextClick () {
      if (this.isAnimating) return false
      this.isAnimating = true
      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0
    },
    prevClick () {
      if (this.isAnimating) return false
      this.isAnimating = true
      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1
    },
    resetInterval () {
      this.$nextTick(() => {
        let el = this.$el
        let self = this
        function intervalManager (flag, func, time) {
          flag ? self.intervalID = setInterval(func, time) : clearInterval(self.intervalID)
        }
        if (this.interval > 0 && this.indicator.length > 0) {
          intervalManager(true, this.nextClick, this.interval)
          el.addEventListener('mouseenter', () => intervalManager(false))
          el.addEventListener('mouseleave', () => intervalManager(true, this.nextClick, this.interval))
        }
      })
    }
  },
  mounted () {
    this.resetInterval()
  },
  beforeDestroy () {
    if (this.intervalID) clearInterval(this.intervalID)
  }
}
</script>
