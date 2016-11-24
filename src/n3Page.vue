<template>
  <div class="inline">
    <ul :class="simpleWrapClasses" v-if="simple">
      <li
        title="上一页"
        :class="prevClasses"
        @click="prev">
        <n3-icon type="angle-left"></n3-icon>
      </li>
      <div :class="simplePagerClasses" :title="current + '/' + allPages">
        <n3-input
          width="50px"
          @keyup.enter="goPage" 
          :value.sync="currentPage">
        </n3-input>  
        <span>/</span>
        {{ allPages }}
      </div>
      <li
        title="下一页"
        :class="nextClasses"
        @click="next">
        <n3-icon type="angle-right"></n3-icon>
      </li>
    </ul>
    <ul :class="wrapClasses" v-else>
      <span :class="[prefixCls + '-page-total']" v-if="showTotal">
          <slot>共 {{ total }} 条</slot>
      </span>
      <li
          title="上一页"
          :class="prevClasses"
          @click="prev">
          <n3-icon type="angle-left"></n3-icon>
      </li>
      <li title="第一页" :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
      <li title="向前 5 页" v-if="current - 3 > 1" :class="[prefixCls + '-page-item-jump-prev']" @click="fastPrev"><a><n3-icon type="ellipsis-h" @mouseenter="preventer" @mouseleave="leave" ></n3-icon></a></li>
      <li :title="current - 2" v-if="current - 2 > 1" :class="[prefixCls + '-page-item']" @click="changePage(current - 2)"><a>{{ current - 2 }}</a></li>
      <li :title="current - 1" v-if="current - 1 > 1" :class="[prefixCls + '-page-item']" @click="changePage(current - 1)"><a>{{ current - 1 }}</a></li>
      <li :title="current" v-if="current != 1 && current != allPages" :class="[prefixCls + '-page-item',prefixCls + '-page-item-active']"><a>{{ current }}</a></li>
      <li :title="current + 1" v-if="current + 1 < allPages" :class="[prefixCls + '-page-item']" @click="changePage(current + 1)"><a>{{ current + 1 }}</a></li>
      <li :title="current + 2" v-if="current + 2 < allPages" :class="[prefixCls + '-page-item']" @click="changePage(current + 2)"><a>{{ current + 2 }}</a></li>
      <li title="向后 5 页" v-if="current + 3 < allPages" :class="[prefixCls + '-page-item-jump-next']" @click="fastNext"><a><n3-icon type="ellipsis-h" @mouseenter="nextenter" @mouseleave="leave" ></n3-icon></a></li>
      <li :title="'最后一页:' + allPages" v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)"><a>{{ allPages }}</a></li>
      <li
          title="下一页"
          :class="nextClasses"
          @click="next">
          <n3-icon type="angle-right"></n3-icon>
      </li>
      <n3-select
        v-if="showSizer"
        :value.sync="pagesize"
        :options="pagesizeOptsCom"
        :on-change="onSize">
      </n3-select>
      <div class="inline" v-if="showElevator">
        <n3-input
          width="50px"
          @keyup.enter="goPage" 
          :value.sync="currentPage">
        </n3-input>
        <n3-button @click="goPage">跳转</n3-button>
      </div>
    </ul>
  </div>
</template>
<script>
  import n3Select from './n3Select.vue'
  import n3Icon from './n3Icon.vue'
  import n3Input from './n3Input.vue'
  import type from './utils/type'

  export default {
    components: {n3Select, n3Icon, n3Input},
    props: {
      prefixCls: {
        type: String,
        default: 'n3'
      },
      current: {
        type: Number,
        default: 1,
        twoway: true
      },
      total: {
        type: Number,
        default: 0
      },
      pagesize: {
        type: Number,
        default: 10,
        twoway: true
      },
      pagesizeOpts: {
        type: Array,
        default () {
          return [10, 20, 30, 40]
        }
      },
      simple: {
        type: Boolean,
        default: false
      },
      showTotal: {
        type: Boolean,
        default: false
      },
      showElevator: {
        type: Boolean,
        default: false
      },
      showSizer: {
        type: Boolean,
        default: false
      },
      onChange: {
        type: Function
      }
    },
    data () {
      return {
        currentPage: this.current
      }
    },
    computed: {
      pagesizeOptsCom () {
        return this.pagesizeOpts.map(i => {
          return {
            value: i,
            label: i + '条/页'
          }
        })
      },
      allPages () {
        const allPage = Math.ceil(this.total / this.pagesize)
        return (allPage === 0) ? 1 : allPage
      },
      simpleWrapClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page`,
          `${prefixCls}-page-simple`
        ]
      },
      simplePagerClasses () {
        let {prefixCls} = this
        return `${prefixCls}-page-simple-pager`
      },
      wrapClasses () {
        let {prefixCls} = this
        return `${prefixCls}-page`
      },
      prevClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page-prev`,
          {
            [`${prefixCls}-page-disabled`]: this.current === 1
          }
        ]
      },
      nextClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page-next`,
          {
            [`${prefixCls}-page-disabled`]: this.current === this.allPages
          }
        ]
      },
      firstPageClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page-item`,
          {
            [`${prefixCls}-page-item-active`]: this.current === 1
          }
        ]
      },
      lastPageClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page-item`,
          {
            [`${prefixCls}-page-item-active`]: this.current === this.allPages
          }
        ]
      }
    },
    methods: {
      goPage () {
        let page = this.currentPage * 1
        if (!isNaN(page)) {
          this.changePage(page)
        }
      },
      preventer (e) {
        let t = e.target
        let {prefixCls} = this
        t.classList.remove(prefixCls + '-fa-ellipsis-h')
        t.classList.add(prefixCls + '-fa-angle-double-left')
      },
      nextenter (e) {
        let t = e.target
        let {prefixCls} = this
        t.classList.remove(prefixCls + '-fa-ellipsis-h')
        t.classList.add(prefixCls + '-fa-angle-double-right')
      },
      leave (e) {
        let t = e.target
        let {prefixCls} = this
        t.classList.remove(prefixCls + '-fa-angle-double-right')
        t.classList.remove(prefixCls + '-fa-angle-double-left')
        t.classList.add(prefixCls + '-fa-ellipsis-h')
      },
      changePage (page, force) {
        page = page * 1
        page = isNaN(page) ? this.current : page
        if (force || (type.isNumber(page) && this.current !== page && (page >= 1 && page <= this.allPages))) {
          this.current = page
          this.currentPage = page
          if (type.isFunction(this.onChange)) {
            this.onChange(page, this.pagesize)
          }
        }
      },
      prev () {
        const current = this.current
        if (current <= 1) {
          return false
        }
        this.changePage(current - 1)
      },
      next () {
        const current = this.current
        if (current >= this.allPages) {
          return false
        }
        this.changePage(current + 1)
      },
      fastPrev () {
        const page = this.current - 5
        if (page > 0) {
          this.changePage(page)
        } else {
          this.changePage(1)
        }
      },
      fastNext () {
        const page = this.current + 5
        if (page > this.allPages) {
          this.changePage(this.allPages)
        } else {
          this.changePage(page)
        }
      },
      onSize (pagesize) {
        this.pagesize = pagesize * 1
        this.changePage(1, true)
      },
      onPage (page) {
        this.changePage(page)
      }
    }
  }
</script>
