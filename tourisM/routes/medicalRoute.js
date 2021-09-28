const { Router } = require('express');
const express= require('express');
const router= express.Router();
const medicalController = require("../controller/medicalController");
router.get('/medical',medicalController.getmedical)
module.exports=router;