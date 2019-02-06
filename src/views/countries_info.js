const PubSub = require('../helpers/pub_sub.js');


const CountriesInfo = function (container) {
  this.container = container;
};

CountriesInfo.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:country-selected', (evt) =>{
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
  const languageList = document.createElement('ul');
  country.languages.forEach(function(language){
    const languageElement = document.createElement('li')
    languageElement.textContent = language.name;
    languageList.appendChild(languageElement);
  });



  this.container.innerHTML = '';

  newCountryInfo.appendChild(name);
  newCountryInfo.appendChild(region);
  newCountryInfo.appendChild(image);
  newCountryInfo.appendChild(languageList);

  this.container.appendChild(newCountryInfo);
}



module.exports = CountriesInfo;
