import formatHours from './formatHours'
import calcHoursOverPeriod from './calcHoursOverPeriod'

export const main = () => {
  return {
    formatHours: formatHours,
    calcHoursOverPeriod: calcHoursOverPeriod,
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Imports
  var mainContext = meditationCalculator.main(); // Renamed 'main' to 'mainContext'
  var formatHours = mainContext.formatHours;
  var calcHoursOverPeriod = mainContext.calcHoursOverPeriod;

  // Elems
  var submit = document.querySelector('.submit');
  var value = document.querySelector('.value');
  var format = document.querySelector('.format');
  var duration = document.querySelector('.duration');
  var years = document.querySelector('.years');
  var outputFormat = document.querySelector('.outputFormat');
  var output = document.querySelector('.output');

  if (submit) { // Ensure submit button exists before attaching event
    submit.onclick = function() {
      var formatValue = format.options[format.selectedIndex].value;
      var durationValue = duration.options[duration.selectedIndex].value;
      var outputFormatValue = outputFormat.options[outputFormat.selectedIndex].value;

      var resultInHours = calcHoursOverPeriod(
        {
          value: value.value,
          duration: durationValue,
          format: formatValue,
          years: years.value,
        }
      );

      var result = formatHours({
        inputFormat: formatValue, // Preserving existing logic, though inputFormat might not be used
        value: resultInHours,
        outputFormat: outputFormatValue,
      });

      output.textContent = 'The result is: ' + result + ' ' + outputFormatValue;
    }
  } else {
    console.error("Submit button not found. Calculator functionality will not be available.");
  }
});