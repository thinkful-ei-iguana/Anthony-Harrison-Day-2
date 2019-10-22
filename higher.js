'use strict';

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

repeat(goodbye, 5);

function filter(arr, fn) {
  // TASK: Define your function here
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'R') {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = [ 'Rich', 'Joe', 'Bhaumik', 'Ray' ];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');

let turtleArray = [ [ 0, 0 ], [ 0, 5 ], [ -1, -3 ], [ -3, 1 ], [ 2, -4 ], [ 3, 2 ] ];
// let newArray = [];

const result = turtleArray.filter((coordinates) => {
  if (coordinates[0] >= 0 && coordinates[1] >= 0) {
    return coordinates;
  }
});

const result_2 = turtleArray.map((coordinates) => {
  // if(coordinates[0] >= 0 && coordinates[1] >= 0) {
  //     return coordinates;
  // }
  return coordinates[0] + coordinates[1];
});

let counter = 1;
result_2.forEach((num) => {
  if (num === 1) {
    console.log(`Movement #${counter}: ${num} step`);
  } else {
    console.log(`Movement #${counter}: ${num} steps`);
  }
  counter++;
});

let decodeString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// NO_NE
let decodeArray = decodeString.split(' ').reduce(myFunc, '');

function myFunc(param1, param2) {
  if (param2.length === 3) {
    return param1 + ' ';
  } else {
    return param1 + param2.slice(-1).toUpperCase();
  }

  // return param1 + param2;
}
console.log(decodeArray);

// var numbers = [175, 50, 25, 123, 140, 23];

// // document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc2(total, num) {
//   return total + num;
// }

// console.log(numbers.reduce(myFunc2));

// 175 + 50 => myFunc2(225, 25) = 250 => myFunc(250, 123)
