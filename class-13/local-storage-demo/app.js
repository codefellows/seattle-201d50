'use strict';

var allCats = [];

function Cat(name, age, grumpy, cuddly){
  this.name = name;
  this.age = age;
  this.grumpy = grumpy;
  this.cuddly = cuddly;
  this.fat = true;
  this.fluffy = true;
  this.hungry = true;
  allCats.push(this);
}

new Cat('Adonis', 10, 'yes', false);
new Cat('Larry', 12, 'sometimes', true);
new Cat('Rogue', 5, 'never', true);

///////make allCats JSON/////////
var jsonCats = JSON.stringify(allCats);

//////store in Local Storage//////////
localStorage.setItem('cats', jsonCats);

//////get out of local storage////////
var storageCats = localStorage.getItem('cats');

/////turn it back into my data/parse it!////
var parsedCats = JSON.parse(storageCats);




