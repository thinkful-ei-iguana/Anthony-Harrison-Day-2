'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water / this.flour * 100;
  }
};
console.log(`${loaf.hydration()}`);

/////////////////////////////////////////////

let newObj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

for (let i in newObj) {
  console.log(`${i}, ${newObj[i]}`);
}

/////////////////////////////////////////////

let myObj = {
  meals: [ 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper' ]
};
console.log(myObj.meals[4]);

/////////////////////////////////////////////

let myArr = [
  {
    name: 'Anthony',
    jobTitle: 'Worker'
  },
  {
    name: 'Harrison',
    jobTitle: 'Worker'
  },
  {
    name: 'Chris',
    jobTitle: 'Worker'
  }
];

for (let i in myArr) {
  console.log(myArr[i]);
}

/////////////////////////////////////////////
