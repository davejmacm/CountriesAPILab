const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getData();

  const selectElement = document.querySelector('#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

});
