// import moment here; use this package in each function
const moment = require('moment'); 

const today = () => {
  // write code for dates.today
  const now = moment().format('dddd');
  return now;

}

const calendar = () => {
  // write code for dates.calendar
  const date = moment().format('MMM mm, yyyy');
  return date;

}

const currentTime = () => {
  // write code for dates.currentTime
  const time = moment().format('hh:mm:ss A');
  return time;

}

module.exports = {
  today,
  calendar,
  currentTime
}