const cultureRoute =require('../routes/contactRoute')
const path= require('path')
exports.getcontact =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","contact.ejs"))
}