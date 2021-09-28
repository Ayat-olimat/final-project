const detailsRoute =require('../routes/sportRoute')
const path= require('path')
exports.getsport =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","sport.ejs"))
}