const cultureRoute =require('../routes/AboutcultureRoute')
const path= require('path')
exports.getAboutculture =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","Aboutculture.ejs"))
}