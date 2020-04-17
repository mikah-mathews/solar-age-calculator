import { UserAge } from './../src/age-planet-calculator.js';
import { roundToTwo } from './../src/age-planet-calculator.js';
import { Planets } from './../src/age-planet-calculator.js';

describe ('Calculator', function() {

  test('Should return user age', () => {
    let mikahAge = new UserAge(5, 7, 2000);
    expect(mikahAge.month).toEqual(5);
    expect(mikahAge.day).toEqual(7);
    expect(mikahAge.year).toEqual(2000);
  });
  test('Get how many Earth Days Old the User is', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let veronicaDate = new UserAge(2, 1, 1978);
    let mikahDaysOld = mikahDate.EdO(5, 7, 2000);
    let veronicaDaysOld = veronicaDate.EdO(2, 1, 1978)
    expect(mikahDaysOld).toEqual(7283);
    expect(veronicaDaysOld).toEqual(15416);
  });
  test('Return age in Mercury Years', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let mikahDaysOld = mikahDate.EdO(5, 7, 2000);
    console.log(mikahDaysOld);
    let yearsOnMercury = (mikahDaysOld / 88);
    let mikahMercuryYears = roundToTwo(yearsOnMercury);
    expect(mikahMercuryYears).toEqual(82.76)
  });
  // test('return age in venus years', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
  // test('return age in Mars years', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
  // test('return age in Jupiter years', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
  // test('womens life expectancy returning 81', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
  // test('mens life expectancy returns 76', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
  // test('check if userAge is less than lifeExpectancy', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
  // test('if age is less than life expectancy, return remaining life', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
  // test('if age is more than life expectancy, return how much longer you have lived', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahDaysOld = mikahDate.EdO();
  //   expect()
  // });
});