import { Time } from './timeEnum'

export default function calcHoursOverPeriod({ value, duration, years, format }) {
  let output = 0;

  switch ( format ) {
    case Time.MINUTES:
      output = value / 60
      break;
    case Time.SECONDS:
      output = value / 60 / 60
      break;
    default:
      output = value
      break;
  }

  let periodMultiplier;

  switch ( duration ) {
    case Time.SECONDS:
      periodMultiplier = 364 * 24 * 60 * 60;
      break;
    case Time.MINUTES:
      periodMultiplier = 364 * 24 * 60;
      break;
    case Time.HOURS:
      // Number of hours in a 364-day year
      periodMultiplier = 364 * 24;
      break;
    case Time.DAYS:
      periodMultiplier = 364;
      break;
    case Time.WEEKS:
      periodMultiplier = 52;
      break;
    case Time.MONTHS:
      periodMultiplier = 12;
      break;
    case Time.YEARS:
      // The value is per year
      periodMultiplier = 1;
      break;
    default:
      periodMultiplier = 0;
      break;
  }
  output = output * periodMultiplier;

  output = output * years

  return Math.round(output * 100) / 100
}