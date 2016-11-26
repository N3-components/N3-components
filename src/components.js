import n3Alert from './n3Alert'
import n3Carousel from './n3Carousel'
import n3Accordion from './n3Accordion'
import n3Affix from './n3Affix'
import n3Aside from './n3Aside'
import n3CheckboxGroup from './n3CheckboxGroup'
import n3Checkbox from './n3Checkbox'
import n3CheckboxBtn from './n3CheckboxBtn'
import n3Cascader from './n3Cascader'
import n3ToastMethod from './n3ToastMethod'
import n3Label from './n3Label'
import n3Input from './n3Input'
import n3InputNumber from './n3InputNumber'
import n3Textarea from './n3Textarea'
import n3Datepicker from './n3Datepicker'
import n3Timepicker from './n3Timepicker'
import n3Datetimepicker from './n3Datetimepicker'
import n3Dropdown from './n3Dropdown'
import n3Modal from './n3Modal'
import n3Option from './n3Option'
import n3Panel from './n3Panel'
import n3Popover from './n3Popover'
import n3PopConfirm from './n3PopConfirm'
import n3Progressbar from './n3Progressbar'
import n3Progress from './n3Progress'
import n3Radio from './n3Radio'
import n3RadioBtn from './n3RadioBtn'
import n3RadioGroup from './n3RadioGroup'
import n3Select from './n3Select'
import n3Tab from './n3Tab'
import n3Tabs from './n3Tabs'
import n3Tooltip from './n3Tooltip'
import n3Button from './n3Button'
import n3ButtonGroup from './n3ButtonGroup'
import n3Container from './n3Container'
import n3Row from './n3Row'
import n3Nav from './n3Nav'
import n3SubNav from './n3SubNav'
import n3NavItem from './n3NavItem'
import n3Column from './n3Column'
import n3Switch from './n3Switch'
import n3MultipleInput from './n3MultipleInput'
import n3Page from './n3Page'
import n3Step from './n3Step'
import n3DataTable from './n3DataTable'
import n3Loading from './n3Loading'
import n3Timeline from './n3Timeline'
import n3TimelineItem from './n3TimelineItem'
import n3Typeahead from './n3Typeahead'
import n3Icon from './n3Icon'
import n3Tags from './n3Tags'
import n3Breadcrumb from './n3Breadcrumb'
import n3BreadcrumbItem from './n3BreadcrumbItem'
import n3Form from './n3Form'
import n3FormItem from './n3FormItem'
import n3Slider from './n3Slider'
import n3Slide from './n3Slide'
import n3Tree from './n3Tree'
import n3Card from './n3Card'
import n3Uploader from './n3Uploader'
import n3CollapseTransition from './n3CollapseTransition'

const Components = {
  n3FormItem,
  n3Form,
  n3Alert,
  n3Carousel,
  n3Accordion,
  n3Container,
  n3Loading,
  n3Slide,
  n3Row,
  n3Column,
  n3Switch,
  n3Button,
  n3ButtonGroup,
  n3Affix,
  n3Aside,
  n3Checkbox,
  n3CheckboxBtn,
  n3CheckboxGroup,
  n3Datepicker,
  n3Timepicker,
  n3Datetimepicker,
  n3Uploader,
  n3Cascader,
  n3Label,
  n3Input,
  n3Textarea,
  n3Dropdown,
  n3Modal,
  n3Option,
  n3Nav,
  n3SubNav,
  n3NavItem,
  n3Panel,
  n3InputNumber,
  n3Popover,
  n3PopConfirm,
  n3Progressbar,
  n3Progress,
  n3Card,
  n3RadioGroup,
  n3Radio,
  n3RadioBtn,
  n3Select,
  n3Icon,
  n3Tree,
  n3Slider,
  n3Tab,
  n3TimelineItem,
  n3Timeline,
  n3MultipleInput,
  n3Tabs,
  n3Tooltip,
  n3Typeahead,
  n3Page,
  n3Step,
  n3Tags,
  n3DataTable,
  n3Breadcrumb,
  n3BreadcrumbItem,
  n3CollapseTransition
}

const install = function (Vue) {
  for (let i in Components) {
    Vue.component(i, Components[i])
  }

  Vue.mixin({
    methods: {
      n3Toast: n3ToastMethod
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Components.install = install

module.exports = Components
