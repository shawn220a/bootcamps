const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { Notebook } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notebookdb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

// Create a new notebook
app.post('/api/notebooks', ({ body }, res) => {
  Notebook.create(body)
    .then(dbNotebookData => {
      res.json(dbNotebookData);
    })
    .catch(err => {
      res.json(err);
    });
});

// Retrieve all notebooks
app.get('/api/notebooks', (req, res) => {
  Notebook.find()
    .then(dbNotebookData => {
      res.json(dbNotebookData);
    })
    .catch(err => {
      res.json(err);
    });
});

// Create a new note for a notebook
app.post('/api/notebooks/:notebookId/notes', (req, res) => {
  Notebook.findOneAndUpdate(
    { _id: req.params.notebookId },
    { $addToSet: { notes: req.body } },
    { runValidators: true, new: true }
  )
    .then(dbNotebookData => {
      if (!dbNotebookData) {
        return res.status(404).json({ message: 'No notebook with this id!' });
      }
      res.json(dbNotebookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a note from a notebook
app.delete('/api/notebooks/:notebookId/notes/:noteId', (req, res) => {
  Notebook.findOneAndUpdate(
    { _id: req.params.notebookId },
    { $pull: { notes: { noteId: req.params.noteId } } },
    { runValidators: true, new: true }
  )
    .then(dbNotebookData => {
      if (!dbNotebookData) {
        return res.status(404).json({ message: 'No notebook with this id!' });
      }
      res.json(dbNotebookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
