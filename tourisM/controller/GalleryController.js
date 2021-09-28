const detailsRoute =require('../routes/GalleryRoute')
const path= require('path')
exports.getGallery =(req,res,next)=>{
res.render(path.join(__dirname,"..","View","Gallery.ejs"))
}