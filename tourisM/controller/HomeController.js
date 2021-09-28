const HomeRoute =require('../routes/HomeRoutes')
const path= require('path')
exports.getHome =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","index.ejs"))
}