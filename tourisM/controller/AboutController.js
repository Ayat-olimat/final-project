const detailsRoute =require('../routes/AboutWebsite')
const path= require('path')
exports.getAbout =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","aboutWebsite.ejs"))
}