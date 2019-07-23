'use strict';

var imageOneEl = document.getElementById('cat-one');
var imageTwoEl = document.getElementById('cat-two');
var catContainerEl = document.getElementById('cat-container');

var namesArray = [];
var catVotes = [];
var votesRemaining = 5;
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

function generateArrays(){
  for(var i = 0; i < allCats.length; i++){
    namesArray.push(allCats[i].name);
    catVotes.push(allCats[i].votes);
  }
}

function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: namesArray,
          datasets: [{
              label: '# of Votes',
              data: catVotes,
              backgroundColor: [
                  'rgba(10, 10, 10, 1)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 10
          }]
        },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });         
}

// event handler function
function handleClick(){
  var chosenImg = event.target.title;
  votesRemaining--;

  if(votesRemaining === 0){
    // stop event listener
    catContainerEl.removeEventListener('click', handleClick);
    // render the list - chart.js
    generateArrays();
    generateChart();
  }
  for(var i = 0; i < allCats.length; i++){
    if(allCats[i].name === chosenImg){
      allCats[i].votes++;
    }
  }
  render();
}

// event listener
catContainerEl.addEventListener('click', handleClick);

render();


