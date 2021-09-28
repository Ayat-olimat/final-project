const cultureRoute =require('../routes/cultureRoute')
const path= require('path')
exports.getculture =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","cultural.ejs"))
}