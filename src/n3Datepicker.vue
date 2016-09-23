<template>
  <div class="{{prefixCls}}-datepicker">
    <n3-input 
    :width="width"
    :name="name" 
    :rules="rules" 
    :validate="validate" 
    :has-feedback="hasFeedback"
    :placeholder="placeholder"
    :custom-validate="customValidate"
    :readonly="true"
    :disabled="disabled"
    @click="inputClick"
    :value.sync="value">
    </n3-input>
      <div class="{{prefixCls}}-datepicker-popup" v-show ="displayDayView" transition="fadeDown">
          <div class="{{prefixCls}}-datepicker-inner">
              <div class="{{prefixCls}}-datepicker-body">
                  <div class="{{prefixCls}}-datepicker-ctrl">
                      <span 
                        class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
                        @click="preNextMonthClick(0)">&lt;</span>
                      <span 
                        class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
                        @click="preNextMonthClick(1)">&gt;</span>
                      <p @click="switchMouthView">
                      {{stringifyDayHeader(currDate)}}
                      </p>
                  </div>
                  <div class="{{prefixCls}}-datepicker-weekRange">
                      <span v-for="w in weekRange">{{w}}</span>
                  </div>
                  <div class="{{prefixCls}}-datepicker-dateRange">
                      <span 
                        v-for="d in dateRange" :class="d.sclass" 
                        @click="daySelect(d.date,d.sclass)">
                        {{d.text}}
                      </span>
                  </div>
              </div>
          </div>
      </div>
      <div class="{{prefixCls}}-datepicker-popup" v-show ="displayMouthView" >
        <div class="{{prefixCls}}-datepicker-inner">
            <div class="{{prefixCls}}-datepicker-body">
                <div class="{{prefixCls}}-datepicker-ctrl">
                    <span 
                      class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
                      @click="preNextYearClick(0)">&lt;</span>
                    <span 
                      class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
                      @click="preNextYearClick(1)">&gt;</span>
                    <p @click="switchDecadeView">
                    {{stringifyYearHeader(currDate)}}
                    </p>
                </div>
                <div class="{{prefixCls}}-datepicker-mouthRange">
                	<template v-for="m in mouthNames">
	                    <span   
                          :class="monthClassObj(m)"
                          @click="mouthSelect($index)">
	                      {{m.substr(0,3)}}
	                    </span>
                    </template>
                </div>
            </div>
        </div>
      </div>
      <div class="{{prefixCls}}-datepicker-popup" v-show ="displayYearView" >
        <div class="{{prefixCls}}-datepicker-inner">
            <div class="{{prefixCls}}-datepicker-body">
                <div class="{{prefixCls}}-datepicker-ctrl">
                    <span 
                      class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
                      @click="preNextDecadeClick(0)">&lt;</span>
                    <span 
                      class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
                      @click="preNextDecadeClick(1)">&gt;</span>
                    <p>
                    {{stringifyDecadeHeader(currDate)}}
                    </p>
                </div>
                <div class="{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange">
                	<template v-for="decade in decadeRange">
                		<span 
                      :class="yearClassObj(decade)"
	                    @click.stop="yearSelect(decade.text)">
	                      {{decade.text}}
	                 	</span>
					        </template>
                </div>
            </div>
        </div>
      </div>
</div>
</template>

<script>
import EventListener from './utils/EventListener'
import n3Input from './n3Input'
import inputMixin from './inputMixin'
import type from './utils/type'

export default {
  mixins: [inputMixin],
  props: {
    value: {
      type: String,
      twoWay: true
    },
    format: {
      default: 'yyyy-MM-dd'
    },
    disabledDaysOfWeek: {
      type: Array,
      default () {
        return []
      }
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
    return {
      today: this.stringify(new Date()),
      weekRange: ['日', '一', '二', '三', '四', '五', '六'],
      dateRange: [],
      decadeRange: [],
      currDate: new Date(),
      displayDayView: false,
      displayMouthView: false,
      displayYearView: false,
      mouthNames: [ '一月', '二月', '三月',
                    '四月', '五月', '六月',
                    '七月', '八月', '九月',
                    '十月', '十一月', '十二月']
    }
  },
  watch: {
    currDate () {
      this.getDateRange()
    },
    value (val) {
      if (type.isFunction(this.onChange)) {
        this.onChange(this.value)
      }
    }
  },
  methods: {
    monthClassObj (m) {
      let {prefixCls, value, mouthNames, parse, currDate} = this
      let klass = {}

      klass[prefixCls + '-datepicker-dateRange-item-active'] =
      value && parse(value) && mouthNames[parse(value).getMonth()] === m && currDate.getFullYear() === parse(value).getFullYear()

      return klass
    },
    yearClassObj (decade) {
      let {prefixCls, value, parse} = this
      let klass = {}

      klass[prefixCls + '-datepicker-dateRange-item-active'] =
      value && parse(value) && parse(value).getFullYear() === decade.text

      return klass
    },
    close () {
      this.displayDayView = this.displayMouthView = this.displayMouthView = false
    },
    inputClick () {
      if (this.disabled) return
      if (this.displayMouthView || this.displayYearView) {
        this.displayDayView = false
      } else {
        this.displayDayView = !this.displayDayView
      }
    },
    preNextDecadeClick (flag) {
      const year = this.currDate.getFullYear()
      const mouths = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 10, mouths, date)
      } else {
        this.currDate = new Date(year + 10, mouths, date)
      }
    },
    preNextMonthClick (flag) {
      const year = this.currDate.getFullYear()
      const month = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        const preMonth = this.getYearMonth(year, month - 1)
        this.currDate = new Date(preMonth.year, preMonth.month, date)
      } else {
        const nextMonth = this.getYearMonth(year, month + 1)
        this.currDate = new Date(nextMonth.year, nextMonth.month, date)
      }
    },
    preNextYearClick (flag) {
      const year = this.currDate.getFullYear()
      const mouths = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 1, mouths, date)
      } else {
        this.currDate = new Date(year + 1, mouths, date)
      }
    },
    yearSelect (year) {
      this.displayYearView = false
      this.displayMouthView = true
      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())
    },
    daySelect (date, klass) {
      if (klass.indexOf(this.prefixCls + '-datepicker-item-disable') > -1) {
        return false
      } else {
        this.currDate = date
        this.value = this.stringify(this.currDate)
        this.displayDayView = false
      }
    },
    switchMouthView () {
      this.displayDayView = false
      this.displayMouthView = true
    },
    switchDecadeView () {
      this.displayMouthView = false
      this.displayYearView = true
    },
    mouthSelect (index) {
      this.displayMouthView = false
      this.displayDayView = true
      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())
    },
    getYearMonth (year, month) {
      if (month > 11) {
        year++
        month = 0
      } else if (month < 0) {
        year--
        month = 11
      }
      return {year: year, month: month}
    },
    stringifyDecadeHeader (date) {
      const yearStr = date.getFullYear().toString()
      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0
      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
      return firstYearOfDecade + '-' + lastYearOfDecade
    },
    stringifyDayHeader (date) {
      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear()
    },
    parseMouth (date) {
      return this.mouthNames[date.getMonth()]
    },
    stringifyYearHeader (date) {
      return date.getFullYear()
    },
    stringify (date, format = this.format) {
      if (isNaN(date.getFullYear())) return ''
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      return format
        .replace(/yyyy/g, year)
        .replace(/MMMM/g, month)
        .replace(/MMM/g, month)
        .replace(/MM/g, ('0' + month).slice(-2))
        .replace(/dd/g, ('0' + day).slice(-2))
        .replace(/yy/g, year)
        .replace(/M(?!a)/g, month)
        .replace(/d/g, day)
    },
    parse (str) {
      const date = new Date(str)
      return isNaN(date.getFullYear()) ? null : date
    },
    getDayCount (year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

      if (month === 1) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
          return 29
        }
        return 28
      }

      return dict[month]
    },
    getDateRange () {
      this.dateRange = []
      this.decadeRange = []
      const time = {
        year: this.currDate.getFullYear(),
        month: this.currDate.getMonth(),
        day: this.currDate.getDate()
      }
      const yearStr = time.year.toString()
      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1
      for (let i = 0; i < 12; i++) {
        this.decadeRange.push({
          text: firstYearOfDecade + i
        })
      }

      const currMonthFirstDay = new Date(time.year, time.month, 1)
      let firstDayWeek = currMonthFirstDay.getDay() + 1
      if (firstDayWeek === 0) {
        firstDayWeek = 7
      }
      const dayCount = this.getDayCount(time.year, time.month)
      if (firstDayWeek > 1) {
        const preMonth = this.getYearMonth(time.year, time.month - 1)
        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
        for (let i = 1; i < firstDayWeek; i++) {
          const dayText = prevMonthDayCount - firstDayWeek + i + 1
          this.dateRange.push({
            text: dayText,
            date: new Date(preMonth.year, preMonth.month, dayText),
            sclass: this.prefixCls + '-datepicker-item-gray'
          })
        }
      }

      for (let i = 1; i <= dayCount; i++) {
        const date = new Date(time.year, time.month, i)
        const week = date.getDay()
        let sclass = ''
        this.disabledDaysOfWeek.forEach((el) => {
          if (week === parseInt(el, 10)) sclass = this.prefixCls + '-datepicker-item-disable'
        })

        if (i === time.day) {
          if (this.value) {
            const valueDate = this.parse(this.value)
            if (valueDate) {
              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                sclass = this.prefixCls + '-datepicker-dateRange-item-active'
              }
            }
          }
        }
        this.dateRange.push({
          text: i,
          date: date,
          sclass: sclass
        })
      }

      if (this.dateRange.length < 42) {
        const nextMonthNeed = 42 - this.dateRange.length
        const nextMonth = this.getYearMonth(time.year, time.month + 1)

        for (let i = 1; i <= nextMonthNeed; i++) {
          this.dateRange.push({
            text: i,
            date: new Date(nextMonth.year, nextMonth.month, i),
            sclass: this.prefixCls + '-datepicker-item-gray'
          })
        }
      }
    }
  },
  components: {
    n3Input
  },
  ready () {
    this.currDate = this.parse(this.value) || this.parse(new Date())
    this._closeEvent = EventListener.listen(window, 'click', (e) => {
      if (!this.$el.contains(e.target)) this.close()
    })
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove()
  }
}
</script>