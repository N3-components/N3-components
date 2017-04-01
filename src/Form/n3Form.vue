<template>
  <form :class="classObj"  @submit.prevent="noop">
      <slot></slot>
  </form>
</template>

<script>
import type from '../utils/type'
import events from '../utils/events'

export default {
  name: 'n3Form',
  mixins: [events],
  props: {
    type: {
      type: String,
      default: 'horizontal'
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },

  methods: {
    noop () {
    },
    validateFields (cb) {
      this.validate = true
      this.$nextTick(() => {
        if (type.isFunction(cb)) {
          cb(this.result)
        }
      })
    }
  },

  watch: {
    validate (val) {
      this.broadcast('n3Validate', 'n3@openValidate', val)
      if (val) {
        this.result = this._result
      } else {
        this.result = {results: {}, isvaild: true}
      }
    },
    result (val) {
      if (this.validate) {
        this.$emit('change', val)
      }
    }
  },

  mounted () {
    if (!this.validate) {
      this.result = {results: {}, isvaild: true}
    }
    this.broadcast('n3Validate', 'n3@openValidate', this.validate)
  },

  computed: {
    classObj () {
      let {prefixCls, type} = this
      let klass = {}

      klass[prefixCls + '-form-horizontal'] = type === 'horizontal'
      klass[prefixCls + '-form-inline'] = type === 'inline'
      klass['clearfix'] = true

      return klass
    }
  },

  created () {
    this.$on('openValidate', () => {
      this.validate = true
    })

    this.$on('closeValidate', () => {
      this.validate = false
    })

    this.$on('n3@validateChange', (val) => {
      let name = val.name
      let validateResult = Object.assign({}, this._result)

      if (!validateResult.results)validateResult.results = {}
      validateResult.results[name] = val.result

      validateResult.isvalid = true

      for (let i in validateResult.results) {
        if (!validateResult.results[i]['isvalid']) {
          validateResult.isvalid = false
          break
        }
      }

      this._result = validateResult

      if (this.validate) {
        this.result = this._result
        this.$emit('validateChange', this.result)
      }
    })
  },

  data () {
    return {
      _result: {results: {}, isvaild: true},
      result: {results: {}, isvaild: true},
      validate: false
    }
  }
}
</script>
