// 1. funnyCase makes each letter in a string the opposite case of the letter before
const funnyCase = string => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }
  return newString;
};

console.log("1. Funny Case:")
// Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!\n"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
const map = (arr, cb) => {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    let currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = map(numbers, element => element * 2);

console.log("2. Doubled Numbers:")
// Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
console.log(doubled);

// --------------------------------------------------------------------------

// 3. Filter lets you loop over an array and remove elements
const filter = (arr, cb) => {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    let currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

const evenNumbers = filter(numbers, currentElement => currentElement % 2 === 0);

console.log("\n3. Even Numbers:")
// Prints `[ 2, 4, 6, 8, 10 ]`
console.log(evenNumbers);

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your Netflix queue
const netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club"
  ],
  watchMovie: function() {
    this.queue.pop();
  },
  addMovie: function(movie) {
    this.queue.unshift(movie);
  },
  printQueue: function() {
    let list = "";
    for (let i = this.queue.length - 1; i >= 0; i--) {
      let currentMovie = this.queue[i];
      list += (this.queue.length - i) + ". " + currentMovie + "\n";
    }
    console.log(list);
  }
};

console.log("\n4. Printing movie queue:\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("\nWatched a movie!\n");
console.log("Printing movie queue:\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue:\n");
netflixQueue.printQueue();
