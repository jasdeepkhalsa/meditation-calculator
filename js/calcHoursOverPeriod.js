const Time = require('./timeEnum')

function calcHoursOverPeriod({ value, duration, years, format }) {
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

  switch ( duration ) {
    case Time.MINUTES:
      output = output * 60
      break;
    case Time.SECONDS:
      output = output * 60 * 60
      break;
    case Time.DAYS:
      output = output * 7 * 52
      break;
    case Time.WEEKS:
      output = output * 1 * 52
      break;
    case Time.MONTHS:
      output = output * 12
      break;
  }

  output = output * years

  return Math.round(output * 100) / 100
}

module.exports = calcHoursOverPeriod