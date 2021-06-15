// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Data
// =============================================================
const animals = [
  {
    animalType: 'dog',
    pet: true,
    fierceness: 4
  },
  {
    animalType: 'cat',
    pet: true,
    fierceness: 6
  },
  {
    animalType: 'giraffe',
    pet: false,
    fierceness: 4
  },
  {
    animalType: 'zebra',
    pet: false,
    fierceness: 8
  },
  {
    animalType: 'lion',
    pet: false,
    fierceness: 10
  }
];

// Routes
// =============================================================

app.get('/all-pets', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    animals: []
  };

  // Loop through the animals, and send those that are pets to the index handlebars file.
  for (let i = 0; i < animals.length; i++) {
    // Get the current animal.
    let currentAnimal = animals[i];

    // Check if this animal is a pet.
    if (currentAnimal.pet) {
      // If so, push it into our data.animals array.
      data.animals.push(currentAnimal);
    }
  }

  res.render('index', data);
});

app.get('/all-non-pets', (req, res) => {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    animals: []
  };

  // Loop through the animals, and send those that are not pets to the index handlebars file.
  for (let i = 0; i < animals.length; i++) {
    // Get the current animal.
    let currentAnimal = animals[i];

    // Check if this animal is a pet.
    if (!currentAnimal.pet) {
      // If not, push it into our data.animals array.
      data.animals.push(currentAnimal);
    }
  }

  res.render('index', data);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
