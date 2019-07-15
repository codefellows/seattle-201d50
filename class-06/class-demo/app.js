'use strict';
// store my DOM node in a variable
var ulEl = document.getElementById('pet-list');

var cookie = {
  name: 'Cookie',
  type: 'dog',
  breed: 'brown',
  age: 8,
  isLoud: false,
  sheds: true,
  render: function(){
    // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');
  
      // 2. give it content - name
      liEl.textContent = this.name;

      // 3. append it to the DOM
      ulEl.appendChild(liEl);

      liEl = document.createElement('li');
      liEl.textContent = this.type;
      ulEl.appendChild(liEl);
  
  }
}


var malaki = {
  name: 'Malaki',
  type: 'cat',
  breed: 'orange',
  age: 2,
  isLoud: false,
  sheds: false,
  render: function(){
    // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');
  
      // 2. give it content - name
      liEl.textContent = this.name;

      // 3. append it to the DOM
      ulEl.appendChild(liEl);
  
  }
}


var tangerine = {
  name: 'Tangerine', 
  type: 'cat',
  breed: 'orange',
  age: 4,
  isLoud: true,
  sheds: true,
  render: function(){
    // render function
      // three things
      // 1. create an element - li
      var liEl = document.createElement('li');
  
      // 2. give it content - name
      liEl.textContent = this.name;

      // 3. append it to the DOM
      ulEl.appendChild(liEl);
  
  }
}

var myPetsArray = [cookie, malaki, tangerine];

for(var i = 0; i < myPetsArray.length; i++){
  myPetsArray[i].render();
}


