import moment from 'moment';
export function UserAge(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
};

UserAge.prototype.EdO = function(month, day, year) {
  var makeBdayDate = new Date();
  makeBdayDate.setFullYear(year);
  makeBdayDate.setMonth(month);
  makeBdayDate.setDate(day);
  console.log(makeBdayDate);
  var makeCurrentDate = new Date();
  makeCurrentDate.setFullYear();
  makeCurrentDate.setMonth();
  makeCurrentDate.setDate();
  var bdayDate = moment([makeBdayDate]);
  var currentDate = moment([makeCurrentDate]);
  return bdayDate.diff(currentDate, 'days');
}

export function Planets(mercury, venus, mars, jupiter) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
}