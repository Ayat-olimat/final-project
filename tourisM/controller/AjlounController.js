const detailsRoute =require('../routes/AjlounRoute')
const path= require('path')
exports.getAjloun =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","Ajloun.ejs"))
}