import { UserAge } from './../src/age-planet-calculator.js';
import { Planets } from './../src/age-planet-calculator.js';

describe ('Calculator', function() {

  test('Should return user age', () => {
    var mikahAge = new UserAge(5, 7, 2000);
    expect(mikahAge.month).toEqual(2000);
    expect(mikahAge.day).toEqual(5);
    expect(mikahAge.year).toEqual(7);
    // this should be failing
  });


});