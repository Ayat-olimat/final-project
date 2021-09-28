const { Router } = require('express');
const express= require('express');
const router= express.Router();
const servicesController  = require("../controller/servicesController");
router.get('/services',servicesController.getServices)
module.exports=router;