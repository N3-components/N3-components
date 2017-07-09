import n3Alert from './Alert/n3Alert'
import n3AlertMethod from './Alert/n3AlertMethod'
import n3Carousel from './Carousel/n3Carousel'
import n3Accordion from './Accordion/n3Accordion'
import n3Affix from './Affix/n3Affix'
import n3Aside from './Aside/n3Aside'
import n3CheckboxGroup from './Checkbox/n3CheckboxGroup'
import n3Checkbox from './Checkbox/n3Checkbox'
import n3CheckboxBtn from './Checkbox/n3CheckboxBtn'
import n3Cascader from './Cascader/n3Cascader'
import n3ToastMethod from './Toast/n3ToastMethod'
import n3Label from './Label/n3Label'
import n3Input from './Input/n3Input'
import n3InputNumber from './InputNumber/n3InputNumber'
import n3Textarea from './Textarea/n3Textarea'
import n3Datepicker from './Datepicker/n3Datepicker'
import n3Timepicker from './Timepicker/n3Timepicker'
import n3Datetimepicker from './Datetimepicker/n3Datetimepicker'
import n3Dropdown from './Dropdown/n3Dropdown'
import n3Modal from './Modal/n3Modal'
import n3ModalMethod from './Modal/n3ModalMethod'
import n3Option from './Select/n3Option'
import n3Panel from './Accordion/n3Panel'
import n3Popover from './Popover/n3Popover'
import n3PopConfirm from './Popover/n3PopConfirm'
import n3Progressbar from './Progress/n3Progressbar'
import n3Progress from './Progress/n3Progress'
import n3Radio from './Radio/n3Radio'
import n3RadioBtn from './Radio/n3RadioBtn'
import n3RadioGroup from './Radio/n3RadioGroup'
import n3Select from './Select/n3Select'
import n3Tab from './Tabs/n3Tab'
import n3Tabs from './Tabs/n3Tabs'
import n3Tooltip from './Tooltip/n3Tooltip'
import n3Button from './Button/n3Button'
import n3ButtonGroup from './Button/n3ButtonGroup'
import n3Container from './Layout/n3Container'
import n3Row from './Layout/n3Row'
import n3Nav from './Nav/n3Nav'
import n3SubNav from './Nav/n3SubNav'
import n3NavItem from './Nav/n3NavItem'
import n3NavGroup from './Nav/n3NavGroup'
import n3Column from './Layout/n3Column'
import n3Switch from './Switch/n3Switch'
import n3MultipleInput from './MultipleInput/n3MultipleInput'
import n3Page from './Page/n3Page'
import n3Step from './Step/n3Step'
import n3DataTable from './DataTable/n3DataTable'
import n3Loading from './Loading/n3Loading'
import n3Timeline from './Timeline/n3Timeline'
import n3TimelineItem from './Timeline/n3TimelineItem'
import n3Typeahead from './Typeahead/n3Typeahead'
import n3Icon from './Icon/n3Icon'
import n3Tags from './Tags/n3Tags'
import n3Breadcrumb from './Breadcrumb/n3Breadcrumb'
import n3BreadcrumbItem from './Breadcrumb/n3BreadcrumbItem'
import n3Form from './Form/n3Form'
import n3FormItem from './Form/n3FormItem'
import n3Slider from './Slider/n3Slider'
import n3Slide from './Carousel/n3Slide'
import n3Tree from './Tree/n3Tree'
import n3Card from './Card/n3Card'
import n3Rate from './Rate/n3Rate'
import n3Uploader from './Uploader/n3Uploader'
import n3CollapseTransition from './n3CollapseTransition'
import position from './position.js'

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
  n3Rate,
  n3Input,
  n3Textarea,
  n3Dropdown,
  n3Modal,
  n3Option,
  n3Nav,
  n3SubNav,
  n3NavItem,
  n3NavGroup,
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

const install = function (Vue, locale) {
  for (let i in Components) {
    Vue.component(i, Components[i])
  }

  Vue.directive('n3Position', position)
  Vue.prototype.n3Modal = n3ModalMethod
  Vue.prototype.n3Alert = n3AlertMethod
  Vue.prototype.n3Toast = n3ToastMethod
  Vue.prototype.n3Locale = locale || 'zh'
  window.n3Locale = locale || 'zh'
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Components.install = install

export default Components
