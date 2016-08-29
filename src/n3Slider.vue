<template>
<div class="inline">
    <div :class="classObj" v-el:slider>
      <n3-tooltip  :placement="orientation === 'horizontal' ? 'top' : 'right'" :noresize="true" trigger="mouse">
        <div class="{{prefixCls}}-slider-track">
          <div class="{{prefixCls}}-slider-track-low"></div>
          <div class="{{prefixCls}}-slider-selection" v-el:selection></div>
          <div class="{{prefixCls}}-slider-track-high" v-el:no-selection></div>
          <div class="{{prefixCls}}-slider-handle {{prefixCls}}-slider-min-slider-handle {{prefixCls}}-slider-round" v-el:min-slider></div>
          <div class="{{prefixCls}}-slider-handle {{prefixCls}}-slider-max-slider-handle {{prefixCls}}-slider-round" v-el:max-slider></div>
        </div>
      </n3-tooltip>
    </div>
  <input type="hidden" v-model="value">
  <validate
    :name="name"
    :rules="rules"
    :valid-status.sync="validStatus"
    :custom-validate="customValidate" 
    :value="value"
    :results.sync="validateResults">
  </validate>
</div>
</template>

<script>
import EventListener from './utils/EventListener'
import n3Tooltip from 'src/n3Tooltip'
import valMixin from './valMixin'
import validate from './validate'
import type from 'get-type'

export default {
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
      twoway: true,
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
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function
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
      btnValue: 0
    }
  },
  computed: {
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
        if (type.isArray(this.value) && this.range) {
          this.value = [(Math.min(this.tempValue[0], this.tempValue[1])), (Math.max(this.tempValue[0], this.tempValue[1]))]
        } else {
          this.value = this.tempValue[1]
        }
      }
    }
  },
  watch: {
    value (val) {
      this.setTempValue()
      this.setPosition()
      if (type.isFunction(this.onChange)) {
        this.onChange(this.value)
      }
    }
  },
  methods: {
    setTempValue () {
      var val = this.value
      if (type.isArray(val) && this.range) {
        this.$els.maxSlider.classList.remove(this.prefixCls + '-slider-hide')
        this.tempValue = val
      } else {
        this.$els.maxSlider.classList.add(this.prefixCls + '-slider-hide')
        this.tempValue = [this.min, val]
      }
    },
    setPosition () {
      var selection = this.$els.selection
      var bar = this.$els.minSlider
      var maxBar = this.$els.maxSlider
      var rangeSlider = this.$els.slider
      var tooltip = bar.parentNode.parentNode.nextElementSibling

      if (this.orientation === 'horizontal') {
        bar.style.left = (this.tempValue[1] - this.min) / (this.max - this.min) * 100 + '%'
        maxBar.style.left = (this.tempValue[0] - this.min) / (this.max - this.min) * 100 + '%'
        selection.style.width = Math.abs(this.tempValue[1] - this.tempValue[0]) / (this.max - this.min) * 100 + '%'
        selection.style.left = (Math.min(this.tempValue[0], this.tempValue[1]) - this.min) / (this.max - this.min) * 100 + '%'

        if (type.isArray(this.value) && this.range) {
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

        if (type.isArray(this.value) && this.range) {
          tooltip.style.top = (this.tempValue[1] + this.tempValue[0] - 2 * this.min) / ((this.max - this.min) * 2) * rangeSlider.offsetHeight + 'px'
        } else {
          tooltip.style.top = (this.tempValue[1] - this.min) / (this.max - this.min) * rangeSlider.offsetHeight + 'px'
        }

        tooltip.style.left = 0
      }

      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.value)
    },
    setRange (now, range) {
      return (now < 0) ? 0 : ((now > range) ? range : now)
    },
    setStep (num) {
      return Math.round(num / this.step) * this.step
    },
    startDrag (bar, maxBar, rangeSlider) {
      var self = this

      if (!self.disabled) {
        rangeSlider.classList.remove(this.prefixCls + '-slider-disabled')
        this._mousedownEvent = EventListener.listen(rangeSlider, 'mousedown', (event) => {
          self.flag = true
          if (!event) {
            event = window.event
            bar.onselectstart = function () {
              return false
            }
          }
          var e = event ? event : window.event
          var mousedownPositionPercent

          if (self.orientation === 'horizontal') {
            mousedownPositionPercent = self.setRange(e.clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth
          } else if (self.orientation === 'vertical') {
            mousedownPositionPercent = self.setRange(e.clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight
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
        })

        this._mousemoveEvent = EventListener.listen(document, 'mousemove', (event) => {
          var e = event ? event : window.event
          if (self.flag) {
            var mousedownPositionPercent
            if (self.orientation === 'horizontal') {
              mousedownPositionPercent = self.setRange(e.clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth
            } else if (self.orientation === 'vertical') {
              mousedownPositionPercent = self.setRange(e.clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight
            }
            var value = self.setStep(mousedownPositionPercent * (self.max - self.min) / 100 + self.min)

            if (self.tempValue[0] > value && self.tempValue[1] > value) {
              self.tempFlag = 1
            }
            if (self.tempValue[0] < value && self.tempValue[1] < value) {
              self.tempFlag = 2
            }
            self.tempValue[(self.tempFlag-1)] = value
            self.tempValue[(self.tempFlag === 1 ? 1 : 0)] = self.btnValue
            self.eValue = value
          }
        })

        this._mouseupEvent = EventListener.listen(document, 'mouseup', (e) => {
          self.flag = false
          self.tempFlag = 0
        })
      } else {
        rangeSlider.classList.add(this.prefixCls + '-slider-disabled')
      }
    },
    tooltipInit () {
      var tooltip = this.$els.minSlider.parentNode.parentNode.nextElementSibling

      tooltip.style.left = 0
      tooltip.style.top = 0
      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.value)

      if (this.orientation === 'horizontal') {
        tooltip.classList.add(this.prefixCls + '-slider-top')
        tooltip.classList.remove(this.prefixCls + '-slider-right')
      } else if (this.orientation === 'vertical') {
        tooltip.classList.add(this.prefixCls + '-slider-right')
        tooltip.classList.remove(this.prefixCls + '-slider-top')
      }
      if (this.tooltip === 'always') {
        tooltip.classList.add(this.prefixCls + '-slider-tooltip-always')
        tooltip.classList.remove(this.prefixCls + '-slider-tooltip-hide')
      } else if (this.tooltip === 'hide') {
        tooltip.classList.add(this.prefixCls + '-slider-tooltip-hide')
        tooltip.classList.remove(this.prefixCls + '-slider-tooltip-always')
      }
    },
    init () {
      var bar = this.$els.minSlider
      var rangeSlider = this.$els.slider
      var maxBar = this.$els.maxSlider

      this.startDrag(bar, maxBar, rangeSlider)
      this.tooltipInit()
      this.setTempValue()
      this.setPosition()
    }
  },
  ready () {
    this.init()
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
