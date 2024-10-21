/** @format */

// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }
// Rewrite it, to perform the same, but without if...else, and use the arrow function.

const checkAge = (age) =>
  age > 18 ||
  confirm("Do you have your parents permission to access this page?");


//Exercise 2

/** @format */

const pow = (x, n) => {
  // Initialize the result to 1
  let result = 1;

  // Multiply x by itself n times
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  // Return the final result
  return result;
};

// Example usage:
console.log(pow(3, 2)); 
console.log(pow(3, 3));
console.log(pow(1, 100)); 


//Exercise 3

/** @format */

//The ask function is now declared using an arrow function syntax const ask = (question, yes, no) => { ... }.
//The anonymous functions for yes and no are now written using the arrow function syntax () => alert("...").

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);


//Exercise 4 (Calculator)

/** @format */

let calculator = {
  // Properties to store the values
  a: 5,
  b: 5,

  // Method to read two values
  read() {
    this.a = +prompt("Enter the first number:", 0); // Use + to convert input to a number
    this.b = +prompt("Enter the second number:", 0); // Use + to convert input to a number
  },

  // Method to return the sum of the values
  sum() {
    return this.a + this.b;
  },

  // Method to return the product of the values
  mul() {
    return this.a * this.b;
  },
};

// Example usage
calculator.read();
alert("Sum: " + calculator.sum());
alert("Product: " + calculator.mul());

//Exercie 5

const min = (a, b) => a < b ? a : b;

// Example usage
console.log(min(5, 10)); 
console.log(min(15, 7)); 
console.log(min(-3, -1)); 

