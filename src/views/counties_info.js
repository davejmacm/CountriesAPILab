const PubSub = require('../helpers/pub_sub.js');


const CountriesInfo = function (container) {
  this.container = container;
};

CountriesInfo.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (evt) =>{
    const country = evt.detail;
    this.render(country);
  });
};

CountriesInfo.prototype.render = function(country) {
  console.log(country);
  const newCountryInfo = document.createElement('div');
  newCountryInfo.classList.add('country-info');
  const name = document.createElement('h3');
  name.textContent = `Name: ${country.name}`;
  const region = document.createElement('p');
  region.textContent = `Region: ${country.region}`;
  const image = document.createElement('img');
  image.classList.add('flag-image');
  image.src = country.flag;
}
