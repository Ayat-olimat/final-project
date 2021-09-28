const detailsRoute =require('../routes/DetailsJordan')
const path= require('path')
exports.getHome =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","detailsJordan.ejs"))
}