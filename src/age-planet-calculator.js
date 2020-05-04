import moment from 'moment';
export function UserAge(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
};

export function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

UserAge.prototype.EdO = function(month, day, year) {
  let makeBdayDate = moment(); // sets new date
  let bYear = year // gets birth year
  let bMonth = month - 1; // gets birth month
  let bDay = parseInt(day); // gets birthday
  makeBdayDate.year(bYear); // sets bday year
  makeBdayDate.month(bMonth); // sets bday month 
  makeBdayDate.day(bDay - 12);// sets bday *for some reason it adds 12 so I need to subtract it??
  let makeCurrentDate = moment(); // sets a new date
  makeCurrentDate.weekday(); // sets current day
  makeCurrentDate.month(); // sets current month
  makeCurrentDate.year(); // sets current year
  let daysOld =  makeCurrentDate.diff(makeBdayDate, 'days'); // counts how many days it has been since birth
  let yearsOld = Math.floor(daysOld/365);
  return daysOld, yearsOld;
}

export function Planets(mercury, venus, mars, jupiter) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
}

UserAge.prototype.WomanLifeExpetancy = function(age) {
  let womenExpectancy = 81;
  let currentExpectancy = womenExpectancy - age;
  console.log(currentExpectancy);
  return womenExpectancy;
}

UserAge.prototype.ManLifeExpetancy = function(age) {
  let menExpectancy = 76;
  let currentExpectancy = menExpectancy - age;
  console.log(currentExpectancy);
  return menExpectancy;
}