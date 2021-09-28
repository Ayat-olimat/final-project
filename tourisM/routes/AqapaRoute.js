const { Router } = require('express');
const express= require('express');
const router= express.Router();
const AqapaController = require("../controller/AqapaController");
router.get('/Aqapa',AqapaController.getAqapa)
module.exports=router;