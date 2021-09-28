const { Router } = require('express');
const express= require('express');
const router= express.Router();
const GovernorateController = require("../controller/GovernorateController");
router.get('/Governorate',GovernorateController .getGovernorate)
module.exports=router;