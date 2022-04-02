// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');
// Requires the 'express-session' module
const session = require(`express-session`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: 'This is a major secret!',
    resave: false,
    saveUninitialized: false
  })
);

// Data
// =============================================================
const books = [
  {
    title: 'Love You Forever',
    read: false,
    author: 'Robert Munsch'
  },
  {
    title: 'The Giving Tree',
    read: false,
    author: 'Shel Silverstein'
  },
  {
    title: 'Where the Red Fern Grows',
    read: true,
    author: 'Wilson Rawls'
  },
  {
    title: 'The Fault in Our Stars',
    read: true,
    author: 'John Green'
  },
  {
    title: 'Out of My Mind',
    read: false,
    author: 'Sally Engelfried'
  },
  {
    title: 'Wonder',
    read: true,
    author: 'Barbara Schultz'
  }
];

// Routes
// =============================================================
let dog = {barks: true}

dog.fur = true;
app.get('/', (req, res) =>{
console.log(req.sessions)

  if (req.session.countVisit) {
    // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
    req.session.countVisit++;
    req.session.firstTime = false;
  } else {
    // If the 'countVisit' session variable doesn't exist, set it to 1 and set the 'firstTime' session variable to 'true'
    req.session.countVisit = 1;
    req.session.firstTime = true;
  }

  const data = {
    // Include the 'books' array, 'countVisit' and 'firstTime' session variables to be sent over to index.handlebars
    library: books,
    countVisit: req.session.countVisit,
    firstTime: req.session.firstTime
  };
  res.render('index', data);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
