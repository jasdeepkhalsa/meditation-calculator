import { Time } from './timeEnum';

export default function calcHoursOverPeriod({ value, duration, years, format }) {
  let numericValue = parseFloat(value);
  let numericYears = parseFloat(years);

  if (isNaN(numericValue)) {
    numericValue = 0;
  }
  if (isNaN(numericYears)) {
    numericYears = 0;
  }

  let outputInHours = 0; // Renamed for clarity

  switch (format) {
    case Time.MINUTES:
      outputInHours = numericValue / 60;
      break;
    case Time.SECONDS:
      outputInHours = numericValue / 3600; // Corrected from value / 60 / 60 for clarity
      break;
    case Time.HOURS:
    default:
      outputInHours = numericValue;
      break;
  }

  let totalHours = 0;
  switch (duration) {
    case Time.DAYS:
      totalHours = outputInHours * 365.25;
      break;
    case Time.WEEKS:
      totalHours = outputInHours * 52;
      break;
    case Time.MONTHS:
      totalHours = outputInHours * 12;
      break;
    // Assuming duration will primarily be DAYS, WEEKS, MONTHS as per typical use case.
    // Other Time enum values like SECONDS, MINUTES, HOURS if passed as 'duration'
    // would result in totalHours = 0 based on the default, which seems reasonable
    // unless specific logic for "X per minute over Y years" is required.
    default:
        totalHours = 0; 
        break;
  }

  let finalResult = totalHours * numericYears;

  if (isNaN(finalResult)) {
    finalResult = 0;
  }

  return Math.round(finalResult * 100) / 100;
}