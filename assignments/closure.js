// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const hello = "hello";
function returnHello() {
  console.log(hello);
}

returnHello();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  };
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let start = 0;
  let increment = function() {
    return (start += 1);
  };
  let decrement = function() {
    return (start -= 1);
  };
  let res = { increment, decrement };
  return res;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newestCounter = counterFactory();
console.log(newestCounter.increment());
console.log(newestCounter.decrement());
console.log(newestCounter.increment());
console.log(newestCounter.increment());
console.log(newestCounter.decrement());
console.log(newestCounter.decrement());
