const detailsRoute =require('../routes/Aboutmedical')
const path= require('path')
exports.getAboutmedical =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","Aboutmedical.ejs"))
}