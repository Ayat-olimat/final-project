const { Router } = require('express');
const express= require('express');
const router= express.Router();
const AboutcultureController = require("../controller/AboutcultureController");
router.get('/Aboutculture',AboutcultureController.getAboutculture)
module.exports=router;