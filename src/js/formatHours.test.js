import fn from './formatHours';
import { Time } from './timeEnum';

const tests = [
  // Test cases with inputFormat = Time.HOURS (or default)
  { value: '1', inputFormat: Time.HOURS, outputFormat: Time.HOURS, result: 1 },
  { value: '2', inputFormat: Time.HOURS, outputFormat: Time.SECONDS, result: 7200 },
  { value: '1', outputFormat: Time.MINUTES, result: 60 }, // inputFormat defaults to Time.HOURS
  { value: '6', outputFormat: Time.DAYS, result: 0.25 },
  { value: '168', outputFormat: Time.WEEKS, result: 1 },
  { value: '730.5', outputFormat: Time.MONTHS, result: 1 }, // 730.5 hours = 1 month (approx, using 365.25/12 days)
  { value: '8766', outputFormat: Time.YEARS, result: 1 },   // 8766 hours = 1 year (using 365.25 days)

  // Test cases with inputFormat = Time.MINUTES
  { value: '60', inputFormat: Time.MINUTES, outputFormat: Time.HOURS, result: 1 },
  { value: '120', inputFormat: Time.MINUTES, outputFormat: Time.SECONDS, result: 7200 },
  { value: '1440', inputFormat: Time.MINUTES, outputFormat: Time.DAYS, result: 1 }, // 1440 minutes = 1 day
  { value: '1', inputFormat: Time.MINUTES, outputFormat: Time.SECONDS, result: 60 },


  // Test cases with inputFormat = Time.SECONDS
  { value: '3600', inputFormat: Time.SECONDS, outputFormat: Time.HOURS, result: 1 },
  { value: '7200', inputFormat: Time.SECONDS, outputFormat: Time.MINUTES, result: 120 },
  { value: '86400', inputFormat: Time.SECONDS, outputFormat: Time.DAYS, result: 1 }, // 86400 seconds = 1 day

  // Test cases with various combinations and larger values
  { value: '13000', inputFormat: Time.HOURS, outputFormat: Time.SECONDS, result: 46800000 },
  { value: '780000', inputFormat: Time.MINUTES, outputFormat: Time.HOURS, result: 13000 },
  { value: '46800000', inputFormat: Time.SECONDS, outputFormat: Time.HOURS, result: 13000 },
  { value: '13000', inputFormat: Time.HOURS, outputFormat: Time.DAYS, result: 541.67 },
  { value: '13000', inputFormat: Time.HOURS, outputFormat: Time.WEEKS, result: 77.38 },
  { value: '13000', inputFormat: Time.HOURS, outputFormat: Time.MONTHS, result: 17.80 },
  { value: '13000', inputFormat: Time.HOURS, outputFormat: Time.YEARS, result: 1.48 },

  // Test cases for non-numeric input values
  { value: '', inputFormat: Time.HOURS, outputFormat: Time.HOURS, result: 0 },
  { value: 'abc', inputFormat: Time.MINUTES, outputFormat: Time.SECONDS, result: 0 },
  { value: null, inputFormat: Time.SECONDS, outputFormat: Time.DAYS, result: 0 },
  { value: undefined, outputFormat: Time.YEARS, result: 0 },

  // Test default outputFormat (should be Time.YEARS)
  { value: '8766', inputFormat: Time.HOURS, result: 1 }, // No outputFormat, defaults to YEARS
  { value: '525960', inputFormat: Time.MINUTES, result: 1 }, // 525960 minutes = 1 year

  // Test default inputFormat (should be Time.HOURS)
  { value: '24', outputFormat: Time.DAYS, result: 1 }, // No inputFormat, defaults to HOURS

  // Zero value input
  { value: '0', inputFormat: Time.HOURS, outputFormat: Time.SECONDS, result: 0 },
  { value: '0', inputFormat: Time.MINUTES, outputFormat: Time.HOURS, result: 0 },
  { value: '0', inputFormat: Time.SECONDS, outputFormat: Time.DAYS, result: 0 },
];

tests.forEach((test) => {
  const testName = `correctly converts ${test.value} from ${test.inputFormat || Time.HOURS} to ${test.outputFormat || Time.YEARS}`;
  it(testName, () => {
    expect(fn({
      value: test.value,
      inputFormat: test.inputFormat,
      outputFormat: test.outputFormat
    })).toEqual(test.result);
  });
});