const { Router } = require('express');
const express= require('express');
const router= express.Router();
const AboutmedicalController = require("../controller/AboutmedicalController");
router.get('/aboutmedical',AboutmedicalController.getAboutmedical)
module.exports=router;