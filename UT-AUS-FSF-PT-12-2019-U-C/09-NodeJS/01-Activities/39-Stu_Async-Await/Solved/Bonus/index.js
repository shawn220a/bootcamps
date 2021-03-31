const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const animals = [];
    const files = ["dog.json", "goldfish.json", "cat.json", "hamster.json"];

    for (let file of files) {
      const fileStr = await readFileAsync(file, "utf8");

      animals.push(JSON.parse(fileStr));
    }

    const sorted = animals
      .sort(function(a, b) {
        return b.age - a.age;
      });

    await writeFileAsync(
      "combined.json",
      JSON.stringify(sorted, null, 2),
      "utf8"
    );

    console.log("Successfully wrote to 'combined.json' file");
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();
