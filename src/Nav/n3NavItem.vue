<template>
	<li :class="classObj" @click.stop="handleClick">
		<a><slot></slot></a>
	</li>
</template>
<script>
export default{
  props: {
    disabled: {
      type: Boolean
    },
    key: {
      type: [String, Number]
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) {return}
      this.$dispatch('@n3NavSelect', this.key)
    }
  },
  events: {
    '@n3NavSelectChange': function (key) {
      this.active = key == this.key
    }
  }, 
  computed: {
    classObj () {
      let {prefixCls, active, disabled} = this
      let klass = {}

      klass[prefixCls + '-navbar-active'] = active
      klass[prefixCls + '-navbar-disabled'] = disabled

      return klass
    }
  }
}
</script>