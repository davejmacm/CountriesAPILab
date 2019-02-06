const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function () {
  this.text = null;
}

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    PubSub.publish('Countries:countries-loaded', this.text);
    console.log(this.text);
  });
}

Countries.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:change', (evt)=>{
    const selectedIndex = evt.detail;
    this.publishCountryInfo(selectedIndex);
    console.log(selectedIndex);
  });

};

Countries.prototype.publishCountryInfo = function(selectedIndex){
  const selectedCountry = this.text[selectedIndex];
  PubSub.publish('Countries:country-selected', selectedCountry);
}

module.exports = Countries;
