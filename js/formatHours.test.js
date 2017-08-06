const fn = require('./formatHours')
const Time = require('./timeEnum')

const tests = [
  { value: 2, format: Time.SECONDS, result: 7200 },
  { value: 2, format: Time.MINUTES, result: 120 },
  { value: 1, format: Time.SECONDS, result: 3600 },
  { value: 1, format: Time.MINUTES, result: 60 },
  { value: 6, format: Time.DAYS, result: 0.25 },
  { value: 168, format: Time.WEEKS, result: 1 },
  { value: 728, format: Time.MONTHS, result: 1 },
  { value: 8736, format: Time.YEARS, result: 1 },
  { value: 13000, format: Time.SECONDS, result: 46800000 },
  { value: 13000, format: Time.MINUTES, result: 780000 },
  { value: 13000, format: Time.DAYS, result: 541.67 },
  { value: 13000, format: Time.WEEKS, result: 77.38 },
  { value: 13000, format: Time.MONTHS, result: 17.86 },
  { value: 13000, format: Time.YEARS, result: 1.49 },
  { value: 18200, format: Time.YEARS, result: 2.08 },
  { value: 303.3333333333, format: Time.DAYS, result: 12.64 },
]

tests.forEach((test) => {
    it(`${test.value} hour(s) in ${test.format}`, () => {
      expect(fn({
        value: test.value,
        outputFormat: test.format,
      })).toEqual(test.result);
    });
});