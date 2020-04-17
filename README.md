# _Find your age in other planetary years!_

#### _Practice using Jest to test code and follow Behavior Driven Development protocol_

#### By _**Mikah Mathews - April 17, 2020**_

## Description

_When completed, user should be able to enter in age, select which planet they want their age in years converted to, as well as answer a few questions to determine their average life expectancy. It will give the user their age in their chosen planetary years, and approximately how many years left they have left to live or how many years they have lived past their life expectancy._

## Setup/Installation Requirements

* Clone this repository in terminal.
* Type $ npm i
* Type $ npm run start

## Specs
Spec: get user birthdate
* Input: When were you born?
  > Output: 05/07/200
Spec: calculate userAge in days
* Input: 05/07/2000
  > Output: 7,285 days
Spec: returns userAge in Mercury Years (equivilent to 0.24 Earth years or 88 Earth Days)
* Input: 7285
  > Output: 7285(earthdays) / 88(1 mercury year in earth days) = 82.7 (years old in Mercury Years)
Spec: returns userAge in Venus Years (equivilent to 0.62 Earth years or 225 Earth Days)
* Input: 7285
  > Output: 7285(earthdays) / 225(1 venus year in earth days) = 32.4 (years old in Venus Years)
Spec: returns userAge in Mars Years (equivilent to 1.88 Earth years or 687 Earth Days)
* Input: 7285
  > Output: 7285(earthdays) / 687(1 Mars year in earth days) = 10.6 (years old in Mars Years)
Spec: returns userAge in Jupiter Years (equivilent to 11.86 Earth years or 4,307 Earth Days)
* Input: 7285
  > Output: 7285(earthdays) / 4,307(1 Jupiter year in earth days) = 1.7 (years old in Jupiter Years)
Spec: calculate userLifeExpectancy by sex
* If Input: Male
  > Output: userLifeExpectancy = 76 earth years or 27,740 earth days
* If Input: Female
  > Output: userLifeExpectancy = 81 earth years or 29,565 earth days
Spec: calculate how many Planetary Years userLife expectancy is
* Input: (27,740(male life expectancy) / 4,307(Jupiter year))
  > Output: 6.4 Jupiter Years
Spec: if userAge < userLifeExpectancy, return how many years they have left
* Input: userAge = 1.7 Jupiter Years && userLifeExpectancy = 6.4 Jupiter Years
  > Output: 6.4 - 1.7 = 4.7
Spec: if userAge > userLifeExpectancy, return how many years they have lived past the average life expectancy
* Input: userAge = 7 Jupiter Years && userLifeExpectancy = 6.4 Jupiter Years
  > Output: 7 - 6.4 = 0.6

## Known Bugs

The exact number of days old you are will be off a bit due to the logic not dealing with leap years.

## Support and contact details

If you have any suggestions or questions please email me at mikah@outofband.org 

## Technologies Used

- Git and GitHub
- JavaScript
- Bootstrap
- jQuery
- Webpack
- Jest

### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Mikah Mathews_**
