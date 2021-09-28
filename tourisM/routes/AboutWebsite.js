const { Router } = require('express');
const express= require('express');
const router= express.Router();
const AboutWebsiteController = require("../controller/AboutController");
router.get('/aboutUs',AboutWebsiteController.getAbout)
module.exports=router;