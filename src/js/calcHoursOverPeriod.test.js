import fn from './calcHoursOverPeriod';
import { Time } from './timeEnum';

const tests = [
  // Existing tests with numeric inputs (ensure value and years are strings to simulate form input)
  { value: '1', format: Time.HOURS, duration: Time.DAYS, years: '1', result: 365.25 },
  { value: '1', duration: Time.DAYS, years: '1', result: 365.25, format: Time.HOURS },
  { value: '1', duration: Time.WEEKS, years: '1', result: 52, format: Time.HOURS },
  { value: '1', duration: Time.MONTHS, years: '1', result: 12, format: Time.HOURS },
  { value: '2', duration: Time.DAYS, years: '1', result: 730.5, format: Time.HOURS },
  { value: '1', duration: Time.DAYS, years: '50', result: 18262.5, format: Time.HOURS },
  { value: '3600', format: Time.SECONDS, duration: Time.DAYS, years: '1', result: 365.25 },
  { value: '60', format: Time.MINUTES, duration: Time.DAYS, years: '1', result: 365.25 },

  // Test cases for non-numeric 'value'
  { value: '', format: Time.HOURS, duration: Time.DAYS, years: '1', result: 0 },
  { value: 'abc', format: Time.HOURS, duration: Time.DAYS, years: '1', result: 0 },
  { value: null, format: Time.MINUTES, duration: Time.WEEKS, years: '1', result: 0 },
  { value: undefined, format: Time.SECONDS, duration: Time.MONTHS, years: '2', result: 0 },

  // Test cases for non-numeric 'years'
  { value: '1', format: Time.HOURS, duration: Time.DAYS, years: '', result: 0 },
  { value: '1', format: Time.HOURS, duration: Time.DAYS, years: 'xyz', result: 0 },
  { value: '2', format: Time.MINUTES, duration: Time.WEEKS, years: null, result: 0 },
  { value: '5', format: Time.SECONDS, duration: Time.MONTHS, years: undefined, result: 0 },

  // Test cases for non-numeric 'value' AND 'years'
  { value: '', format: Time.HOURS, duration: Time.DAYS, years: '', result: 0 },
  { value: 'abc', format: Time.HOURS, duration: Time.DAYS, years: 'xyz', result: 0 },
  { value: null, format: Time.MINUTES, duration: Time.WEEKS, years: null, result: 0 },

  // Test cases with zero values for numeric inputs
  { value: '0', format: Time.HOURS, duration: Time.DAYS, years: '1', result: 0 },
  { value: '1', format: Time.HOURS, duration: Time.DAYS, years: '0', result: 0 },
  { value: '0', format: Time.HOURS, duration: Time.DAYS, years: '0', result: 0 },
  
  // Test cases for unexpected 'duration' (should result in 0 as per current default in switch)
  { value: '1', format: Time.HOURS, duration: Time.SECONDS, years: '1', result: 0 },
  { value: '1', format: Time.HOURS, duration: Time.MINUTES, years: '1', result: 0 },
  { value: '1', format: Time.HOURS, duration: Time.HOURS, years: '1', result: 0 },
  { value: '1', format: Time.HOURS, duration: "invalid_duration", years: '1', result: 0 },

  // Test cases for default 'format' (should be Time.HOURS)
  { value: '1', duration: Time.DAYS, years: '1', result: 365.25 }, // No format, defaults to HOURS
];

tests.forEach((test) => {
  const displayFormat = test.format || Time.HOURS; // Default to HOURS for test name if not specified
  const testName = `calculates correctly for value='${test.value}', format='${displayFormat}', duration='${test.duration}', years='${test.years}'`;
  it(testName, () => {
    expect(fn({
      value: test.value,
      duration: test.duration,
      years: test.years,
      format: test.format,
    })).toEqual(test.result);
  });
});