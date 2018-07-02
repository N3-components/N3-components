import dayjs from 'dayjs'

export default {
  dateParse(str, format) {
    if (typeof str != 'string') {
      return str
    }
    return dayjs(str,format).toString()
  }
}
