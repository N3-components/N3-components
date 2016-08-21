<template>
	<div 
	  :class="classObj"
	  :style="{width: now + '%'}">
	  {{label ? now + '%':'' }}
	</div>
</template>

<script>
  export default {
    props: {
      now: {
        type: Number,
        require: true
      },
      label: {
        type: Boolean,
        default: false
      },
      type: {
        type: String
      },
      striped: {
        type: Boolean,
        default: false
      },
      animated: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'n3'
      }
    },
    computed: {
      classObj () {
        let {prefixCls, type, striped, animated} = this
        let klass = {}

        klass[prefixCls + '-progress-bar'] = true
        klass[prefixCls + '-progress-bar-' + type] = true
        klass[prefixCls + '-progress-bar-striped'] = striped
        klass[prefixCls + '-progress-bar-animated'] = animated

        return klass
      }
    }
  }
</script>