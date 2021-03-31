const passport = require("../passport");
const routeHelper = require('./utils/routeHelper');
const db = require('../models');
const path = require("path");
const router = require("express").Router();
    
/* OAuth Github Routes */
router.get("/login", passport.authenticate('github'));

router.get('/auth', passport.authenticate('github', {session: false, failureRedirect: routeHelper()}), function(req, res) {
    // Succesful authentication! 
    // Store the generated jwt in the client cookie
    res.cookie('jwt', req.user.jwtToken);
    res.redirect(routeHelper());
});


/* API Routes, Only 2 for now GET images and POST to create new image */
/* Note the passport.authenticate('jwt') will run 1st and validate users JWT before getting access to images */
router.get("/api/image", passport.authenticate('jwt', {session: false}), (req, res) => { 
    db.ImageStore.find({githubId: req.user.githubId})
    .then(function(images) {
        res.json(images);
    })
    .catch(function(err) {
        res.json(err);
    });
});

router.post("/api/image", passport.authenticate('jwt', {session: false}), (req, res) => {

    console.log(req.body);
    db.ImageStore.create({...req.body, githubId: req.user.githubId})
    .then(function(image) {
        
        db.User.findOneAndUpdate({githubId: req.user.githubId}, { $push: { images: image._id } }, { new: true })
        .then(function(user) {
            res.json(image);
        })
        .catch(function(err) {
            res.json(err);
        });
    
    })
    .catch(function(err) {
        res.json(err);
    });
    
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;