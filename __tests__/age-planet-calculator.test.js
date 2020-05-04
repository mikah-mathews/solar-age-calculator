import { UserAge } from './../src/age-planet-calculator.js';
import { LifeExpetancy } from './../src/age-planet-calculator.js';


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
    let mikahAge = mikahDate.EdO(5, 7, 2000);
    let veronicaAge = veronicaDate.EdO(2, 1, 1978)
    expect(mikahAge).toEqual(20);
    expect(veronicaAge).toEqual(42);
  });
  test('Return age in Mercury Years', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let mikahAge = mikahDate.EdO(5, 7, 2000);
    let yearsOnMercury = Math.floor(mikahAge * 4.16);
    let mikahMercuryYears = (yearsOnMercury);
    expect(mikahMercuryYears).toEqual(83)
  });
  test('return age in venus years', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let mikahAge = mikahDate.EdO(5, 7, 2000);
    let yearsOnVenus = Math.floor(mikahAge * 1.63);
    expect(yearsOnVenus).toEqual(32);
  });
  test('return age in Mars years', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let mikahAge = mikahDate.EdO(5, 7, 2000);
    let yearsOnMars = Math.floor(mikahAge * 0.53);
    expect(yearsOnMars).toEqual(10);
  });
  test('return age in Jupiter years', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let mikahAge = mikahDate.EdO(5, 7, 2000);
    let yearsOnJupiter = Math.floor(mikahAge / 11.86);
    expect(yearsOnJupiter).toEqual(1);
  });
  test('womens life expectancy returning 81', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let mikahAge = mikahDate.EdO(5, 7, 2000);
    let womenExpectancy = mikahDate.WomanLifeExpetancy(mikahAge);
    console.log(womenExpectancy + " THis is women expectancy");
    expect(womenExpectancy).toEqual(81);
  });
  test('mens life expectancy returns 76', () => {
    let mikahDate = new UserAge(5, 7, 2000);
    let mikahAge = mikahDate.EdO(5, 7, 2000);
    let menExpectancy = mikahDate.ManLifeExpetancy(mikahAge);
    console.log(menExpectancy + " THis is men expectancy");
    expect(menExpectancy).toEqual(76);
  });
  // test('check if userAge is less than lifeExpectancy', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahAge = mikahDate.EdO(5, 7, 2000);
  //   expect()
  // });
  // test('if age is less than life expectancy, return remaining life', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahAge = mikahDate.EdO(5, 7, 2000);
  //   expect()
  // });
  // test('if age is more than life expectancy, return how much longer you have lived', () => {
  //   let mikahDate = new UserAge(5, 7, 2000);
  //   let mikahAge = mikahDate.EdO(5, 7, 2000);
  //   expect()
  // });
});