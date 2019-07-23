'use strict';

var imageOneEl = document.getElementById('cat-one');
var imageTwoEl = document.getElementById('cat-two');
var catContainerEl = document.getElementById('cat-container');

// imageOneEl.src = 'img/boxCat.jpg';
// imageOneEl.alt = 'Box Cat';
// imageOneEl.title = 'Box Cat';

// imageTwoEl.src = 'img/chargingCat.jpg';
// imageTwoEl.alt = 'Charging Cat';
// imageTwoEl.title = 'Charging Cat';

var recentRandomNumbers = [];
var allCats = [];

function Cat(name){
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allCats.push(this);
}

new Cat('boxCat');
new Cat('chargingCat');
new Cat('cuddleCats');
new Cat('multiTaskingCat');
new Cat('outsideCat');
new Cat('sleepyCat');
new Cat('tomatoCat');
new Cat('yogaCat');

function render(){
  var randomIndex = getUniqueIndex();
  allCats[randomIndex].views++;
  // I want to display allCats[randomIndex];
  imageOneEl.src = allCats[randomIndex].filepath;
  imageOneEl.alt = allCats[randomIndex].name;
  imageOneEl.title = allCats[randomIndex].name;

  var randomIndex = getUniqueIndex();
  allCats[randomIndex].views++;
  // I want to display allCats[randomIndex];
  imageTwoEl.src = allCats[randomIndex].filepath;
  imageTwoEl.alt = allCats[randomIndex].name;
  imageTwoEl.title = allCats[randomIndex].name;


}
// helper function
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getUniqueIndex(){

  var randomIndex = randomNumber(0, allCats.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = randomNumber(0, allCats.length-1);
  }

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  recentRandomNumbers.push(randomIndex);

  console.log('random number array', recentRandomNumbers);
  return randomIndex;
}

function handleClick(){
  var chosenImg = event.target.title;

  for(var i = 0; i < allCats.length; i++){
    if(allCats[i].name === chosenImg){
      allCats[i].votes++;
    }
  }
  render();
}

catContainerEl.addEventListener('click', handleClick);

render();
