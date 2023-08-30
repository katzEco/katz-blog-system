function Day(no) {
  const Day = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]

  return Day[no]
}

function Month(no) {
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  return Month[no]
}

function DateLine(date) {
  let rtn
  const DateConst = new Date(date)

  const day = Day(DateConst.getDay())
  const month = Month(DateConst.getMonth())

  rtn = `${day} ${DateConst.getDate()} ${month} ${DateConst.getFullYear()} | ${(String(DateConst.getHours()).length < 2) ? `0${String(DateConst.getHours())}` : String(DateConst.getHours())}:${(String(DateConst.getMinutes()).length < 2) ? `0${String(DateConst.getMinutes())}` : String(DateConst.getMinutes())}`

  return rtn
}

module.exports = DateLine