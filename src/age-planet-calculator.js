import moment from 'moment';
export function UserAge(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
};

UserAge.prototype.EdO = function(month, day, year) {
  let makeBdayDate = moment(new Date(year, month - 1, day));
  let tester = moment({y: year, M: month, d: day});
  moment().format("dddd, MMMM Do YYYY");
  console.log(tester);
  // makeBdayDate.year(year);
  // makeBdayDate.month(month - 1);
  // makeBdayDate.day(day);
  // let bDayYear = makeBdayDate.setFullYear(year);
  // let bDayMonth = makeBdayDate.setMonth(month - 1);
  // let bDayday = makeBdayDate.setDate(day);
  // console.log(makeBdayDate);
  // let makeCurrentDate = new Date();
  // let curYear = makeCurrentDate.getFullYear();
  // let curMonth = makeCurrentDate.getMonth();
  // let curDay = makeCurrentDate.getDate();
  // console.log(makeCurrentDate);
  // let bdayDate = moment([makeBdayDate]);
  // // console.log(bdayDate);
  // let currentDate = moment([makeCurrentDate]);
  // //console.log(currentDate);
  console.log(bdayDate.diff(currentDate, 'days'));
}

export function Planets(mercury, venus, mars, jupiter) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
}