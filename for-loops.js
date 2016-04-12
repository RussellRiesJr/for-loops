//for loop initialized at 5 with increments of 10 that doesn't go
//over 120, use console.log to output the value every time

for (var i = 5; i < 120; i = i + 10) {
console.log("Current value is ", i);
}


//for loop initialized at 4096 that divides by 2 and stops at 1
//use console.log to output the value every time

for (var i = 4096; i >= 1; i = i / 2) {
  console.log("Current value is ", i);
}

//create an array that contains the names of American Presidents.
//loop over that array with a for loop and use string concatenation
//with console.log to output the order and name of each Pres

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "John Quincey Adams"];

for (var i = 0; i < presidents.length; i++) {
  console.log("President #" + (i + 1 ) + " is " + presidents[i]);
}


//iterate over the objects below and use a for loop to output the names of the keys
//in the objects

var antSpecies = {
  "argentine": {},
  "army": {},
  "big headed": {},
  "black": {},
  "bull": {},
  "carpenter": {},
  "crazy": {},
  "fire": {},
  "glider": {},
  "honey pot": {},
  "jack jumper": {}
};

for (var key in antSpecies) {
  console.log("ant = " + key);
}