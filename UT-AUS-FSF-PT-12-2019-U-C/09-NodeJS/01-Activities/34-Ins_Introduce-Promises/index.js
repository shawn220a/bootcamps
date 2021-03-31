const fs = require("fs");
const util = require("util");

  // The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

readFileAsync("animals.json", "utf8").then(function(data) {
  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  // For each element in animal
  animalJSON.forEach(function(animal) {
    if (animal.species === "dog") {
      dogs.push(animal);
    } else if (animal.species === "cat") {
      cats.push(animal);
    }
  });

  // Turn the arrays into JSON strings so they can be written to files
  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  writeFileAsync("dogs.json", dogJSON).then(function() {
    console.log("Successfully wrote to dogs.json file");
  });

  writeFileAsync("cats.json", catJSON).then(function() {
    console.log("Successfully wrote to cats.json file");
  });
});
