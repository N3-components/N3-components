<template>
<div :class="classObj" :style="{width: width}">
  <div :class="`${prefixCls}-input-number-handler-wrap`">
    <a unselectable="unselectable"
      ref="up"
      @click="_up"
      @mouse.down="preventDefault"
      :class="[prefixCls + '-input-number-handler',prefixCls + '-input-number-handler-up',upDisabledClass]">
        <n3-icon
          :class="`${prefixCls}-input-number-handler-up-inner`" 
          type="angle-up" 
          @click="preventDefault" 
          unselectable="unselectable">
        </n3-icon>
    </a>
    <a unselectable="unselectable"
       ref="down"
       @mouse.down="preventDefault"
       @click="_down"
       :class="[prefixCls + '-input-number-handler', prefixCls + '-input-number-handler-down', downDisabledClass]">
       <n3-icon
          :class="`${prefixCls}-input-number-handler-down-inner`" 
          type="angle-down" 
          @click="preventDefault" 
          unselectable="unselectable">
        </n3-icon>
    </a>
  </div>
  <div :class="prefixCls + '-input-number-input-wrap'">
    <n3-input
      type="number"
      @focus="_onFocus"
      :width="width"
      :rules="rules" 
      :placeholder="placeholder"
      :custom-validate="customValidate"
      @blur="_onBlur"
      @keydown.native.stop="_onKeyDown"
      @change="_onChange"
      :readonly="readonly"
      :disabled="disabled"
      :name="name"
      :value="currentValue">
    </n3-input> 
  </div>
</div>
</template>

<script>
import n3Input from '../Input/n3Input'
import n3Icon from '../Icon/n3Icon'
import inputMixin from '../Mixin/inputMixin'

function isValueNumber (value) {
  return !isNaN(Number(value))
}

function calNum (num1, num2, symb) {
  let sq1, sq2, m
  try {
    sq1 = num1.toString().split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = num2.toString().split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  m = Math.pow(10, Math.max(sq1, sq2))
  
  if (symb === '+') {
    return (num1 * m + num2 * m) / m
  } else if (symb === '-') {
    return (num1 * m - num2 * m) / m
  }
}

function preventDefault (e) {
  e.preventDefault()
}

export default {
  name: 'n3InputNumber',
  mixins: [inputMixin],
  props: {
    prefixCls: {
      type: String,
      default: 'n3'
    },
    max: {
      type: Number
    },
    min: {
      type: Number
    },
    value: {
      type: [Number, String]
    },
    step: {
      type: Number,
      default: 1
    },
    onChange: {
      type: Function
    }
  },

  data () {
    let value = this.value
    if (value < this.min) {
      this.$emit('input', this.min)
      value = this.min
    }
    if (value > this.max) {
      this.$emit('input', this.max)
      value = this.max
    }

    return {
      noop: () => {},
      preventDefault: preventDefault,
      upDisabledClass: '',
      downDisabledClass: '',
      currentValue: value
    }
  },

  components: {
    n3Input,
    n3Icon
  },

  computed: {
    classObj () {
      let {prefixCls, disabled, readonly} = this
      let klass = {}

      klass[prefixCls + '-input-number'] = true
      klass[prefixCls + '-input-number-disabled'] = disabled
      klass[prefixCls + '-input-number-readonly'] = readonly

      return klass
    }

  },

  watch: {
    currentValue (val) {
      if (this.inner) {
        this.inner = false
        return
      }
      this.inner = true
      this.$emit('input', val)
    },
    value (val) {
      if (this.inner) {
        this.inner = false
        return
      }
      this.inner = true
      if (isValueNumber(val)) {
        val = Number(val)
        if (val >= this.max) {
          this.upDisabledClass = `${this.prefixCls}-input-number-handler-up-disabled`
        } else if (val <= this.min) {
          this.downDisabledClass = `${this.prefixCls}-input-number-handler-down-disabled`
        } else {
          this.upDisabledClass = ''
          this.downDisabledClass = ''
        }
        this.currentValue = val
      } else {
        this.upDisabledClass = `${this.prefixCls}-input-number-handler-up-disabled`
        this.downDisabledClass = `${this.prefixCls}-input-number-handler-down-disabled`
      }
    }
  },

  methods: {
    _setValue (value) {
      this.currentValue = value
      this.$emit('input', value)
      this.$emit('change', value)
    },

    _onChange (value) {
      let val = String(value).trim()

      if (!val) {
        this._setValue(val)
      } else if (isValueNumber(val)) {
        val = Number(val)
        if (val < this.min) return
        if (val > this.max) return
        this._setValue(val)
      } else if (val === '-') {
        if (this.min >= 0) return
        this.currentValue = val
      }
    },

    _onKeyDown (e) {
      if (e.keyCode === 38) {
        this._up(e)
      } else if (e.keyCode === 40) {
        this._down(e)
      }
    },

    _onFocus () {
      this.$emit('focus')
    },

    _onBlur () {
      if (this.value === '-') {
        this._setValue('')
      }
      this.$emit('blur')
    },

    _step (type, e) {
      if (this.disabled || this.readonly) return

      let value = Number(this.value)
      const stepNum = Number(this.step)

      if (isNaN(value)) return
      if (type === 'down') value = calNum(value, stepNum, '-')
      else if (type === 'up') value = calNum(value, stepNum, '+')

      if (value > this.max || value < this.min) return

      this._setValue(value)
    },

    _down (e) {
      if (this.downDisabledClass) {
        return
      }
      this._step('down', e)
    },

    _up (e) {
      if (this.upDisabledClass) {
        return
      }
      this._step('up', e)
    }
  }
}

</script>
