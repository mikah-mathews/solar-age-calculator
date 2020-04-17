import { UserAge } from './../src/age-planet-calculator.js';
import { Planets } from './../src/age-planet-calculator.js';

describe ('Calculator', function() {

  test('Should return user age', () => {
    var mikahAge = new UserAge(5, 7, 2000);
    expect(mikahAge.month).toEqual(5);
    expect(mikahAge.day).toEqual(7);
    expect(mikahAge.year).toEqual(2000);
  });
  test('Get how many Earth Days Old the User is', () => {
    var mikahDate = new UserAge(5, 7, 2000);
    var mikahDaysOld = mikahDate.EdO();
    expect(mikahDaysOld).toEqual(0);
    // expect wrong answer
  });

});