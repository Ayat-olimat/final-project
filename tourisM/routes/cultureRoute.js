const { Router } = require('express');
const express= require('express');
const router= express.Router();
const cultureController = require("../controller/cultureController");
router.get('/culture',cultureController.getculture)
module.exports=router;