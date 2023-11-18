
const Product = require('../models/productsmodel');
const cloudinary=require("cloudinary");



exports.postProduct = async (req,res) => {
    try {
        const info = req.body.info;
        const myCloud=await cloudinary.v2.uploader.upload(req.body.image,{
            folder:"avatars",
            width:150,
            crop:"scale",
        })
        const product = await Product.create( {
            name : info.name,
            company : info.company,
            companyID : info.companyID,
            description : info.description,
            category : info.category,
            price : info.price, 
            image : {
                public_id : myCloud.public_id,
                url: myCloud.secure_url,
            }
        })
    
        res.status(201).json({
            success: true,
            msg : "Product Created"
        })
    } catch (error) {
        console.log(error);
    }

}
