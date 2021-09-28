const { Router } = require('express');
const express= require('express');
const router= express.Router();
const HomeController = require("../controller/HomeController");
router.get('/',HomeController.getHome)
module.exports=router;