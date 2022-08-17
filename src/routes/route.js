const express = require('express');
const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const NovelController = require("../controllers/novelController")
const NovelModel = require("../models/novelModel")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook" , NovelController.createBook)

router.get("/bookList" , NovelController.bookList )

router.post("/bookInYear" , NovelController.bookInYear)

router.get("/randomBooks", NovelController.randomBooks)

 router.post("/particularBooks" , NovelController.particularBooks)

router.get("/XINRBooks" , NovelController.XINRBooks)

module.exports = router;