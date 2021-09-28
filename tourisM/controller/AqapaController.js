const Aaaparoute =require('../routes/AqapaRoute')
const path= require('path')
exports.getAqapa =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","Aqapa.ejs"))
}