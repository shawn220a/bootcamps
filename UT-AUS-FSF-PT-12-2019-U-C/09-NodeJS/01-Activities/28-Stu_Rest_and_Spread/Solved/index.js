// 1. Copy an array into another array using spread

const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
const new_songs = [...songs];
console.log(new_songs); // => ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

// 2.  Modify the addition function so that is uses the rest operator and maintains the same functionality. You should still be able to pass in any number of arguments.

function addition(x, y, z) {
  const array = [x, y, z];
  return array.reduce((a, b) => a + b, 0);
}
console.log(addition(1, 2, 3)); // 6

function addition(...array) {
  return array.reduce((a, b) => a + b, 0); // you don't have to change this line of code but look up reduce if you're not sure what it does here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
}
console.log(addition(1, 2, 3)); // 6
console.log(addition(1, 2, 3, 4, 100)); // 110