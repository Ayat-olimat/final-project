const { Router } = require('express');
const express= require('express');
const router= express.Router();
const sportController = require("../controller/sportController");
router.get('/sport',sportController.getsport)
module.exports=router;