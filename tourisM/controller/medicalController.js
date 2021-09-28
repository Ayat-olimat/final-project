const detailsRoute =require('../routes/medicalRoute')
const path= require('path')
exports.getmedical =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","medical.ejs"))
}