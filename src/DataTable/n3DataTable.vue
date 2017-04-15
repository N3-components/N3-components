<template>
  <div :class="`${prefixCls}-data-table`">
  <div :class="`${prefixCls}-data-table-bar clearfix`">
    <n3-select 
      class='pull-left'
      style="margin-right:10px;"
      multiple
      :showselected="false"
      v-if="selectCol"
      :placeholder = "getL('selectCol')"
      :options="selectOptions" 
      v-model="selectdCols">
    </n3-select>
    <div v-if="filter && filterArr.length" :class="`pull-left ${prefixCls}-btn-group`">
      <template v-for="item in filterArr">
        <n3-select 
          :multiple = "item.multiple === undefined?true:!!item.multiple"
          :search = "item.search === undefined?true:!!item.search"
          :extra = "item.extra === undefined?true:!!item.extra"
          :showselected="false"
          :placeholder = "item.title"
          :options="item.options" 
          v-model="item.value">
        </n3-select>
      </template>  
      <n3-button
        :class="`${prefixCls}-data-table-inner-btn`"
        @click.native="resetFilter" 
        type="primary">
        <n3-icon type="reply"></n3-icon>
      </n3-button>
       <n3-button
        :class="`${prefixCls}-data-table-inner-btn`"
        @click.native="goFilter" 
        type="primary">
        <n3-icon type="filter"></n3-icon>
      </n3-button>
    </div>
      <n3-button
        :class="`${prefixCls}-data-table-inner-btn`" 
        style="margin-left:10px;"
        @click.native="refresh"
        v-if="refresh"  
        type="primary">
        <n3-icon type="refresh"></n3-icon>
      </n3-button>
      <slot ></slot>
    <n3-input
      class="pull-right" 
      :placeholder="getL('search')"
      v-model="query"
      @keydown.native.enter="gosearch"
      v-if="search">
    </n3-input>
  </div>
  <div>
    <n3-loading center size="lg" v-if="loading"></n3-loading>
    <div v-if="fixedColumns" :class="`${prefixCls}-data-table-fixed-columns`">
      <table :class="classObj">
        <thead>
            <tr>
              <th v-if="selection" :class="`${prefixCls}-data-table-row-select`">
                  <input v-if="list && list.length" 
                    type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" 
                    @change="onCheckAll"/>
              </th>
              <th v-for="col in showColumns" 
                  :style="{width: col.width}" 
                  :class="{'pointer': col.sort}" 
                  @click="sort(col, col.sort)" 
                  :colspan="col.colspan === undefined ? 1 : col.colspan"> 
                    <span>{{col.title}} </span> 
                    <div :class="`${prefixCls}-data-table-sort pull-right`" v-if="col.sort" >
                      <n3-icon
                        @click.native.stop="sort(col,col.sort,'ASC')"
                        :style="{color: sortStatus(col.dataIndex,'ASC') ? 'gray' : '#ddd'}" 
                        type="caret-up">
                      </n3-icon>
                      <n3-icon
                        @click.native.stop="sort(col,col.sort,'DESC')"
                        :style="{color: sortStatus(col.dataIndex,'DESC')? 'gray' : '#ddd'}"
                        type="caret-down">
                      </n3-icon>
                    </div>
              </th>
            </tr>
          </thead>
      </table>
    </div>
    <div  :class="[loading ? prefixCls + '-data-table-loading':'']" 
          :style="styleCon">
      <table :class="classObj" :style="styleTable">
          <thead>
            <tr>
              <th v-if="selection" :class="`${prefixCls}-data-table-row-select`">
                  <input v-if="list && list.length" 
                    type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" 
                    @change="onCheckAll"/>
              </th>
              <th v-for="col in showColumns" 
                  :style="{width: col.width}" 
                  :class="{'pointer': col.sort}" 
                  @click="sort(col, col.sort)" 
                  :colspan="col.colspan === undefined ? 1 : col.colspan"> 
                    <span>{{col.title}} </span> 
                    <div :class="`${prefixCls}-data-table-sort pull-right`" v-if="col.sort" >
                      <n3-icon
                        @click.native.stop="sort(col,col.sort,'ASC')"
                        :style="{color: sortStatus(col.dataIndex,'ASC') ? 'gray' : '#ddd'}" 
                        type="caret-up">
                      </n3-icon>
                      <n3-icon
                        @click.native.stop="sort(col,col.sort,'DESC')"
                        :style="{color: sortStatus(col.dataIndex,'DESC')? 'gray' : '#ddd'}"
                        type="caret-down">
                      </n3-icon>
                    </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data,index) in list" track-by="n3Key">
                <td v-if="selection" :class="`${prefixCls}-row-select`">
                   <input type="checkbox" 
                    v-model="checkedValues"  
                    :value="stringify(data)" @change.stop="onCheckOne($event,data)" 
                    v-bind="selection.getCheckboxProps && selection.getCheckboxProps(data)"/>
                </td>
                <td v-for="col in showColumns"
                  :colspan="colspan(col,data)"
                  :rowspan="rowspan(col,data)">
                  <template v-if="col.show!=false && colspan(col,data) != 0 && rowspan(col,data) !=0">
                    <template v-if="col.render">
                      <render :context="context || $parent._self" :template="col.render(data[col.dataIndex],data,index)"></render>
                    </template>
                    <template v-else>
                      <span v-html="col.dataIndex ? data[col.dataIndex] : ''"></span>
                    </template>
                  </template>
                </td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>

  <div :class="`${prefixCls}-data-table-bar ${prefixCls}-data-table-page`" v-if="page" >
    <n3-page
      v-if="page" 
      :total="cpage.total" 
      :current="cpage.current" 
      :pagesize="cpage.pagesize" 
      @change="pageChange"
      :show-sizer="true"
      :show-total="true"
      :pagesize-opts="cpage.pagesizeOpts">
    </n3-page>
    </div>
  </div>
  </div>
</template>
<script>
import render from '../render'
import n3Page from '../Page/n3Page'
import n3Select from '../Select/n3Select'
import n3Button from '../Button/n3Button'
import n3Icon from '../Icon/n3Icon'
import n3Input from '../Input/n3Input'
import n3Loading from '../Loading/n3Loading'
import type from '../utils/type'
import localeMixin from '../Mixin/localeMixin'


export default {
  name: 'n3DataTable',
  mixins: [localeMixin('n3DataTable')],
  props: {
    context: {
    },
    selection: {
      type: Object
    },
    refresh: {
      type: Function
    },
    selectCol: {
      type: Boolean,
      default: true
    },
    filter: {
      type: Boolean,
      default: true
    },
    filterList: {
      type: Array
    },
    page: {
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean
    },
    bordered: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: true
    },
    responsive: {
      type: Boolean
    },
    columns: {
      type: Array
    },
    source: {
      type: Array
    },
    async: {
      boolean: false
    },
    fixedColumns: {
      type: Boolean
    },
    height: {
      type: String
    },
    width: {
      type: String
    },
    pagination: {
      type: Object,
      default () {
        return {
          total: 0,
          current: 1,
          pagesize: 10,
          pagesizeOpts: [10, 20, 30, 40]
        }
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    mergeRule: {
      type: Object
    },
    prefixCls: {
      type: String,
      default: 'n3'
    }
  },
  data () {
    return {
      key: 'n3Key',
      mergeMap: {},
      isDisabledAll: false,
      filterArr: [],
      filterMap: {},
      query: '',
      searchMap: {},
      list: [],
      sortInfo: {},
      initSource: [],
      initColumns: [],
      selectdCols: [],
      selectOptions: [],
      cpage: {
        total: this.pagination.total,
        current: this.pagination.current,
        pagesize: this.pagination.pagesize,
        pagesizeOpts: this.pagination.pagesizeOpts
      }
    }
  },
  watch: {
    selectdCols (val) {
      let copy = []
      for (let i = 0; i < this.initColumns.length; i++) {
        let c = this.initColumns[i]
        val.indexOf(c.value) === -1 ? c.show = false : c.show = true
        copy.push(Object.assign({}, c))
      }
      this.initColumns = copy
      this.compileRender()
    },
    source (val) {
      this.handlerSource()
      this.render()
    },
    columns (val) {
      this.init()
    },
    filterList () {
      this.handlerFilter()
    },
    pagination: {
      handler (val) {
        this.cpage.current = val.current
        this.cpage.pagesize = val.pagesize
        this.cpage.total = val.total
        this.cpage.pagesizeOpts = val.pagesizeOpts
      },
      deep: true 
    }
  },
  mounted () {
    this.init()
  },
  components: {
    n3Page,
    n3Select,
    n3Button,
    n3Icon,
    n3Input,
    n3Loading,
    render
  },
  computed: {
    showColumns () {
      return this.initColumns.filter(i => {
        return i.show && i.colspan != 0
      })
    },
    styleCon () {
      let style = {
        overflow: 'auto'
      }
      if (this.fixedColumns && this.height) {
        style.height = this.height
      }
      return style
    },
    styleTable () {
      let style = {
        overflow: 'auto'
      }
      if (this.width) {
        style.width = this.width
      } 

      return style
    },
    checkedRows: {
      get () {
        return this.selection.checkRows
      },
      set (val) {
        let self = this
        this.selection.checkRows = val.map(i => {
          return self.delkey(i)
        })
      }
    },
    classObj () {
      let {prefixCls, striped, bordered, hover, responsive} = this
      let klass = {}
      klass[prefixCls + '-table'] = true
      klass[prefixCls + '-table-striped'] = striped
      klass[prefixCls + '-table-bordered'] = bordered
      klass[prefixCls + '-table-hover'] = hover
      klass[prefixCls + '-table-responsive'] = responsive
      return klass
    },
    isCheckedAll () {
      let self = this
      let rows = this.checkebleRows.filter((record) => {
        let item = Object.assign({}, record)
        delete item.n3Key
        return self.checkedValues.indexOf(JSON.stringify(item)) > -1
      })

      return this.checkebleRows.length === rows.length
    },
    filters () {
      let ret = []
      let filters = this.filterArr
      for (let i = 0; i < filters.length; i++) {
        if (filters[i]['value'].length) {
          ret.push({dataIndex: filters[i]['dataIndex'], value: filters[i]['value']})
        }
      }
      return ret
    },
    checkedValues () {
      let self = this
      let rows = self.checkedRows.filter((record) => {
        if (self.selection) {
          return !self.selection.getCheckboxProps || !self.selection.getCheckboxProps(record).disabled
        }
      })
      let checkedKeys = rows.map((record) => {
        return JSON.stringify(record)
      })

      return checkedKeys
    },
    checkebleRows () {
      let self = this
      let rows = []
      if (self.list && self.list.length) {
        rows = self.list.filter((record) => {
          if (self.selection) {
            return !self.selection.getCheckboxProps || !self.selection.getCheckboxProps(record).disabled
          }
        })
      }
      return rows
    }
  },
  methods: {
    stringify (val) {
      return JSON.stringify(this.delkey(val))
    },
    delkey (val) {
      let a = Object.assign({}, val)
      delete a[this.key]
      return a
    },
    compare (a, b) {
      let e = true
      for (let i in a) {
        if (a[i] != b[i]) {
          e = false
          return false
        }
      }
      return e
    },
    colspan (col, data) {
      let m = this.mergeRule
      if (!m) return 1
      let ret = m[col.dataIndex] && m[col.dataIndex][data[col.dataIndex]]
      return ret ? ret.colspan : 1
    },
    rowspan (col, data) {
      let m = this.mergeRule
      if (!m) return 1
      let ret = m[col.dataIndex] && m[col.dataIndex][data[col.dataIndex]]
      return ret ? ret.rowspan : 1
    },
    onCheckOne (event, record) {
      let self = this
      let input = event.srcElement || event.target
      let checked = input.checked
      if (checked) {
        let array = self.checkedRows
        if (self.checkedRows.findIndex(item => { return self.compare(item, record) }) === -1) {
          array.push(record)
        }
        self.checkedRows = array
      } else {
        self.checkedRows = self.checkedRows.filter((item) => {
          return !self.compare(item, record)
        })
      }
      if (self.selection.onSelect) {
        self.selection.onSelect(record, checked, self.checkedRows)
      }
    },
    onCheckAll (event) {
      let self = this
      let changeRows = []
      let input = event.srcElement || event.target
      let checked = input.checked
      if (checked) {
        let array = self.checkedRows
        self.checkebleRows.forEach((record, i) => {
          if (self.checkedRows.findIndex(item => { return self.compare(item, record) }) < 0) {
            array.push(record)
            changeRows.push(self.delkey(record))
          }
        })
        self.checkedRows = array
      } else {
        let array = self.checkedRows
        self.checkebleRows.forEach((record, i) => {
          let index = self.checkedRows.findIndex(item => { return self.compare(item, record) })
          if (index >= 0) {
            array.splice(index, 1)
            changeRows.push(self.delkey(record))
          }
        })
        self.checkedRows = array
      }
      if (self.selection.onSelectAll) {
        self.selection.onSelectAll(checked, self.checkedRows, changeRows)
      }
    },
    sortStatus (dataIndex, type) {
      return this.sortInfo.index === dataIndex && this.sortInfo.type === type
    },
    tableChange () {
      this.$emit('change', this.page ? this.cpage : null, this.search ? this.query : null, this.sort ? this.sortInfo : null, this.filter ? this.filters : null)
    },
    sort (col, s, t) {
      let dataIndex = col.dataIndex
      let _type = t || 'DESC'
      if (!s) return
      if (dataIndex === this.sortInfo.index) {
        _type = t || (this.sortInfo.type === 'DESC' ? 'ASC' : 'DESC')
      }
      this.sortInfo = {
        index: dataIndex,
        type: _type,
        method: col.sortMethod
      }
      if (this.sort && this.async) {
        this.tableChange()
      } else {
        this.render()
      }
    },
    gosearch () {
      this.cpage.current = 1
      if (this.search && this.async) {
        this.tableChange()
      } else {
        this.render()
      }
    },
    pageChange (current, pagesize) {
      this.cpage.current = current
      this.cpage.pagesize = pagesize
      if (this.page && this.async) {
        this.tableChange()
      } else {
        this.render()
      }
    },
    resetFilter () {
      for (let i = 0; i < this.filterArr.length; i++) {
        this.filterArr[i].value = []
      }
      this.cpage.current = 1
      if (this.filter && this.async) {
        this.tableChange()
      } else {
        this.render()
      }
    },
    goFilter () {
      this.cpage.current = 1
      if (this.filter && this.async) {
        this.tableChange()
      } else {
        this.render()
      }
    },
    addFilter (index, value, filterValue) {
      let values = this.filterMap[index] && this.filterMap[index]['values']
      let filter = this.filterMap[index] && this.filterMap[index]['filter']
      if (!values[value]) {
        filter['options'].push({value: value, label: value})
        values[value] = true
        if (filterValue && filterValue.indexOf(value) > -1) {
          filter['value'].push(value)
        }
      }
    },
    handlerFilter () {
      let s = this.columns
      if (!this.filter) return
      this.filterMap = {}
      if (type.isArray(this.filterList)) {
        this.filterArr = this.filterList
      } else {
        for (let i = 0; i < s.length; i++) {
          if (s[i]['filter']) {
            this.filterArr.push({title: s[i]['title'], dataIndex: s[i]['dataIndex'], options: [], value: []})
          }
        }
      }
      for (let k = 0; k < this.filterArr.length; k++) {
        this.filterMap[this.filterArr[k]['dataIndex']] = {filter: this.filterArr[k], values: {}}
      }
    },
    handlerColumns () {
      let s = this.columns
      let selectdCols = []
      let ret = []
      this.filterArr = []
      for (let i = 0; i < s.length; i++) {
        let t = Object.assign({}, s[i])
        t['value'] = t['dataIndex']
        t['label'] = t['title']
        if (t['show'] !== false) {
          t['show'] = true
          selectdCols.push(t['value'])
        }
        t['sortType'] || t['sortMethod'] ? this.sortInfo = {index: t['dataIndex'], type: t['sortType'], method: t['sortMethod']} : 0
        ret[i] = t
      }
      this.handlerFilter()
      this.selectdCols = selectdCols
      this.initColumns = ret
      this.selectOptions = ret.map((i) => { return {label: i.label, value: i.value} })
    },
    handlerSource () {
      let s = this.source
      let ret = []
      let filterValue = {}
      let checkedRows = []
      if (!type.isArray(this.filterList)) {
        for (let i in this.filterMap) {
          var filter = this.filterMap[i]
          filterValue[i] = filter['filter']['value'].slice(0)
          filter['values'] = {}
          filter['filter']['options'] = []
          filter['filter']['value'] = []
        }
      }
      for (let i = 0; i < s.length; i++) {
        let search = ''
        for (let j in s[i]) {
          search += s[i][j]
          if (!type.isArray(this.filterList) && this.filterMap[j]) {
            this.addFilter(j, s[i][j], filterValue[j])
          }
        }
        if (this.search) {
          this.searchMap[i] = search
        }

        ret[i] = Object.assign({}, s[i], {n3Key: i})
        if (this.selection) {
          let p = this.selection.getCheckboxProps
          p = p ? p(ret[i]) : null
          if (p && p.checked) {
            checkedRows.push(ret[i])
          }
        }
      }
      if (this.selection) {
        this.checkedRows = checkedRows
      }
      this.initSource = ret
    },
    init () {
      this.handlerColumns()
      this.handlerSource()
      this.render()
    },
    listSort (arr, field, order, method) {
      let type = 'number'
      order = order === 'ASC' ? 'ASC' : 'DESC'
      if (!method) {
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i][field] !== 'number') {
            type = 'string'
            break
          }
        }
        arr.sort((x, y) => {
          return type === 'string' ? String(x[field]).localeCompare(y[field]) : x[field] - y[field]
        })
      } else {
        arr.sort(method)
      }
      if (order === 'DESC') arr.reverse()
    },
    getFilter (index) {
      return this.filterMap[index] && this.filterMap[index]['filter']
    },
    inArray (index, array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === index) {
          return true
        }
      }
      return false
    },
    isFilterEmpty () {
      let map = this.filterMap
      for (let i in map) {
        if (map[i]['filter']['value'].length > 0) {
          return false
        }
      }
      return true
    },
    filterRet (a) {
      let ret = []
      for (let i = 0; i < a.length; i++) {
        let item = a[i]
        let pass = true
        for (let j in item) {
          let filter = this.getFilter(j)
          if (filter && filter['value'].length && !this.inArray(item[j], filter['value'])) {
            pass = false
          }
        }
        if (pass) {
          ret.push(item)
        }
      }
      return ret
    },
    render () {
      let s = this.initSource
      let ret = this.initSource.slice(0)
      if (this.filter && !this.async && this.filterArr.length > 0 && !this.isFilterEmpty()) {
        ret = this.filterRet(ret)
      }
      if (this.search && !this.async && this.query) {
        ret = []
        for (let i = 0; i < s.length; i++) {
          this.searchMap[s[i][this.key]].indexOf(this.query) !== -1 ? ret.push(s[i]) : 0
        }
      }
      if (this.sortInfo.index && !this.async) {
        this.listSort(ret, this.sortInfo.index, this.sortInfo.type, this.sortInfo.method)
      }
      if (this.page && !this.async) {
        this.cpage.total = ret.length
        ret = ret.slice((this.cpage.current - 1) * this.cpage.pagesize, (this.cpage.current - 1) * this.cpage.pagesize + this.cpage.pagesize)
      }
      this.list = ret
      this.compileRender()
    },
    compileRender () {
      let self = this
      this.$nextTick(() => {
        if (this.selection) {
          self.isDisabledAll = !self.checkebleRows.length
        }
        this.$emit('complete')
      })
    }
  }
}
</script>