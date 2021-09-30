const express= require ("express");
const app= express();
const path=require("path");
const fs= require("fs");
app.use(express.static(__dirname + '/assets')); // load the files that are in the Assets directory
app.set('view engine', 'ejs');

const HomeRoute = require('./routes/HomeRoutes')
const detailsRoute=require('./routes/DetailsJordan')
const AboutRoute =require('./routes/AboutWebsite')
const GovernorateRoute = require('./routes/GovernorateRoute')
const servicesRoute = require('./routes/servicesRoute')
const KaramFamilyRoute = require('./routes/KaramFamilyRoute')
const medicalRoute = require('./routes/medicalRoute')
const Aboutmedical = require('./routes/Aboutmedical')
const cultureRoute = require('./routes/cultureRoute')
const AboutcultureRoute = require('./routes/AboutcultureRoute')
const contactRoute= require('./routes/contactRoute')
app.use(HomeRoute)
app.use(detailsRoute)
app.use(AboutRoute)
app.use(GovernorateRoute)
app.use(KaramFamilyRoute)
app.use(servicesRoute)
app.use(medicalRoute)
app.use(Aboutmedical)
app.use(cultureRoute )
app.use(AboutcultureRoute)
app.use(contactRoute)
app.listen(3001,()=>{ // port is 3001
    console.log("server --- 3001")})




