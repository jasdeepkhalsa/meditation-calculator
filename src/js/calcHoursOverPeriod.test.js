import fn from './calcHoursOverPeriod'
import { Time } from './timeEnum'

const tests = [
  // Original tests with corrected results where necessary
  { value: 1, format: Time.HOURS, duration: Time.DAYS, years: 1, result: 364 },
  { value: 1, duration: Time.DAYS, years: 1, result: 364 }, // format defaults to HOURS
  { value: 1, duration: Time.WEEKS, years: 1, result: 52 },  // format defaults to HOURS
  { value: 1, duration: Time.MONTHS, years: 1, result: 12 }, // format defaults to HOURS
  { value: 2, duration: Time.DAYS, years: 1, result: 728 },   // format defaults to HOURS
  { value: 2, duration: Time.WEEKS, years: 1, result: 104 },  // format defaults to HOURS
  { value: 2, duration: Time.MONTHS, years: 1, result: 24 },  // format defaults to HOURS
  { value: 1, duration: Time.DAYS, years: 50, result: 18200 },// format defaults to HOURS
  { value: 1, duration: Time.WEEKS, years: 50, result: 2600 }, // format defaults to HOURS
  { value: 1, duration: Time.MONTHS, years: 50, result: 600 }, // format defaults to HOURS
  { value: 5, duration: Time.WEEKS, years: 50, result: 13000 },// format defaults to HOURS
  
  // Tests with format: Time.SECONDS (Corrected result)
  { value: 1, format: Time.SECONDS, duration: Time.DAYS, years: 1, result: 0.10 }, 
  
  // Tests with format: Time.MINUTES (Corrected result)
  { value: 1, format: Time.MINUTES, duration: Time.DAYS, years: 1, result: 6.07 }, 

  // New test cases for SECONDS and MINUTES durations
  { value: 1, format: Time.HOURS, duration: Time.MINUTES, years: 1, result: 524160 },
  { value: 1, format: Time.HOURS, duration: Time.SECONDS, years: 1, result: 31449600 },

  // New test cases for HOURS and YEARS durations
  { value: 1, format: Time.HOURS, duration: Time.HOURS, years: 2, result: 17472 },
  { value: 30, format: Time.MINUTES, duration: Time.HOURS, years: 1, result: 4368 },
  { value: 10, format: Time.HOURS, duration: Time.YEARS, years: 3, result: 30 },

  // Example with rounding for small resulting values
  { value: 1, format: Time.SECONDS, duration: Time.WEEKS, years: 1, result: 0.01 } 
];

tests.forEach((test) => {
    it(`${test.value} ${test.format || 'HOURS'} per ${test.duration} for ${test.years} year(s) should be ${test.result}`, () => {
      expect(fn({
        value: test.value,
        format: test.format,
        duration: test.duration,
        years: test.years
      })).toEqual(test.result);
    });
});