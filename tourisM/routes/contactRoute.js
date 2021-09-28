const { Router } = require('express');
const express= require('express');
const router= express.Router();
const contactController = require("../controller/contactController");
router.get('/contact',contactController.getcontact)
module.exports=router;