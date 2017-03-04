<template>
	<nav class="{{prefixCls}}-collapse {{prefixCls}}-navbar-collapse {{prefixCls}}-navbar-{{theme}} {{prefixCls}}-navbar-{{type}} clearfix">
		<ul class="{{prefixCls}}-nav {{prefixCls}}-navbar-nav">
			<slot></slot>	
		</ul>
	</nav>
</template>
<script>
import type from '../utils/type'
let init 

export default{
  props: {
    type: {
      type: String,
      default: 'horizontal'
    },
    theme: {
      type: String,
      default: 'default'
    },
    trigger: {
      type: String,
      default: 'click'
    },
    openKeys: {
      type: Array,
      default() {
        return []
      }
    },
    selectedKey: {
      type: [String,Number],
    },
    onSelect: {
      type: Function
    },
    onOpenChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  methods: {
    refresh () {
      init = true
      this.updateOpen()
      this.updateSelected()
      init = false
    },
    updateOpen () {
      this.$broadcast('@n3NavOpenChange',this.openKeys)
      
      if (init) return
      if (this.onSelect) {
        this.onSelect(this.openKeys)
      }
    },
    updateSelected () {
      this.$broadcast('@n3NavSelectChange',this.selectedKey)
      if (init) return
      if (this.onSelect) {
        this.onSelect(this.selectedKey)
      }
    }
  },
  compiled () {
    setTimeout(() => {
      this.refresh()
    })
  },
  events: {
    '@n3NavOpen' : function(key,open) {
      let keys = this.openKeys
      open ? keys.push(key) : keys = keys.filter(i => i != key)
      this.openKeys = keys
    },
    '@n3NavSelect' : function(key) {
      this.selectedKey = key
    }
  }
}
</script>