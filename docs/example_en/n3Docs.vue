<template>
  <div>
    <div>
      <header-docs class="freeze" :active="type"></header-docs>
      <n3-container class="bs-docs-container" v-if="type === 'base'">
          <n3-row >
            <n3-column :col="2">
              <input placeholder="search" v-model="search" class="searchCom" ></input>
              <n3-nav type="vertical" :default-openeds="['Base','Tooltip','Form','Display','Navigation','Others']" @select="select">
                  <n3-sub-nav v-for="(item, index) in list"  :index="index" :key="index">
                    <template slot="title">{{index}}</template>
                    <n3-nav-item v-for="(i,index1) in item.list" :index="index1" :key="index1" :active="component == i.value" @click.native="change(i.value)">
                      <a v-text="i.label"></a>
                    </n3-nav-item>
                  </n3-sub-nav>
              </n3-nav>
            </n3-column>
            <n3-column :col="10">
              <component :is="component" ></component>
            </n3-column>
          </n3-row>
      </n3-container>
      <template v-else>
        <slot></slot>
      </template>
    </div>
    <footer class="bs-docs-footer">
      <n3-container >
        <ul>
          <li><span>Email:</span>zhangking520@gmail.com</li>
          <li><span>Github:</span><a href="https://github.com/N3-components/N3-components">Repository</a></li>
          <li><span>QQ Group:</span>556286036</li>
          <li><span>gitter:</span><a href="https://gitter.im/N3-components/english?utm_source=share-link&utm_medium=link&utm_campaign=share-link">gitter link </a></li>
        </ul>
      </n3-container>
    </footer>
  </div>
</template>

<script>
require('../js/showLanguage')

import prismjs from 'prismjs'
import headerDocs from './headerDocs.vue'
import n3LayoutDocs from './n3LayoutDocs.md'
import n3IconDocs from './n3IconDocs.md'
import n3TagsDocs from './n3TagsDocs.md'
import n3AlertDocs from './n3AlertDocs.md'
import n3AccordionDocs from './n3AccordionDocs.md'
import n3CascaderDocs from './n3CascaderDocs.md'
import n3AffixDocs from './n3AffixDocs.md'
import n3AsideDocs from './n3AsideDocs.md'
import n3CarouselDocs from './n3CarouselDocs.md'
import n3ButtonsDocs from './n3ButtonsDocs.md'
import n3ToastDocs from './n3ToastDocs.md'
import n3DatepickerDocs from './n3DatepickerDocs.md'
import n3TimepickerDocs from './n3TimepickerDocs.md'
import n3DatetimepickerDocs from './n3DatetimepickerDocs.md'
import n3DropdownDocs from './n3DropdownDocs.md'
import n3ModalDocs from './n3ModalDocs.md'
import n3InputDocs from './n3InputDocs.md'
import n3InputNumberDocs from './n3InputNumberDocs.md'
import n3TextareaDocs from './n3TextareaDocs.md'
import n3NavDocs from './n3NavDocs.md'
import n3PopoverDocs from './n3PopoverDocs.md'
import n3ProgressbarDocs from './n3ProgressbarDocs.md'
import n3SelectDocs from './n3SelectDocs.md'
import n3SwitchDocs from './n3SwitchDocs.md'
import n3TimelineDocs from './n3TimelineDocs.md'
import n3TabsDocs from './n3TabsDocs.md'
import n3TooltipDocs from './n3TooltipDocs.md'
import n3TypeaheadDocs from './n3TypeaheadDocs.md'
import n3StepDocs from './n3StepDocs.md'
import n3SliderDocs from './n3SliderDocs.md'
import n3LoadingDocs from './n3LoadingDocs.md'
import n3PageDocs from './n3PageDocs.md'
import n3DataTableDocs from './n3DataTableDocs.md'
import n3BreadcrumbDocs from './n3BreadcrumbDocs.md'
import n3MultipleInputDocs from './n3MultipleInputDocs.md'
import n3TreeDocs from './n3TreeDocs.md'
import n3RateDocs from './n3RateDocs.md'
import n3UploaderDocs from './n3UploaderDocs.md'
import n3FormDocs from './n3FormDocs.md'
import n3CheckboxDocs from './n3CheckboxDocs.md'
import n3RadioDocs from './n3RadioDocs.md'
import n3CardDocs from './n3CardDocs.md'
import n3AnimateDocs from './n3AnimateDocs.md'

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
        'Base': {show: true,
                list: [{label: 'Layout', value: 'n3LayoutDocs'},
                {label: 'Affix', value: 'n3AffixDocs'},
                {label: 'Button', value: 'n3ButtonsDocs'},
                {label: 'Icon', value: 'n3IconDocs'}]},

        'Tooltip': {show: true,
                list: [{label: 'Alert', value: 'n3AlertDocs'},
                {label: 'Toast', value: 'n3ToastDocs'},
                {label: 'Tooltip', value: 'n3TooltipDocs'},
                {label: 'Popover', value: 'n3PopoverDocs'},
                {label: 'Loading', value: 'n3LoadingDocs'}]},

        'Form': {show: true,
                list: [{label: 'Input', value: 'n3InputDocs'},
                {label: 'InputNumber', value: 'n3InputNumberDocs'},
                {label: 'Textarea', value: 'n3TextareaDocs'},
                {label: 'Cascader', value: 'n3CascaderDocs'},
                {label: 'Radio', value: 'n3RadioDocs'},
                {label: 'Checkbox', value: 'n3CheckboxDocs'},
                {label: 'Select', value: 'n3SelectDocs'},
                {label: 'Slider', value: 'n3SliderDocs'},
                {label: 'Datepicker', value: 'n3DatepickerDocs'},
                {label: 'Timepicker', value: 'n3TimepickerDocs'},
                {label: 'Datetimepicker', value: 'n3DatetimepickerDocs'},
                {label: 'Switch', value: 'n3SwitchDocs'},
                {label: 'Uploader', value: 'n3UploaderDocs'},
                {label: 'Typeahead', value: 'n3TypeaheadDocs'},
                {label: 'MultipleInput', value: 'n3MultipleInputDocs'},
                {label: 'Form', value: 'n3FormDocs'}]},

        'Display': {show: true,
                list: [{label: 'Accordion', value: 'n3AccordionDocs'},
                 {label: 'Card', value: 'n3CardDocs'},
                 {label: 'Aside', value: 'n3AsideDocs'},
                 {label: 'Carousel', value: 'n3CarouselDocs'},
                 {label: 'DataTable', value: 'n3DataTableDocs'},
                 {label: 'Dropdown', value: 'n3DropdownDocs'},
                 {label: 'Rate', value: 'n3RateDocs'},
                 {label: 'Modal', value: 'n3ModalDocs'},
                 {label: 'Progressbar', value: 'n3ProgressbarDocs'},
                 {label: 'Tags', value: 'n3TagsDocs'},
                 {label: 'Timeline', value: 'n3TimelineDocs'},
                 {label: 'Tree', value: 'n3TreeDocs'},
                 {label: 'Step', value: 'n3StepDocs'}]},

        'Navigation': {show: true,
                list: [{label: 'Nav', value: 'n3NavDocs'},
                 {label: 'Breadcrumb', value: 'n3BreadcrumbDocs'},
                 {label: 'Page', value: 'n3PageDocs'},
                 {label: 'Tabs', value: 'n3TabsDocs'}]},

        'Others': {show: true,
                list: [{label: 'Animate', value: 'n3AnimateDocs'}]}}

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
        let t = list.filter((i) => {
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
    select() {
      $(window).scrollTop(0)
    },
    handleToggle (item) {
      item.show = !item.show
    },
    change (value) {
      this.component = value
      window.location.hash = value
    },
    init () {      
      var hash = window.location.hash
      hash = hash.substr(1, hash.length)
      if (hash) {
        this.component = hash
        setTimeout(() => {
          prismjs.highlightAll()
          document.querySelectorAll('table').forEach(i => {
            i.classList.add('table', 'table-bordered')
          })
        })
      }
    }
  },
  mounted () {
    this.list = this.map
    this.init()
    window.onhashchange = this.init
    setTimeout(() => {
      $(window).scrollTop(0)
      prismjs.highlightAll()
      document.querySelectorAll('table').forEach(i => {
        i.classList.add('table', 'table-bordered')
      })
    })
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
    n3RateDocs,
    n3DatetimepickerDocs,
    n3InputNumberDocs,
    n3UploaderDocs,
    n3TreeDocs,
    n3DropdownDocs,
    n3CardDocs,
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
    n3PageDocs,
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
    border: 1px solid #f9f9f9;
    padding: 5px 10px;
    margin-top: 10px;
    outline: none;
    border-radius: 20px;
  }

</style>