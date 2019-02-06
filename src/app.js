const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountriesInfo = require('./views/countries_info.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getData();
  countries.bindEvents()
;
  const selectElement = document.querySelector('#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const infoDiv = document.querySelector('#country')
  const countriesInfo = new CountriesInfo(infoDiv);
  countriesInfo.bindEvents();

});
