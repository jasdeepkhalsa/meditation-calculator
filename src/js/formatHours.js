import { Time } from './timeEnum';

export default function formatHours({ value, inputFormat = Time.HOURS, outputFormat }) {
  let numericValue = parseFloat(value); 
  if (isNaN(numericValue)) {
    // If input value is not a number (e.g. empty string or non-numeric), treat as 0.
    numericValue = 0; 
  }

  let valueInHours = 0;

  // 1. Normalize input 'value' to hours
  switch (inputFormat) {
    case Time.SECONDS:
      valueInHours = numericValue / 3600;
      break;
    case Time.MINUTES:
      valueInHours = numericValue / 60;
      break;
    case Time.HOURS:
    // Default case also handles if inputFormat is undefined or an unexpected value
    default: 
      valueInHours = numericValue;
      break;
  }

  let finalOutput = 0;

  // 2. Convert from hours to the desired outputFormat
  switch (outputFormat) {
    case Time.YEARS:
    // Default case for outputFormat is set to Time.YEARS
    default: 
      finalOutput = (valueInHours / 24) / 365.25;
      break;
    case Time.MONTHS:
      finalOutput = (valueInHours / 24) / (365.25 / 12);
      break;
    case Time.WEEKS:
      finalOutput = valueInHours / 24 / 7;
      break;
    case Time.DAYS:
      finalOutput = valueInHours / 24;
      break;
    case Time.MINUTES:
      finalOutput = valueInHours * 60;
      break;
    case Time.HOURS:
      finalOutput = valueInHours;
      break;
    case Time.SECONDS:
      finalOutput = valueInHours * 60 * 60;
      break;
  }
  
  // Ensure that if any calculation resulted in NaN, it's converted to 0 before rounding.
  if (isNaN(finalOutput)) {
      finalOutput = 0;
  }

  return Math.round(finalOutput * 100) / 100;
}