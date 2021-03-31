# Async Await

In this activity you will convert a previous Promise-based activity to utilize async await.

## Instructions

* Change directories into the `Unsolved` folder and run `npm install` from your terminal.

* Take a moment to examine the contents of `Unsolved/index.js`. This file:

  * Contains an async function called `combineAnimals` that gets called when the file loads.

  * The `combineAnimals` function contains a try/catch block.
  
  * The goal of this activity is to mirror the functionality found in the previous `37-Stu_Promise-All` activity: animals should be read from each file and then combined into a new `combined.json` file.

* Write code inside of the `try` block to read from each file (`dog.json`, `cat.json`, `goldfish.json`, `hamster.json`) one at a time using the async/await syntax.

* Parse the data from each file to objects using `JSON.parse`.

* Store the animal objects into an array and use `JSON.stringify` to convert the array of objects to an JSON string.

* Save the new combined animal JSON to a `combined.json` file.

* Print a message to the console indicating that this was successful.

## 💡Hints

* Check out the [MDN documentation on async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## 🏆 Bonus

* Rather than manually writing out code to read each file one at a time, find a way to do so using a loop instead using async/await.

* Sort animals by age before saving them to the `combined.json` file.
