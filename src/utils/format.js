import moment from 'moment'

export default {
  dateParse(str, format) {
    if (typeof str != 'string') {
      return str
    }
    return moment(str,format).toString()
  }
}
