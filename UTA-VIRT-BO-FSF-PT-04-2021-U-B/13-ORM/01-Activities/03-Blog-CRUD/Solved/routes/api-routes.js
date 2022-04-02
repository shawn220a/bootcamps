// Dependencies
// =============================================================
const router = require('express').Router();
const Post = require('../models/post');

// Routes
// =============================================================

// GET route for getting all of the posts
router.get('/api/posts/', (req, res) => {
  Post.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

// GET route for retrieving posts of a specific category
router.get('/api/posts/category/:category', (req, res) => {
  Post.findAll({
    where: {
      category: req.params.category
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// GET route for retrieving a single post
router.get('/api/posts/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// POST route for saving a new post
router.post('/api/posts', (req, res) => {
  console.log(req.body);
  Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// DELETE route for deleting a post
router.delete('/api/posts/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// PUT route for updating a post
router.put('/api/posts/:id', (req, res) => {
  Post.update(
    {
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
