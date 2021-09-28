const { Router } = require('express');
const express= require('express');
const router= express.Router();
const AjlounController = require("../controller/AjlounController");
router.get('/Ajloun',AjlounController.getAjloun)
module.exports=router;