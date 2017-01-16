<template>
  <div :class="`${prefixCls}-timepicker`">
    <n3-input
      :width="width"
      :name="name"
      :rules="rules"
      :placeholder="placeholder"
      :custom-validate="customValidate"
      :disabled="disabled"
      :readonly="true"
      @click.native="inputClick"
      :show-clean="true"
      v-model="currentValue">
    </n3-input>
    <transition name="fadeDown">
      <div :class="`${prefixCls}-timepicker-popup`" v-show="show"  v-n3-position="show">
        <div :class="`${prefixCls}-timepicker-slider-sin-wrap`" v-if="hour" data-role="hour">
          <n3-slider
            v-model="time.hour"
            orientation="vertical"
            :max="hourRange[1]" :min="hourRange[0]"
            :class="`${prefixCls}-timepicker-slider`">
          </n3-slider>
        </div>
        <div :class="`${prefixCls}-timepicker-slider-sin-wrap`" v-if="minute" data-role="minute">
          <n3-slider
            v-model="time.minute"
            orientation="vertical"
            :max="minuteRange[1]"
            :min="minuteRange[0]"
            :class="`${prefixCls}-timepicker-slider`">
          </n3-slider>
        </div>
        <div :class="`${prefixCls}-timepicker-slider-sin-wrap`" v-if="second" data-role="second">
          <n3-slider
            v-model="time.second"
            orientation="vertical"
            :max="secondRange[1]"
            :min="secondRange[0]"
            :class="`${prefixCls}-timepicker-slider`">
          </n3-slider>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import EventListener from './utils/EventListener'
import n3Slider from './n3Slider'
import n3Input from './n3Input'
import inputMixin from './inputMixin'

export default {
  name: 'n3Timepicker',
  mixins: [inputMixin],
  props: {
    value: {
      type: String
    },
    format: {
      type: String,
      default: 'hh:mm:ss'
    },
    hourRange: {
      type: Array,
      default () {
        return [0, 23]
      }
    },
    minuteRange: {
      type: Array,
      default () {
        return [0, 59]
      }
    },
    secondRange: {
      type: Array,
      default () {
        return [0, 59]
      }
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  filters: {
    fix: {
      read (val) {
        return this.fix(val, 2)
      },
      write (val) {
        return parseInt(val)
      }
    }
  },
  watch: {
    show (val) {
      if (!val) this.$emit('hide', this.currentValue)
    },
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    },
    time: {
      deep: true,
      handler (val) {
        var ret = ''
        this.time.hour > this.hourRange[1] ? this.time.hour = this.hourRange[1] : 0
        this.time.minute > this.minuteRange[1] ? this.time.minute = this.minuteRange[1] : 0
        this.time.second > this.secondRange[1] ? this.time.second = this.secondRange[1] : 0
        this.time.hour < this.hourRange[0] ? this.time.hour = this.hourRange[0] : 0
        this.time.minute < this.minuteRange[0] ? this.time.minute = this.minuteRange[0] : 0
        this.time.second < this.secondRange[0] ? this.time.second = this.secondRange[0] : 0

        if (this.hour) {
          ret += this.fix(this.time.hour, 2) + ':'
        }

        if (this.minute) {
          ret += this.fix(this.time.minute, 2) + ':'
        }

        if (this.second) {
          ret += this.fix(this.time.second, 2) + ':'
        }

        ret = ret.substr(0, ret.length - 1)

        this.currentValue = ret
      }
    }
  },
  methods: {
    close () {
      this.show = false
    },
    inputClick () {
      if (this.disabled) return
      this.show = !this.show
    },
    fix (num, length) {
      num = parseInt(num)
      num = isNaN(num) ? 0 : num

      return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num
    },
    _format (str) {
      var a = str.split(':')
      if (this.hour) {
        this.time.hour = parseInt(a[0] ? a[0] : 0)
      }
      if (this.minute) {
        this.time.minute = parseInt(a[1] ? a[1] : 0)
      }
      if (this.second) {
        this.time.second = parseInt(a[2] ? a[2] : 0)
      }
    }
  },
  computed: {
    hour () {
      return this.format.indexOf('hh') > -1
    },
    minute () {
      return this.format.indexOf('mm') > -1
    },
    second () {
      return this.format.indexOf('ss') > -1
    }
  },
  data () {
    return {
      show: false,
      time: {
        hour: 0,
        minute: 0,
        second: 0
      },
      currentValue: this.value
    }
  },
  created () {
    this._format(this.currentValue)
  },
  mounted () {
    this._closeEvent = EventListener.listen(window, 'click', (e) => {
      if (!this.$el.contains(e.target)) this.close()
    })
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove()
  },
  components: {
    n3Slider,
    n3Input
  }
}
</script>
