const mongoose = require("mongoose");
const validator=require('validator');


const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
            images:[ 
                {
                    public_id: {
                        type: String
                        
                    }, 
                    url: {
                        type: String
                        
                    }
                }]
            ,
            comment: {
                type: String
                
            }
    ,
    createdAt:{
        type:Date,
        default:Date.now(),
    }
   
});




module.exports=mongoose.model("Post",postSchema);

