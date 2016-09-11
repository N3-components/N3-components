<template>
 	<ul class="{{prefixCls}}-timeline-con">
 		<template v-if="value">
 			<n3-timeline-item v-for="i in value" :color="i.color" :icon="i.icon" >
 				{{{i.content}}}
 			</n3-timeline-item>
 		</template>
 		<template v-else>
 			<slot></slot>
 		</template>
 	</ul>
</template>
<script>
import n3TimelineItem from './n3TimelineItem'
import type from './utils/type'

export default{
  props: {
    value: {
      type: Array
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  watch: {
    value: {
      handler (val) {
        if (type.isArray(val)) {
          this.$nextTick(() => {
            this._context.$compile(this.$el)
          })
        }
      },
      immediate: true
    }
  },
  components: {
    n3TimelineItem
  }
}
</script>