import fn from './calcHoursOverPeriod'
import { Time } from './timeEnum'

const tests = [
  { value: 1, format: Time.HOURS, duration: Time.DAYS, years: 1, result: 364 },
  { value: 1, duration: Time.DAYS, years: 1, result: 364 },
  { value: 1, duration: Time.WEEKS, years: 1, result: 52 },
  { value: 1, duration: Time.MONTHS, years: 1, result: 12 },
  { value: 2, duration: Time.DAYS, years: 1, result: 728 },
  { value: 2, duration: Time.WEEKS, years: 1, result: 104 },
  { value: 2, duration: Time.MONTHS, years: 1, result: 24 },
  { value: 1, duration: Time.DAYS, years: 50, result: 18200 },
  { value: 1, duration: Time.WEEKS, years: 50, result: 2600 },
  { value: 1, duration: Time.MONTHS, years: 50, result: 600 },
  { value: 5, duration: Time.WEEKS, years: 50, result: 13000 },
  { value: 1, duration: Time.DAYS, years: 50, result: 18200 },
  { value: 1, format: Time.SECONDS, duration: Time.DAYS, years: 1, result: 364 },
  { value: 1, format: Time.MINUTES, duration: Time.DAYS, years: 1, result: 364 },
];

tests.forEach((test) => {
    it(`${test.value} ${test.format} per ${test.duration} for ${test.years} year(s)`, () => {
      expect(fn({
        value: test.value,
        time: test.time,
        duration: test.duration,
        years: test.years
      })).toEqual(test.result);
    });
});