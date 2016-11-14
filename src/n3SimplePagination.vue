<template>
	<nav v-show="total>0" :class="prefixCls+'-simple-pagination'">
    <div :class="prefixCls+'-pagination'">
      <n3-button v-show ="havePrev"  @click.native="prev" :class="prefixCls+'-simple-pagination-btn'">
        <n3-icon type="chevron-left"></n3-icon>
      </n3-button>
      <span> {{currentPage}} / {{totalpage}}</span>
      <n3-button v-show ="haveNext" @click.native="next" :class="prefixCls+'-simple-pagination-btn'">
        <n3-icon type="chevron-right"></n3-icon>
      </n3-button>
      <n3-input  
        width="50px"
        :class="prefixCls+'-simple-pagination-input'"
        @keyup.enter="go" 
        v-model="inputValue">
      </n3-input>
      <n3-button @click.native="go" :class="prefixCls+'-simple-pagination-btn'">跳转</n3-button>
    </div>
  </nav>
</template>

<script>
import type from './utils/type'
import n3Input from './n3Input'
import n3Button from './n3Button'
import n3Icon from './n3Icon'

export default {
  props: {
    total: {
      type: Number
    },
    current: {
      type: Number,
      default: 1
    },
    pagesize: {
      default: 10
    },
    onChange: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    let current = this.current
    return {
      currentPage: current,
      inputValue: '',
      havePrev: true,
      haveNext: true,
      totalpage: 0
    }
  },
  components: {
    n3Input,
    n3Icon,
    n3Button
  },
  watch: {
    currentPage (val) {
      this.inputValue = ''
      this.checkHave()

      if (type.isFunction(this.onChange)) {
        this.onChange(this.currentPage)
      }
    },
    total () {
      this.init()
    },
    pagesize () {
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.currentPage = 1
      this.totalpage = Math.ceil(this.total / this.pagesize * 1)
      this.checkHave()
    },
    checkHave () {
      this.havePrev = this.currentPage > 1
      this.haveNext = this.currentPage < this.totalpage
    },
    prev () {
      this.go(1 * this.currentPage - 1)
    },
    next () {
      this.go(1 * this.currentPage + 1)
    },
    go (page) {
      if (isNaN(page)) page = this.inputValue
      if (isNaN(page)) return

      page = 1 * page
      if (typeof page === 'number') {
        if (page < 1) {
          this.curret = 1
        } else if (page > this.totalpage) {
          this.currentPage = this.totalpage
        } else {
          this.currentPage = page
        }
      }
    }
  }
}
</script>
