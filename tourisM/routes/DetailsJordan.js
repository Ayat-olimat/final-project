const { Router } = require('express');
const express= require('express');
const router= express.Router();
const DetailsJordanController = require("../controller/DetailsJordanController");
router.get('/details',DetailsJordanController.getHome)
module.exports=router;