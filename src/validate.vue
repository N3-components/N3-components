<template>
	<div :class="`${prefixCls}-err-tip`" v-if="validate && tips" >{{tips}}</div>
</template>

<script>
import type from './utils/type'
import events from './utils/events'
import localeMixin from './Mixin/localeMixin'

export default {
  name: 'n3Validate',
  mixins: [events,localeMixin('n3Validate')],
  props: {
    value: {
      type: String
    },
    customValidate: {
      type: Function
    },
    rules: {
      type: Array
    },
    name: {
      type: String
    },
    current: {
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      tips: '',
      validate: false,
      status: '',
      vStatus: this.value,
      results: {}
    }
  },

  created () {
    this.$on('n3@openValidate', (val) => {
      this.validate = val
      val ? this.vStatus = this.status : this.vStatus = ''
    })
  },

  computed: {
    _results: {
      get () {
        return this.results
      },
      set (val, oldVal) {
        let self = this
        let tips = ''
        let status = ''

        for (let key in val) {
          let obj = val[key]
          if (type.isObject(obj)) {
            obj.tips ? tips += obj.tips + '  ' : ''
            if (obj.validStatus !== 'success') {
              status = 'error'
            }
          }
        }

        status !== 'error' ? status = 'success' : 0

        self.status = status

        if (self.validate) {
          self.vStatus = self.status
        }

        let isvalid = true
        self.tips = tips

        for (let i in val) {
          let validStatus = val[i]['validStatus']
          if (validStatus === 'error') {
            isvalid = false
            break
          }
        }

        let newVal = Object.assign({}, val)
        newVal.isvalid = isvalid

        if (this.isEqual(newVal, this.results)) {
          return
        }

        this.results = newVal

        self.dispatch('n3Form', 'n3@validateChange', {
          name: self.name,
          result: self.results
        })
      }
    }
  },
  watch: {
    current: {
      handler (newVal, oldVal) {
        this.valid(newVal)
      },
      immediate: true
    },
    vStatus (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    isEqual (a, b) {
      let e = true
      let propsA = Object.keys(a)
      let propsB = Object.keys(b)

      if (propsA.length !== propsB.length) {
        return false
      }

      propsA.forEach(i => {
        if (a[i]['validStatus'] !== b[i]['validStatus']) {
          e = false
          return false
        }
      })

      return e
    },
    setResult (key, value) {
      let o = Object.assign({}, this.results)
      o[key] = value
      this._results = o
    },
    valid (val) {
      if (this.rules || type.isFunction(this.customValidate)) {
        this.rulesValid(val)
      }
    },

    rulesItemValid (rule, value) {
      let self = this
      let tip = rule.tip
      let type = rule.type

      switch (type) {
        case 'required':
          self.requiredValid(value, tip)
          break
        case 'phone':
          self.phoneValid(value, tip)
          break
        case 'number':
          self.numberValid(value, tip)
          break
        case 'telephone':
          self.telValid(value, tip)
          break
        case 'email':
          self.emailValid(value, tip)
          break
      }

      if (type.indexOf('maxlength') > -1) {
        self.maxlengthValid(type, value, tip)
        return
      }
      if (type.indexOf('minlength') > -1) {
        self.minlengthValid(type, value, tip)
        return
      }
    },

    customValid (val) {
      this.setResult('customValidate', this.customValidate(val))
    },

    requiredValid (val, tip) {
      let self = this

      self._results = self._results || {}

      if (type.isNullOrUndefined(val) || val.length === 0) {
        self.setResult('requiredValid', {
          validStatus: 'error',
          tips: tip || self.getL('required')
        })
      } else {
        self.setResult('requiredValid', {
          validStatus: 'success',
          tips: ''
        })
      }
    },

    maxlengthValid (type, val, tip) {
      let self = this
      let maxlength = type.split('=')[1] - 0

      self._results = self._results || {}

      if (val) {
        if (val.length > maxlength) {
          self.setResult('maxlengthValid', {
            validStatus: 'error',
            tips: tip || self.getL('maxLength') + maxlength
          })
        } else {
          self.setResult('maxlengthValid', {
            validStatus: 'success',
            tips: ''
          })
        }
      }
    },

    minlengthValid (type, val, tip) {
      let self = this
      let minlength = type.split('=')[1] - 0

      self._results = self._results || {}

      if (val) {
        if (val.length < minlength) {
          self.setResult('minlengthValid', {
            validStatus: 'error',
            tips: tip || self.getL('minLength') + minlength
          })
        } else {
          self.setResult('minlengthValid', {
            validStatus: 'success',
            tips: ''
          })
        }
      }
    },

    rulesValid (value) {
      let self = this

      self.rules.forEach((val, index) => {
        self.rulesItemValid(val, value)
      })

      if (type.isFunction(self.customValidate)) {
        self.customValid(value)
      }
    },

    phoneValid (value, tip) {
      let rule = /^1\d{10}$/

      if (rule.test(value) || value === '') {
        this.setResult('isPhoneValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.setResult('isPhoneValid', {
          validStatus: 'error',
          tips: tip || this.getL('phone')
        })
      }
    },

    numberValid (value, tip) {
      let rule = /^\d*$/

      if (rule.test(value) || value === '') {
        this.setResult('isNumberValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.setResult('isNumberValid', {
          validStatus: 'error',
          tips: tip || this.getL('number')
        })
      }
    },

    telValid (value, tip) {
      let rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/

      if (rule.test(value) || value === '') {
        this.setResult('isTelValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.setResult('isTelValid', {
          validStatus: 'error',
          tips: tip || this.getL('telephone')
        })
      }
    },

    emailValid (value, tip) {
      let rule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

      if (rule.test(value) || value === '') {
        this.setResult('isEmailValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.setResult('isEmailValid', {
          validStatus: 'error',
          tips: tip || this.getL('email')
        })
      }
    }
  }
}
</script>