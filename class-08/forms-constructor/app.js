'use strict';

var allPeople = [];
var formEl = document.getElementById('myForm');

function Person(name, story, animal){
  this.name = name;
  this.story = story;
  this.animal = animal;

  allPeople.push(this);
}

// put a listener on the form - event(submit, callback function)
formEl.addEventListener('submit', function(e){
  e.preventDefault();

  var username = e.target.username.value;
  var story = e.target.story.value;
  var animal = e.target.animal.value;

  new Person(username, story, animal);
})
  // store the information from the form in some variables 
  // take those variables and run them through the constructor function to create a new instance

  [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10, 4, 5]]
  for(var i = 0; i<hours.length; i++){
    for(var j=0; j< allPeople.length; j++){
      allPeople[j][i]
    }
  }