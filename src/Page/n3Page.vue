<template>
  <div class="inline">
    <ul :class="simpleWrapClasses" v-if="simple">
      <li
        title="prev"
        :class="prevClasses"
        @click="prev">
        <n3-icon type="angle-left"></n3-icon>
      </li>
      <div :class="simplePagerClasses" :title="currentPage + '/' + allPages">
        <n3-input
          width="50px"
          @keyup.native.enter="goPage" 
          v-model="currentPage">
        </n3-input>  
        <span>/</span>
        {{ allPages }}
      </div>
      <li
        title="next"
        :class="nextClasses"
        @click="next">
        <n3-icon type="angle-right"></n3-icon>
      </li>
    </ul>
    <ul :class="wrapClasses" v-else>
      <span :class="[prefixCls + '-page-total']" v-if="showTotal">
          <slot> {{getL('total')}} {{ total }} </slot>
      </span>
      <li
          title="prev"
          :class="prevClasses"
          @click="prev">
          <n3-icon type="angle-left"></n3-icon>
      </li>
      <li title="first" :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
      <li title="prev 5 " v-if="currentPage - 3 > 1" :class="[prefixCls + '-page-item-jump-prev']" @click="fastPrev"><a><n3-icon type="ellipsis-h" @mouseenter.native="preventer" @mouseleave.native="leave" ></n3-icon></a></li>
      <li :title="currentPage - 2" v-if="currentPage - 2 > 1" :class="[prefixCls + '-page-item']" @click="changePage(currentPage - 2)"><a>{{ currentPage - 2 }}</a></li>
      <li :title="currentPage - 1" v-if="currentPage - 1 > 1" :class="[prefixCls + '-page-item']" @click="changePage(currentPage - 1)"><a>{{ currentPage - 1 }}</a></li>
      <li :title="currentPage" v-if="currentPage != 1 && currentPage != allPages" :class="[prefixCls + '-page-item',prefixCls + '-page-item-active']"><a>{{ currentPage }}</a></li>
      <li :title="currentPage + 1" v-if="currentPage + 1 < allPages" :class="[prefixCls + '-page-item']" @click="changePage(currentPage + 1)"><a>{{ currentPage + 1 }}</a></li>
      <li :title="currentPage + 2" v-if="currentPage + 2 < allPages" :class="[prefixCls + '-page-item']" @click="changePage(currentPage + 2)"><a>{{ currentPage + 2 }}</a></li>
      <li title="next 5 " v-if="currentPage + 3 < allPages" :class="[prefixCls + '-page-item-jump-next']" @click="fastNext"><a><n3-icon type="ellipsis-h" @mouseenter.native="nextenter" @mouseleave.native="leave" ></n3-icon></a></li>
      <li :title="'last:' + allPages" v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)"><a>{{ allPages }}</a></li>
      <li
          title="next"
          :class="nextClasses"
          @click="next">
          <n3-icon type="angle-right"></n3-icon>
      </li>
      <n3-select
        v-if="showSizer"
        v-model="currentPagesize"
        :options="pagesizeOptsCom"
        @change="onSize">
      </n3-select>
      <div class="inline" v-if="showElevator">
        <n3-input
          width="50px"
          @keyup.native.enter="goPage" 
          v-model="currentPage">
        </n3-input>
        <n3-button @click.native="goPage">{{getL('go')}}</n3-button>
      </div>
    </ul>
  </div>
</template>
<script>
  import n3Select from '../Select/n3Select.vue'
  import n3Icon from '../Icon/n3Icon.vue'
  import n3Input from '../Input/n3Input.vue'
  import type from '../utils/type'
  import localeMixin from '../Mixin/localeMixin'

  export default {
    name: 'n3Page',
    components: {n3Select, n3Icon, n3Input},
    mixins: [localeMixin('n3Page')],
    props: {
      prefixCls: {
        type: String,
        default: 'n3'
      },
      current: {
        type: Number,
        default: 1
      },
      value: {
        type: Number
      },
      total: {
        type: Number,
        default: 0
      },
      pagesize: {
        type: Number,
        default: 10
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
      }
    },
    watch: {
      current (val) {
        this.currentPage = val
      },
      pagesize (val) {
        this.currentPagesize = val
      },
      currentPage (val) {
        if(this.inner) {
          this.inner = false
          return
        }
        this.inner = true
        this.$emit('input', val)
      },
      value(val) {
        if(this.inner) {
          this.inner = false
          return
        }
        this.inner = true
        this.currentPage = val
      }
    },
    data () {
      return {
        currentPage: this.value || this.current,
        currentPagesize: this.pagesize
      }
    },
    computed: {
      pagesizeOptsCom () {
        return this.pagesizeOpts.map(i => {
          return {
            value: i,
            label: i + ' / ' + this.getL('page')
          }
        })
      },
      allPages () {
        const allPage = Math.ceil(this.total / this.currentPagesize)
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
            [`${prefixCls}-page-disabled`]: this.currentPage === 1
          }
        ]
      },
      nextClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page-next`,
          {
            [`${prefixCls}-page-disabled`]: this.currentPage === this.allPages
          }
        ]
      },
      firstPageClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page-item`,
          {
            [`${prefixCls}-page-item-active`]: this.currentPage === 1
          }
        ]
      },
      lastPageClasses () {
        let {prefixCls} = this
        return [
          `${prefixCls}-page-item`,
          {
            [`${prefixCls}-page-item-active`]: this.currentPage === this.allPages
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
        page = isNaN(page) ? this.currentPage : page
        if (force || (type.isNumber(page) && this.currentPage !== page && (page >= 1 && page <= this.allPages))) {
          this.currentPage = page
          this.$emit('change', page, this.currentPagesize)
        }
      },
      prev () {
        const current = this.currentPage
        if (current <= 1) {
          return false
        }
        this.changePage(current - 1)
      },
      next () {
        const current = this.currentPage
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
        const page = this.currentPage + 5
        if (page > this.allPages) {
          this.changePage(this.allPages)
        } else {
          this.changePage(page)
        }
      },
      onSize (pagesize) {
        this.currentPagesize = pagesize * 1
        this.changePage(1, true)
      },
      onPage (page) {
        this.changePage(page)
      }
    }
  }
</script>