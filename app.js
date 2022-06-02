// const and let
const a = 5;
const b = 2;
let myName = "Kim";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Hyejin";
console.log("Your new name is " + myName);

// Booleans
const amIFat = true;
console.log(amIFat);
const amIPretty = false;
console.log(amIPretty);
let areYouFat;
console.log(areYouFat);
const areYouPretty = null;
console.log(areYouPretty);

// Arrays
const daysOfWeek = ["mon", "thu", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// Change value in array
daysOfWeek[2] = "Wednesday";
console.log(daysOfWeek);

// Objects
const player = {
  name: "Amin",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.fat);

// Add one to the Object
player.lastName = "Park";
console.log(player);

// Change property in the Object
player.fat = false;
console.log(player);

// Functions
function sayHello(nameOfPerson, age) {
  console.log("Hello, my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Bob", 20);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
  // firstNumber exists only in functions.
}

//console.log(firstNumber); //Error Occurred

function divide(a, b) {
  console.log(a / b);
}

plus(20, 50);
divide(70, 7);

//function inside object
player.sayHi = function sayHi(anotherName) {
  console.log("Hi " + anotherName + " Nice to meet you. ");
};
console.log(player);

player.sayHello = sayHello("hans", 15);
console.log(player);

// Making calculator
const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiplay: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculator.plus(20, 20);
calculator.minus(20, 20);
calculator.multiplay(20, 3);
calculator.divide(20, 20);
calculator.power(2, 3);
