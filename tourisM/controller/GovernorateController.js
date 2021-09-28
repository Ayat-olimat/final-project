
const GovernorateRoute =require('../routes/GovernorateRoute')
const path= require('path')
exports.getGovernorate =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","GovernorateWeb.ejs"))
}