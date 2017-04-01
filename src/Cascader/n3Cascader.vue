<template>
  <div :class="`${prefixCls}-cascader`">
    <span :class="`${prefixCls}-cascader-picker`">
      <n3-input 
        :width="width"
        :name="name" 
        :rules="rules" 
        :placeholder="placeholder"
        :custom-validate="customValidate"
        v-model="displayValue"
        :readonly="true"
        :show-clean="true"
        :disabled="disabled"
        @click.native="toggleMenus">
      </n3-input>
    </span>
    <transition name="fadeDown">
      <div :class="`${prefixCls}-cascader-menus`" v-show="show" v-n3-position="show">
        <ul :class="`${prefixCls}-cascader-menu`" v-for="(menu, index) in menus">
          <li :class="itemClass(index,option)" 
            v-for="option in menu" @click="changeOption(index,option)">{{option.label}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import EventListener from '../utils/EventListener'
import n3Input from '../Input/n3Input'
import inputMixin from '../Mixin/inputMixin'

export default {
  name: 'n3Cascader',
  mixins: [inputMixin],
  props: {
    options: {
      type: Array,
      required: true
    },

    displayRender: {
      type: Function,
      default (label) {
        return label.join(' / ')
      }
    },
    expandTrigger: {
      type: String,
      default: 'click'
    },
    value: {
      type: Array
    },
    onChange: {
      type: Function
    },
    selectChange: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  components: {
    n3Input: n3Input
  },
  data () {
    return {
      menus: [],
      selectedOptions: [],
      displayValue: '',
      show: false,
      init: true,
      inner: false,
      currentValue: this.value
    }
  },
  computed: {
    selectedValue () {
      let self = this
      return self.selectedOptions.map((option) => {
        return option.value
      })
    },
    selectedLabel () {
      let self = this
      return self.selectedOptions.map((option) => {
        return option.label
      })
    }
  },
  created () {
    this.setMenu()
  },
  mounted () {
    this.$nextTick(() => {
      let el = this.$el
      let self = this
      self._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!el.contains(e.target)) {
          self.show = false
        }
      })
    })
  },
  watch: {
    options () {
      this.setMenu()
    },
    displayValue (val) {
      if (val === '') {
        this.$emit('input', [])
        this.$nextTick(() => {
          this.setMenu()
        })
      }
    },
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      if (this.inner) {
        this.inner = false
        return
      }
      this.setResult()
    }
  },
  methods: {
    itemClass (index, option) {
      let {prefixCls} = this
      let klass = {}

      klass[prefixCls + '-cascader-menu-item'] = true
      klass[prefixCls + '-cascader-menu-item-selected'] = this.selectedOptions[index] === option
      klass[prefixCls + '-cascader-menu-item-disabled'] = option.disabled

      return klass
    },

    setResult () {
      let self = this
      self.displayValue = ''
      self.selectedOptions = []

      if (self.currentValue) {
        self.currentValue.forEach((value, i) => {
          if (self.menus[i] && self.menus[i].length) {
            let option = self.menus[i].filter((option) => {
              return option.value === value
            })
            if (option[0])self.changeOption(i, option[0])
          }
        })
      }
    },

    setMenu () {
      let self = this
      self.menus = [[]]
      self.displayValue = ''
      self.init = true

      self.options.forEach((option, i) => {
        self.menus[0].push({
          label: option.label,
          value: option.value,
          children: option.children,
          disabled: option.disabled
        })
      })

      self.setResult()
      self.init = false
    },
    changeOption (index, option, event) {
      let self = this
      let menus = self.menus.slice(0, index + 1)

      if (option.disabled) {
        return
      }

      self.selectedOptions = self.selectedOptions.slice(0, index + 1)
      self.selectedOptions[index] = option

      if (option.children) {
        menus.push(option.children)
      }

      if (this.selectChange || !option.children) {
        self.displayValue = self.displayRender(self.selectedLabel)
        self.inner = true
        self.currentValue = self.selectedValue
        this.$emit('input', self.currentValue)
        if (!this.init) {
          self.$emit('change', self.currentValue)
        }
      }

      if (!option.children) {
        self.show = false
      }

      self.menus = menus
    },
    toggleMenus () {
      if (this.disabled) return
      this.show = !this.show
    }
  }
}
</script>