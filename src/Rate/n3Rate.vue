<template>
  <div :class="`${prefixCls}-rate`">
    <span
      v-for="item in max"
      :class="`${prefixCls}-rate-item`"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
      :style="{ cursor: disabled ? 'auto' : 'pointer' }">

      <n3-icon
        :type="classes[item - 1]"
        :class="[{ 'hover': hoverIndex === item }, `${prefixCls}-rate-icon`]"
        :style="getIconStyle(item)">
        <n3-icon
          :type="decimalIconClass"
          v-if="showDecimalIcon(item)"
          :class="`${prefixCls}-rate-decimal`"
          :style="decimalStyle">
        </n3-icon>
      </n3-icon>
    </span>
    <span v-if="showText" :class="`${prefixCls}-rate-text`" :style="{ color: textColor }">{{ text }}</span>
  </div>
</template>

<script>
  import n3Icon from '../Icon/n3Icon'

  export default {
    name: 'n3Rate',

    data () {
      return {
        classMap: {},
        colorMap: {},
        pointerAtLeftHalf: false,
        currentValue: this.value,
        hoverIndex: -1
      }
    },

    props: {
      value: {
        type: Number,
        default: 0
      },
      lowThreshold: {
        type: Number,
        default: 2
      },
      highThreshold: {
        type: Number,
        default: 4
      },
      max: {
        type: Number,
        default: 5
      },
      colors: {
        type: Array,
        default () {
          return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
        }
      },
      voidColor: {
        type: String,
        default: '#C6D1DE'
      },
      disabledVoidColor: {
        type: String,
        default: '#EFF2F7'
      },
      icons: {
        type: Array,
        default () {
          return ['star', 'star', 'star']
        }
      },
      voidIcon: {
        type: String,
        default: 'star-o'
      },
      disabledVoidIcon: {
        type: String,
        default: 'star'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      allowHalf: {
        type: Boolean,
        default: false
      },
      showText: {
        type: Boolean,
        default: false
      },
      textColor: {
        type: String,
        default: '1f2d3d'
      },
      prefixCls: {
        type: String,
        default: 'n3'
      },
      texts: {
        type: Array,
        default () {
          return []
        }
      },
      textTemplate: {
        type: String,
        default: '{value}'
      }
    },

    components: {
      n3Icon
    },

    computed: {
      text () {
        let result = ''
        if (this.disabled) {
          result = this.textTemplate.replace(/\{\s*value\s*\}/, this.value)
        } else {
          result = this.texts[Math.ceil(this.currentValue) - 1]
        }
        return result
      },

      decimalStyle () {
        let width = ''
        if (this.disabled) {
          width = `${this.valueDecimal < 50 ? 0 : 50}%`
        }
        if (this.allowHalf) {
          width = '50%'
        }
        return {
          color: this.activeColor,
          width
        }
      },

      valueDecimal () {
        return this.value * 100 - Math.floor(this.value) * 100
      },

      decimalIconClass () {
        return this.getValueFromMap(this.value, this.classMap)
      },

      voidClass () {
        return this.disabled ? this.classMap.disabledVoidClass : this.classMap.voidClass
      },

      activeClass () {
        return this.getValueFromMap(this.currentValue, this.classMap)
      },

      activeColor () {
        return this.getValueFromMap(this.currentValue, this.colorMap)
      },

      classes () {
        let result = []
        let i = 0
        let threshold = this.currentValue
        if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
          threshold--
        }
        for (; i < threshold; i++) {
          result.push(this.activeClass)
        }
        for (; i < this.max; i++) {
          result.push(this.voidClass)
        }
        return result
      }
    },

    watch: {
      value (val) {
        this.currentValue = val
      }
    },

    methods: {
      getValueFromMap (value, map) {
        let result = ''
        if (value <= this.lowThreshold) {
          result = map.lowColor || map.lowClass
        } else if (value >= this.highThreshold) {
          result = map.highColor || map.highClass
        } else {
          result = map.mediumColor || map.mediumClass
        }
        return result
      },

      showDecimalIcon (item) {
        let showWhenDisabled = this.disabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value
        /* istanbul ignore next */
        let showWhenAllowHalf = this.allowHalf && this.pointerAtLeftHalf && ((item - 0.5).toFixed(1) === this.currentValue.toFixed(1))

        return showWhenDisabled || showWhenAllowHalf
      },

      getIconStyle (item) {
        const voidColor = this.disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor
        return {
          color: item <= this.currentValue ? this.activeColor : voidColor
        }
      },

      selectValue (value) {
        if (this.disabled) {
          return
        }
        const val = this.allowHalf && this.pointerAtLeftHalf ? this.currentValue : value
        this.$emit('input', val)
        this.$emit('change', val)
      },

      setCurrentValue (value, event) {
        let {prefixCls} = this
        if (this.disabled) {
          return
        }
        /* istanbul ignore if */
        if (this.allowHalf) {
          let target = event.target
          if (target.classList.contains(`${prefixCls}-rate-item`)) {
            target = target.querySelector(`.${prefixCls}-rate-icon`)
          }
          if (target.classList.contains(`${prefixCls}-rate-decimal`)) {
            target = target.parentNode
          }
          this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth
          this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value
        } else {
          this.currentValue = value
        }
        this.hoverIndex = value
      },

      resetCurrentValue () {
        if (this.disabled) {
          return
        }
        if (this.allowHalf) {
          this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
        }
        this.currentValue = this.value
        this.hoverIndex = -1
      }
    },

    created () {
      if (!this.value) {
        this.$emit('input', 0)
      }
      this.classMap = {
        lowClass: this.icons[0],
        mediumClass: this.icons[1],
        highClass: this.icons[2],
        voidClass: this.voidIcon,
        disabledVoidClass: this.disabledVoidIcon
      }
      this.colorMap = {
        lowColor: this.colors[0],
        mediumColor: this.colors[1],
        highColor: this.colors[2],
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      }
    }
  }
</script>
