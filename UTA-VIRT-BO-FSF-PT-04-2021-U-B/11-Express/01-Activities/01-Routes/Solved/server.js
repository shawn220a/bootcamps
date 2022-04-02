// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3001;

// Data
// ===========================================================
const yoda = {
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  forcePoints: 2000
};

const darthmaul = {
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  forcePoints: 1200
};

// Create a data object for the character, Obi Wan Kenobi
const obiwankenobi = {
  name: 'Obi Wan Kenobi',
  role: 'Jedi Master',
  age: 55,
  forcePoints: 1350
};

// Routes
// ===========================================================
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json(yoda);
});

app.get('/darthmaul', (req, res) => {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi data
app.get('/obiwankenobi', (req, res) => {
  res.json(obiwankenobi);
});

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
