const playersController = require("../controllers/playersControllers.js")

const express = require("express")
const router = express.Router()


router.get("/", playersController.list)
    //router.get("/list", playersController.list)


module.exports = router