<template>
<div class="inline">
    <div :class="classObj" ref="slider" :style="styleObj">
      <n3-tooltip  :placement="orientation === 'horizontal' ? 'top' : 'right'" :noresize="true" trigger="mouse">
        <div :class="`${prefixCls}-slider-track`">
          <div :class="`${prefixCls}-slider-track-low`"></div>
          <div :class="`${prefixCls}-slider-selection`" ref="selection"></div>
          <div :class="`${prefixCls}-slider-track-high`" ref="noSelection"></div>
          <div :class="`${prefixCls}-slider-handle ${prefixCls}-slider-min-slider-handle ${prefixCls}-slider-round`" ref="minSlider"></div>
          <div :class="`${prefixCls}-slider-handle ${prefixCls}-slider-max-slider-handle ${prefixCls}-slider-round`" ref="maxSlider"></div>
        </div>
      </n3-tooltip>
    </div>
  <validate
    :name="name"
    :rules="rules"
    :custom-validate="customValidate" 
    :current="value">
  </validate>
</div>
</template>

<script>
import EventListener from '../utils/EventListener'
import n3Tooltip from '../Tooltip/n3Tooltip'
import valMixin from '../Mixin/valMixin'
import validate from '../validate'
import type from '../utils/type'
import element from '../utils/element'

export default {
  name: 'n3Silder',
  mixins: [valMixin],
  props: {
    orientation: {
      type: String,
      default: 'horizontal'
    },
    tooltip: {
      type: String,
      default: 'show'
    },
    value: {
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    },
    range: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '220px'
    },
    height: {
      type: String,
      default: '220px'
    },
    formatter: {
      type: Function,
      default (val) {
        if (Array.isArray(val)) {
          return val[0] + ' : ' + val[1]
        } else {
          return val
        }
      }
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      flag: false,
      tempValue: [0, 0],
      tempFlag: 0,
      btnValue: 0,
      currentValue: this.value
    }
  },
  computed: {
    styleObj () {
      if (this.orientation === 'horizontal') {
        return {
          width: this.width
        }
      } else {
        return {
          height: this.height
        }
      }
    },
    classObj () {
      let {prefixCls, orientation} = this
      let klass = {}

      klass[prefixCls + '-slider'] = true
      klass[prefixCls + '-slider-' + orientation] = true

      return klass
    },
    eValue: {
      get () {
        return this.eValue
      },
      set (val) {
        if (type.isArray(this.currentValue) && this.range) {
          this.currentValue = [(Math.min(this.tempValue[0], this.tempValue[1])), (Math.max(this.tempValue[0], this.tempValue[1]))]
        } else {
          this.currentValue = this.tempValue[1]
        }
      }
    }
  },
  watch: {
    value (val) {
      if(this.inner) {
          this.inner = false
          return
        }
        this.inner = true
      this.currentValue = val
    },
    currentValue (val) {
      this.setTempValue()
      this.setPosition()
      if(this.inner) {
          this.inner = false
          return
        }
        this.inner = true
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  methods: {
    setTempValue () {
      var val = this.currentValue
      if (type.isArray(val) && this.range) {
        element.removeClass(this.$refs.maxSlider, this.prefixCls + '-slider-hide')
        this.tempValue = val
      } else {
        element.addClass(this.$refs.maxSlider, this.prefixCls + '-slider-hide')
        this.tempValue = [this.min, val]
      }
    },
    setPosition () {
      var selection = this.$refs.selection
      var bar = this.$refs.minSlider
      var maxBar = this.$refs.maxSlider
      var rangeSlider = this.$refs.slider
      var tooltip = bar.parentNode.parentNode.nextElementSibling

      if (this.orientation === 'horizontal') {
        bar.style.left = (this.tempValue[1] - this.min) / (this.max - this.min) * 100 + '%'
        maxBar.style.left = (this.tempValue[0] - this.min) / (this.max - this.min) * 100 + '%'
        selection.style.width = Math.abs(this.tempValue[1] - this.tempValue[0]) / (this.max - this.min) * 100 + '%'
        selection.style.left = (Math.min(this.tempValue[0], this.tempValue[1]) - this.min) / (this.max - this.min) * 100 + '%'

        if (type.isArray(this.currentValue) && this.range) {
          tooltip.style.left = (this.tempValue[1] + this.tempValue[0] - 2 * this.min) / ((this.max - this.min) * 2) * rangeSlider.offsetWidth + 'px'
        } else {
          tooltip.style.left = (this.tempValue[1] - this.min) / (this.max - this.min) * rangeSlider.offsetWidth + 'px'
        }
        tooltip.style.top = 0
      } else if (this.orientation === 'vertical') {
        bar.style.top = (this.tempValue[1] - this.min) / (this.max - this.min) * 100 + '%'
        maxBar.style.top = (this.tempValue[0] - this.min) / (this.max - this.min) * 100 + '%'
        selection.style.height = Math.abs(this.tempValue[1] - this.tempValue[0]) / (this.max - this.min) * 100 + '%'
        selection.style.top = (Math.min(this.tempValue[0], this.tempValue[1]) - this.min) / (this.max - this.min) * 100 + '%'

        if (type.isArray(this.currentValue) && this.range) {
          tooltip.style.top = (this.tempValue[1] + this.tempValue[0] - 2 * this.min) / ((this.max - this.min) * 2) * rangeSlider.offsetHeight + 'px'
        } else {
          tooltip.style.top = (this.tempValue[1] - this.min) / (this.max - this.min) * rangeSlider.offsetHeight + 'px'
        }

        tooltip.style.left = 0
      }

      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.currentValue)
    },
    setRange (now, range) {
      return (now < 0) ? 0 : ((now > range) ? range : now)
    },
    setStep (num) {
      return Math.round(num / this.step) * this.step
    },
    startDrag (bar, maxBar, rangeSlider) {
      var self = this
      const dragStartHandler = event => {
        self.flag = true
        if (!event) {
          event = window.event
          bar.onselectstart = function () {
            return false
          }
        }

        var e = event || window.event
        var mousedownPositionPercent

        e.changedTouches && e.preventDefault()
        const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
        const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY
        
        if (self.orientation === 'horizontal') {
          mousedownPositionPercent = self.setRange(clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth
        } else if (self.orientation === 'vertical') {
          mousedownPositionPercent = self.setRange(clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight
        }
        var value = self.setStep(mousedownPositionPercent * (self.max - self.min) / 100 + self.min)

        if (value * 2 > (self.tempValue[0] + self.tempValue[1])) {
          if (self.tempValue[1] > self.tempValue[0]) {
            self.tempValue[1] = value
            self.btnValue = self.tempValue[0]
            self.tempFlag = 2
          } else {
            self.tempValue[0] = value
            self.btnValue = self.tempValue[1]
            self.tempFlag = 1
          }
        } else {
          if (self.tempValue[1] > self.tempValue[0]) {
            self.tempValue[0] = value
            self.btnValue = self.tempValue[1]
            self.tempFlag = 1
          } else {
            self.tempValue[1] = value
            self.btnValue = self.tempValue[0]
            self.tempFlag = 2
          }
        }
        self.eValue = value
      }

      const dragHandler = event => {
        var e = event || window.event

        const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
        const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY

        if (self.flag) {
          var mousedownPositionPercent
          if (self.orientation === 'horizontal') {
            mousedownPositionPercent = self.setRange(clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth
          } else if (self.orientation === 'vertical') {
            mousedownPositionPercent = self.setRange(clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight
          }
          var value = self.setStep(mousedownPositionPercent * (self.max - self.min) / 100 + self.min)

          if (self.tempValue[0] > value && self.tempValue[1] > value) {
            self.tempFlag = 1
          }
          if (self.tempValue[0] < value && self.tempValue[1] < value) {
            self.tempFlag = 2
          }
          self.tempValue[(self.tempFlag - 1)] = value
          self.tempValue[(self.tempFlag === 1 ? 1 : 0)] = self.btnValue
          self.eValue = value
        }
      }

      const dragEndHandler = e => {
        self.flag = false
        self.tempFlag = 0
      }

      if (!self.disabled) {
        element.removeClass(rangeSlider, this.prefixCls + '-slider-disabled')

        // PC
        this._mousedownEvent = EventListener.listen(rangeSlider, 'mousedown', dragStartHandler)
        this._mousemoveEvent = EventListener.listen(document, 'mousemove', dragHandler)
        this._mouseupEvent = EventListener.listen(document, 'mouseup', dragEndHandler)

        // Mobile
        this._mousedownEvent = EventListener.listen(rangeSlider, 'touchstart', dragStartHandler)
        this._mousemoveEvent = EventListener.listen(document, 'touchmove', dragHandler)
        this._mouseupEvent = EventListener.listen(document, 'touchend', dragEndHandler)
      } else {
        element.addClass(rangeSlider, this.prefixCls + '-slider-disabled')
      }
    },
    tooltipInit () {
      var tooltip = this.$refs.minSlider.parentNode.parentNode.nextElementSibling

      tooltip.style.left = 0
      tooltip.style.top = 0
      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.currentValue)

      if (this.orientation === 'horizontal') {
        element.addClass(tooltip, this.prefixCls + '-slider-top')
        element.removeClass(tooltip, this.prefixCls + '-slider-right')
      } else if (this.orientation === 'vertical') {
        element.addClass(tooltip, this.prefixCls + '-slider-right')
        element.removeClass(tooltip, this.prefixCls + '-slider-top')
      }
      if (this.tooltip === 'always') {
        element.addClass(tooltip, this.prefixCls + '-slider-tooltip-always')
        element.removeClass(tooltip, this.prefixCls + '-slider-tooltip-hide')
      } else if (this.tooltip === 'hide') {
        element.addClass(tooltip, this.prefixCls + '-slider-tooltip-hide')
        element.removeClass(tooltip, this.prefixCls + '-slider-tooltip-always')
      }
    },
    init () {
      var bar = this.$refs.minSlider
      var rangeSlider = this.$refs.slider
      var maxBar = this.$refs.maxSlider

      this.startDrag(bar, maxBar, rangeSlider)
      this.tooltipInit()
      this.setTempValue()
      this.setPosition()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  beforeDestroy () {
    if (this._mousemoveEvent) {
      this._mousemoveEvent.remove()
    }
    if (this._mousedownEvent) {
      this._mousedownEvent.remove()
    }
    if (this._mouseupEvent) {
      this._mouseupEvent.remove()
    }
  },
  components: {
    n3Tooltip,
    validate
  }
}
</script>
