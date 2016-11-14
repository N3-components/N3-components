<template>
  <div>
    <ul :class="classObj" >
      <li
          v-for="(r,index) in renderData"
          :class="liclassObj(index,r)"
          @click.prevent="handleTabListClick(index, r)"
          :disabled="r.disabled">
          <a href="#">
            {{r.header}}
            <n3-badge v-if="r.badge">{{r.badge}}</n3-badge>
          </a>
      </li>
    </ul>
    <div :class="`${prefixCls}-tab-content`">
      <div v-if="list">
          <span v-html='renderData[aIndex].content'></span>
      </div>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script>
import type from './utils/type'
import n3Badge from './n3Badge'

export default {
  props: {
    pills: {
      type: Boolean
    },
    stacked: {
      type: Boolean
    },
    primary: {
      type: Boolean
    },
    justified: {
      type: Boolean
    },
    size: {
      type: String
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    onChange: {
      type: Function
    },
    list: {
      type: Array
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    let activeIndex = this.activeIndex
    return {
      renderData: [],
      aIndex: activeIndex
    }
  },
  components: {
    n3Badge
  },
  computed: {
    classObj () {
      let {prefixCls, pills, stacked, primary, justified} = this
      let klass = {}

      klass[prefixCls + '-nav'] = true
      klass['clearfix'] = true
      klass[prefixCls + '-nav-tabs'] = true
      klass[prefixCls + '-nav-tabs-pills'] = pills
      klass[prefixCls + '-nav-tabs-stacked'] = stacked
      klass[prefixCls + '-nav-tabs-primary'] = primary
      klass[prefixCls + '-nav-tabs-justified'] = justified

      return klass
    }
  },
  watch: {
    list: {
      handler () {
        if (this.list) {
          this.renderData = this.list
        }
      },
      immediate: true
    }
  },
  methods: {
    liclassObj (index, r) {
      let {prefixCls, aIndex} = this
      let klass = {}

      klass[prefixCls + '-nav-tabs-active'] = index === aIndex
      klass[prefixCls + '-nav-tabs-disabled'] = r.disabled

      return klass
    },
    handleTabListClick (index, el) {
      if (!el.disabled) {
        this.aIndex = index
      } else {
        return
      }
      if (type.isFunction(this.onChange)) {
        this.onChange(index, el)
      }
    }
  }
}
</script>