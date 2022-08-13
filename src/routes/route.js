const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js");
const UserController = require('../controllers/userControllers')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post("/createUser" , UserController.createUser )


router.get('/getUserData', UserController.getUserData)



module.exports = router;
// adding this comment for no reaso