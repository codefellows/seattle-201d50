'use strict';

var myArr = [2, 3, 5, 5];
console.log('my Array is ', myArr);
var myNewArr = [];
var myFinalArr = [];

for(var i = 0; i < myArr.length; i++){
  myNewArr.push(myArr[i]+5);
  newthing = 'hello';
}

console.log('my new Array is', myNewArr);


for(i = 0; i < myNewArr.length; i++){
  myFinalArr.push(myNewArr[i]+10);
  console.log('my index is :', i)
}

console.log('my final Array is, ', myFinalArr);