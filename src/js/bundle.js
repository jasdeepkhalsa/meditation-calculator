(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.meditationCalculator = {})));
}(this, (function (exports) { 'use strict';

var Time = {
  SECONDS: 'seconds',
  MINUTES: 'minutes',
  HOURS: 'hours',
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTHS: 'months',
  YEARS: 'years'
};

function formatHours(_ref) {
  var inputFormat = _ref.inputFormat,
      value = _ref.value,
      outputFormat = _ref.outputFormat;

  var output = 0;

  switch (inputFormat) {
    case Time.MINUTES:
      output = value * 60;
      break;
    case Time.SECONDS:
      output = value * 60 * 60;
      break;
    default:
      output = value;
      break;
  }

  switch (outputFormat) {
    case Time.YEARS:
    default:
      output = value / 24 / 7 / 52;
      break;
    case Time.MONTHS:
      output = value / 24 / 7 / 52 * 12;
      break;
    case Time.WEEKS:
      output = value / 24 / 7;
      break;
    case Time.DAYS:
      output = value / 24;
      break;
    case Time.MINUTES:
      output = value * 60;
      break;
    case Time.HOURS:
      output = value;
      break;
    case Time.SECONDS:
      output = value * 60 * 60;
      break;
  }

  return Math.round(output * 100) / 100;
}

function calcHoursOverPeriod(_ref) {
  var value = _ref.value,
      duration = _ref.duration,
      years = _ref.years,
      format = _ref.format;

  var output = 0;

  switch (format) {
    case Time.MINUTES:
      output = value / 60;
      break;
    case Time.SECONDS:
      output = value / 60 / 60;
      break;
    default:
      output = value;
      break;
  }

  switch (duration) {
    case Time.MINUTES:
      output = output * 60;
      break;
    case Time.SECONDS:
      output = output * 60 * 60;
      break;
    case Time.DAYS:
      output = output * 7 * 52;
      break;
    case Time.WEEKS:
      output = output * 1 * 52;
      break;
    case Time.MONTHS:
      output = output * 12;
      break;
  }

  output = output * years;

  return Math.round(output * 100) / 100;
}

var main = function main() {
  return {
    formatHours: formatHours,
    calcHoursOverPeriod: calcHoursOverPeriod
  };
};

exports.main = main;

Object.defineProperty(exports, '__esModule', { value: true });

})));
