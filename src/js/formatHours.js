import { Time } from './timeEnum'

export default function formatHours({ inputFormat, value, outputFormat }) {
  let output = 0;

  switch ( inputFormat ) {
    case Time.MINUTES:
      output = value * 60
      break;
    case Time.SECONDS:
      output = value * 60 * 60
      break;
    default:
      output = value
      break;
  }

  switch ( outputFormat ) {
    case Time.YEARS:
    default:
      output = ((value / 24 / 7) / 52)
      break;
    case Time.MONTHS:
      output = ((value / 24 / 7) / 52) * 12
      break;
    case Time.WEEKS:
      output = value / 24 / 7
      break;
    case Time.DAYS:
      output = value / 24
      break;
    case Time.MINUTES:
      output = value * 60
      break;
    case Time.SECONDS:
      output = value * 60 * 60
      break;
  }

  return Math.round(output * 100) / 100
}