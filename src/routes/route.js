const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
const publishratingController = require("../controllers/publishratingController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getAllBookDetails" , bookController.getAllBookDetails)

router.post("/authorPresent",authorController.authorPresent)

router.post("/publisherPresent" ,publisherController.publisherPresent)

router.post("/authorDetailsPresent" ,authorController.authorDetailsPresent)
router.post("/publisherDetailsPresent",publisherController.publisherDetailsPresent)

router.put("/publisherRating",publishratingController.publisherRating)

router.get("/getpublishdata",publishratingController.getpublishdata)


router.get("/updateTrue" ,publishratingController.updateTrue)

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
// / router.post("/authorPresent" ,authorController.authorPresent )


module.exports = router;