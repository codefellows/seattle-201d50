'use strict';

// need an array of hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var ulFirstPike = document.getElementById('first-pike');
var ulSeaTac = document.getElementById('seaTac');
var ulSeattleCenter = document.getElementById('seattle-center');
var ulCapHill = document.getElementById('cap-hill');
var ulAlki = document.getElementById('alki');

var firstPike = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  finalArray: [],
  totalCookiesForTheDay: 0,

  generateCustomersEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersPerHour);
    }
  },

  generateCookiesEachHour: function(){
    this.generateCustomersEachHour();

    for(var i = 0; i < hours.length; i++){
      var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);

      this.cookiesEachHour.push(cookiesForOneHour);

      this.totalCookiesForTheDay += cookiesForOneHour;
    }
  },

  generateFinalArray: function(){
    this.generateCookiesEachHour();

    for(var i = 0; i < hours.length; i++){
      this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
    }

    this.finalArray.push(`Total: ${this.totalCookiesForTheDay} cookies`);
  },

  render: function(){

    this.generateFinalArray();

    for(var i = 0; i <= hours.length; i++){
      // 1. create an element
      var liEl = document.createElement('li');
      // 2. add content
      liEl.textContent = this.finalArray[i];
      // 3. append to the DOM
      ulFirstPike.appendChild(liEl);
    }
  }
}

var seaTac = {
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  finalArray: [],
  totalCookiesForTheDay: 0,

  generateCustomersEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersPerHour);
    }
  },

  generateCookiesEachHour: function(){
    this.generateCustomersEachHour();

    for(var i = 0; i < hours.length; i++){
      var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);

      this.cookiesEachHour.push(cookiesForOneHour);

      this.totalCookiesForTheDay += cookiesForOneHour;
    }
  },

  generateFinalArray: function(){
    this.generateCookiesEachHour();

    for(var i = 0; i < hours.length; i++){
      this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
    }

    this.finalArray.push(`Total: ${this.totalCookiesForTheDay} cookies`);
  },

  render: function(){

    this.generateFinalArray();

    for(var i = 0; i <= hours.length; i++){
      // 1. create an element
      var liEl = document.createElement('li');
      // 2. add content
      liEl.textContent = this.finalArray[i];
      // 3. append to the DOM
      ulSeaTac.appendChild(liEl);
    }
  }
}

var seattleCenter = {
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  finalArray: [],
  totalCookiesForTheDay: 0,

  generateCustomersEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersPerHour);
    }
  },

  generateCookiesEachHour: function(){
    this.generateCustomersEachHour();

    for(var i = 0; i < hours.length; i++){
      var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);

      this.cookiesEachHour.push(cookiesForOneHour);

      this.totalCookiesForTheDay += cookiesForOneHour;
    }
  },

  generateFinalArray: function(){
    this.generateCookiesEachHour();

    for(var i = 0; i < hours.length; i++){
      this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
    }

    this.finalArray.push(`Total: ${this.totalCookiesForTheDay} cookies`);
  },

  render: function(){

    this.generateFinalArray();

    for(var i = 0; i <= hours.length; i++){
      // 1. create an element
      var liEl = document.createElement('li');
      // 2. add content
      liEl.textContent = this.finalArray[i];
      // 3. append to the DOM
      ulSeattleCenter.appendChild(liEl);
    }
  }
}

firstPike.render();
seaTac.render();
seattleCenter.render()

// helper function
// got this function from MDN - math.random() doc
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}



// object literals for each store
  // min custormers per hour
  // max customers per hour
  // average cookies sold per customer
  // for each hour:
      // need to make an array of customers each hour
        // need a random number between min and max
      // need to make an array of cookies sold each hour
        // multiply customers each hour by average cookie sales
      // render this to the DOM
  // find the Total 
  // render Total to the DOM