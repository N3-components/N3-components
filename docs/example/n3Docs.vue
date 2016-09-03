<template>
<div>
  <div>
    <header-docs class="freeze" :active="type"></header-docs>
    <n3-container class="bs-docs-container" v-if="type === 'base'">
      <n3-row >
        <n3-column :col="2">
          <input placeholder="搜索" v-model="search" class="searchCom" ></input>
          <n3-nav type="vertical" >
             <n3-nav-item v-for="(index,item) in list">
              <n3-sub-nav  :show.sync="item.show" >
                <a slot="title" style="color:#333">{{index}}</a>
                <n3-nav-item v-for="i in item.list" :active="component == i.value" @click="change(i.value)">
                  <a>{{i.label}}</a>
                </n3-nav-item>
              </n3-sub-nav>
            </n3-nav-item>
          </n3-nav>
        </n3-column>
        
        <n3-column :col="10">
          <component :is="component" ></component>
        </n3-column>
      <n3-row>
    </n3-container>
    <template v-else>
      <slot></slot>
    </template>
  </div>
  <footer class="bs-docs-footer">
    <n3-container >
      <p>联系邮箱 zhangking520@gmail.com</p>
    </n3-container>
  </footer>
</div>
</template>
<script>
require('../js/showLanguage')

import prismjs from 'prismjs'
import headerDocs from './headerDocs.vue'
import n3LayoutDocs from './n3LayoutDocs.vue'
import n3IconDocs from './n3IconDocs.vue'
import n3TagsDocs from './n3TagsDocs.vue'
import n3AlertDocs from './n3AlertDocs.vue'
import n3AccordionDocs from './n3AccordionDocs.vue'
import n3CascaderDocs from './n3CascaderDocs.vue'
import n3AffixDocs from './n3AffixDocs.vue'
import n3AsideDocs from './n3AsideDocs.vue'
import n3CarouselDocs from './n3CarouselDocs.vue'
import n3ButtonsDocs from './n3ButtonsDocs.vue'
import n3ToastDocs from './n3ToastDocs.vue'
import n3DatepickerDocs from './n3DatepickerDocs.vue'
import n3TimepickerDocs from './n3TimepickerDocs.vue'
import n3DatetimepickerDocs from './n3DatetimepickerDocs.vue'
import n3DropdownDocs from './n3DropdownDocs.vue'
import n3ModalDocs from './n3ModalDocs.vue'
import n3InputDocs from './n3InputDocs.vue'
import n3TextareaDocs from './n3TextareaDocs.vue'
import n3NavDocs from './n3NavDocs.vue'
import n3PopoverDocs from './n3PopoverDocs.vue'
import n3ProgressbarDocs from './n3ProgressbarDocs.vue'
import n3SelectDocs from './n3SelectDocs.vue'
import n3SwitchDocs from './n3SwitchDocs.vue'
import n3TimelineDocs from './n3TimelineDocs.vue'
import n3TabsDocs from './n3TabsDocs.vue'
import n3TooltipDocs from './n3TooltipDocs.vue'
import n3TypeaheadDocs from './n3TypeaheadDocs.vue'
import n3StepDocs from './n3StepDocs.vue'
import n3SliderDocs from './n3SliderDocs.vue'
import n3LoadingDocs from './n3LoadingDocs.vue'
import n3SimplePaginationDocs from './n3SimplePaginationDocs.vue'
import n3DataTableDocs from './n3DataTableDocs.vue'
import n3BreadcrumbDocs from './n3BreadcrumbDocs.vue'
import n3MultipleInputDocs from './n3MultipleInputDocs.vue'
import n3TreeDocs from './n3TreeDocs.vue'
import n3UploaderDocs from './n3UploaderDocs.vue'
import n3FormDocs from './n3FormDocs.vue'
import n3CheckboxDocs from './n3CheckboxDocs.vue'
import n3RadioDocs from './n3RadioDocs.vue'
import n3AnimateDocs from './n3AnimateDocs.vue'

export default{
  props: {
    type: {
      type: String
    }
  },
  data () {
    var map, component

    if (this.type === 'base') {
      map = {
        '基本': {show: true,
                list: [{label: '布局', value: 'n3LayoutDocs'},
                {label: '固钉', value: 'n3AffixDocs'},
                {label: '按钮', value: 'n3ButtonsDocs'},
                {label: '图标', value: 'n3IconDocs'}]},

        '提示': {show: true,
                list: [{label: '提示消息', value: 'n3AlertDocs'},
                {label: '页面提示', value: 'n3ToastDocs'},
                {label: '浮出提示', value: 'n3TooltipDocs'},
                {label: '气泡框', value: 'n3PopoverDocs'},
                {label: '加载提示', value: 'n3LoadingDocs'}]},

        '表单': {show: true,
                list: [{label: '输入框', value: 'n3InputDocs'},
                {label: '文本框', value: 'n3TextareaDocs'},
                {label: '级联选择', value: 'n3CascaderDocs'},
                {label: '单选框', value: 'n3RadioDocs'},
                {label: '多选框', value: 'n3CheckboxDocs'},
                {label: '选择框', value: 'n3SelectDocs'},
                {label: '滑块', value: 'n3SliderDocs'},
                {label: '日期选择器', value: 'n3DatepickerDocs'},
                {label: '时间选择器', value: 'n3TimepickerDocs'},
                {label: '日期时间选择器', value: 'n3DatetimepickerDocs'},
                {label: '开关', value: 'n3SwitchDocs'},
                {label: '文件上传', value: 'n3UploaderDocs'},
                {label: '自动补全', value: 'n3TypeaheadDocs'},
                {label: '自定义输入', value: 'n3MultipleInputDocs'},
                {label: '表单验证', value: 'n3FormDocs'}]},

        '展示': {show: true,
                list: [{label: '折叠面板', value: 'n3AccordionDocs'},
                 {label: '侧边栏', value: 'n3AsideDocs'},
                 {label: '幻灯片', value: 'n3CarouselDocs'},
                 {label: '数据表格', value: 'n3DataTableDocs'},
                 {label: '下拉框', value: 'n3DropdownDocs'},
                 {label: '弹出框', value: 'n3ModalDocs'},
                 {label: '进度条', value: 'n3ProgressbarDocs'},
                 {label: '标签', value: 'n3TagsDocs'},
                 {label: '时间轴', value: 'n3TimelineDocs'},
                 {label: '树形', value: 'n3TreeDocs'},
                 {label: '步骤条', value: 'n3StepDocs'}]},

        '导航': {show: true,
                list: [{label: '导航', value: 'n3NavDocs'},
                 {label: '面包屑', value: 'n3BreadcrumbDocs'},
                 {label: '简易分页', value: 'n3SimplePaginationDocs'},
                 {label: '标签页', value: 'n3TabsDocs'}]},

        '其他': {show: true,
                list: [{label: '动画', value: 'n3AnimateDocs'}]}}

      component = 'n3LayoutDocs'
    }

    return {
      component: component,
      anchor: '',
      map: map,
      list: {},
      search: ''
    }
  },
  watch: {
    search (val) {
      let ret = {}
      let map = this.map

      for (let i in map) {
        let show = map[i].show
        let list = map[i].list

        let t = list.filter((i)=>{
          let v = val.toLowerCase()
          let label = i.label
          let value = i.value.toLowerCase().replace('Docs', '').replace('n3', '')

          return label.indexOf(v) > -1 || value.indexOf(v) > -1
        })

        if (t.length) {
          ret[i] = {
            show: show,
            list: t
          }
        }
      }

      this.list = ret

    }
  },
  methods: {
    change (value) {
      this.component = value
      window.location.hash = value
    },
    init () {
      var hash = window.location.hash
      hash = hash.substr(1, hash.length)
      if (hash) {
        this.component = hash
        this.$nextTick(() => {
          prismjs.highlightAll()
        })
      }
    }
  },
  ready () {
    this.list = this.map
    this.init()
    window.onhashchange = this.init
  },
  components: {
    headerDocs,
    n3LayoutDocs,
    n3AlertDocs,
    n3AccordionDocs,
    n3IconDocs,
    n3AffixDocs,
    n3SwitchDocs,
    n3AsideDocs,
    n3ToastDocs,
    n3CarouselDocs,
    n3InputDocs,
    n3TextareaDocs,
    n3ButtonsDocs,
    n3DatepickerDocs,
    n3TimepickerDocs,
    n3DatetimepickerDocs,
    n3UploaderDocs,
    n3TreeDocs,
    n3DropdownDocs,
    n3ModalDocs,
    n3PopoverDocs,
    n3SelectDocs,
    n3RadioDocs,
    n3CheckboxDocs,
    n3TabsDocs,
    n3TooltipDocs,
    n3TypeaheadDocs,
    n3StepDocs,
    n3NavDocs,
    n3ProgressbarDocs,
    n3TimelineDocs,
    n3LoadingDocs,
    n3SimplePaginationDocs,
    n3SliderDocs,
    n3CascaderDocs,
    n3MultipleInputDocs,
    n3DataTableDocs,
    n3BreadcrumbDocs,
    n3FormDocs,
    n3TagsDocs,
    n3AnimateDocs
  }
}
</script>

<style>
  .bs-docs-sidenav a:hover{
    cursor: pointer;
  }
  .version{
    position: absolute;
    top: 10px;
    left: 52px;
  }
  .searchCom{
    width: 100%;
    border: 0px;
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
    margin-top: 10px;
    outline: none;
  }

</style>