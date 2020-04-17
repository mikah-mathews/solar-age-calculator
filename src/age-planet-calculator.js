import moment from 'moment';
export function UserAge(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
};

UserAge.prototype.EdO = function(month, day, year) {
  let makeBdayDate = moment(); // sets new date
  let bYear = year // gets birth year
  let bMonth = month - 1; // gets birth month
  let bDay = day; // gets birthday
  makeBdayDate.year(bYear); // sets bday year
  makeBdayDate.month(bMonth); // sets bday month
  makeBdayDate.day(bDay); // sets bday
  console.log(makeBdayDate.format("dddd, MMMM Do YYYY")); // console logs it all nice
  let makeCurrentDate = moment(); // sets a new date
  makeCurrentDate.weekday(); // sets current day
  makeCurrentDate.month(); // sets current month
  makeCurrentDate.year(); // sets current year
  console.log(makeCurrentDate.format("dddd, MMMM Do YYYY")); // currentDate is working
  console.log(makeCurrentDate.diff(makeBdayDate, 'days')); // counts how many days it has been since birth
}

export function Planets(mercury, venus, mars, jupiter) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
}