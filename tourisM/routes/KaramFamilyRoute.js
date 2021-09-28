const { Router } = require('express');
const express= require('express');
const router= express.Router();
const GovernorateController = require("../controller/KaramFamilyController");
router.get('/KaramFamily',GovernorateController .getKaramFamily)
module.exports=router;