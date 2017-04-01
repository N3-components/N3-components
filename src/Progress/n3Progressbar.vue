<template>
	<div 
	  :class="classObj"
	  :style="{width: now + '%',height: height}">
	  {{label ? now + '%':'' }}
	</div>
</template>

<script>
  export default {
    name: 'n3Progressbar',
    props: {
      height: {
        type: String,
        default: '20px'
      },
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