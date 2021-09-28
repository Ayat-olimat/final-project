const detailsRoute =require('../routes/servicesRoute')
const path= require('path')
exports.getServices =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","services.ejs"))
}