const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mware = require("../middleWare/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//  <!!!!!------- CREATE USER FOR REGISTRATION ------!!!!!!>
router.post("/users", userController.createUser  )


//  <!!!!!------- LOGIN USER  ------!!!!!!>
router.post("/login", userController.loginUser)


//  <!!!!!------- THROUGH TOKEN GET USER INFORMATION ------!!!!!!>
router.get("/users/:userId",mware.mid1 , userController.getUserData)


//  <!!!!!------- UPDATE USER INFORMATION ------!!!!!!>
router.put("/users/:userId",  mware.mid1 ,userController.updateUser)

//  <!!!!!------- DELETE USER------!!!!!!>
router.delete("/users/:userId",mware.mid1 , userController.deletedUser)

module.exports = router;