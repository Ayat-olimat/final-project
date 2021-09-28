const detailsRoute =require('../routes/KaramFamilyRoute')
const path= require('path')
exports.getKaramFamily =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","KaramFamily.ejs"))
}