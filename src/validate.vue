<template>
	<div class="{{prefixCls}}-err-tip" v-if="validate && tips" >{{tips}}</div>
</template>

<script>
import type from 'get-type'
export default {
  props: {
    value: {
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
    validStatus: {
      type: String,
      twoWay: true
    },
    results: {
      type: Object,
      twoWay: true
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
      status: ''
    }
  },
  watch: {
    value: {
      handler (newVal, oldVal) {
        this.valid(newVal)
      },
      immediate: true
    },
    results: {
      handler (val, oldVal) {
        let self = this
        let tips = ''
        let status = ''

        for (let key in val) {
          let obj = val[key]
          if (typeof obj === 'object' && obj) {
            obj.tips ? tips += obj.tips + '  ' : ''
            if (obj.validStatus !== 'success') {
              status = 'error'
            }
          }
        }

        status !== 'error' ? status = 'success' : 0

        self.status = status

        if (self.validate) {
          self.validStatus = self.status
        }

        self.tips = tips
        self.results['isvalid'] = true

        for (let i in self.results) {
          let validStatus = self.results[i]['validStatus']
          if (validStatus === 'error') {
            self.results['isvalid'] = false
            break
          }
        }
        self.$dispatch('n3@validateChange', {
          name: self.name,
          result: self.results
        })
      },
      deep: true,
      immediate: true
    }
  },
  events: {
    'n3@openValidate' (val) {
      this.validate = val
      val ? this.validStatus = this.status : this.validStatus = ''
    }
  },
  methods: {
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
      this.$set('results.customValidate', this.customValidate(val))
    },

    requiredValid (val, tip) {
      let self = this

      self.results = self.results || {}

      if (!val || val.length === 0) {
        self.$set('results.requiredValid', {
          validStatus: 'error',
          tips: tip || '不能为空'
        })
      } else {
        self.$set('results.requiredValid', {
          validStatus: 'success',
          tips: ''
        })
      }
    },

    maxlengthValid (type, val, tip) {
      let self = this
      let maxlength = type.split('=')[1] - 0

      self.results = self.results || {}

      if (val) {
        if (val.length > maxlength) {
          self.$set('results.maxlengthValid', {
            validStatus: 'error',
            tips: tip || '输入字符数不能大于' + maxlength
          })
        } else {
          self.$set('results.maxlengthValid', {
            validStatus: 'success',
            tips: ''
          })
        }
      }
    },

    minlengthValid (type, val, tip) {
      let self = this
      let minlength = type.split('=')[1] - 0

      self.results = self.results || {}

      if (val) {
        if (val.length < minlength) {
          self.$set('results.minlengthValid', {
            validStatus: 'error',
            tips: tip || '输入字符数不能小于' + minlength
          })
        } else {
          self.$set('results.minlengthValid', {
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
        this.$set('results.isPhoneValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.$set('results.isPhoneValid', {
          validStatus: 'error',
          tips: tip || '请输入正确的手机号码'
        })
      }
    },

    numberValid (value, tip) {
      let rule = /^\d*$/

      if(rule.test(value) || value === '') {
        this.$set('results.isNumberValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.$set('results.isNumberValid', {
          validStatus: 'error',
          tips: tip || '请输入数字'
        })
      }
    },

    telValid (value, tip) {
      let rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/

      if (rule.test(value) || value === '') {
        this.$set('results.isTelValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.$set('results.isTelValid', {
          validStatus: 'error',
          tips: tip || '输入固话格式错误，固话请用-'
        })
      }
    },

    emailValid (value, tip) {
      let rule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

      if (rule.test(value) || value === '') {
        this.$set('results.isEmailValid', {
          validStatus: 'success',
          tips: ''
        })
      } else {
        this.$set('results.isEmailValid', {
          validStatus: 'error',
          tips: tip || '请输入正确的email'
        })
      }
    }
	}
}
</script>