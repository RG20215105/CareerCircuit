const ErrorHandler = require("../utils/errorhandler");
const catchasyncerrors=require("../middleware/catchasyncerrors");
const User=require("../models/usermodels");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail");
const crypto=require("crypto");
const cloudinary=require("cloudinary");


//register user
exports.registerUser=catchasyncerrors(async(req,res,next)=>{
   const myCloud=await cloudinary.v2.uploader.upload(req.body.avatar,{
    folder:"avatars",
    width:150,
    crop:"scale",
   })
    const {name,email,password,phoneno,isCompany}=req.body;
    const user=await User.create({
        name,email,password,phoneno,isCompany,avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url,
        },
    });
    sendToken(user,201,res);
})

//login user
exports.loginUser=catchasyncerrors(async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return next(new ErrorHandler("please enter email and password",400));

    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("invalid email or password",400));

    }
    const isPasswordMatched= await user.comparePassword(password,user.password);
    if(!isPasswordMatched){
    return next(new ErrorHandler("invalid email or password",401));
    }
    sendToken(user,200,res);
})

//logout user
exports.logout = catchasyncerrors(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,

    })
    res.status(200).json({
        success:true,
        message:"Loggedout",
    })
})

//forgot password
exports.forgotpassword=catchasyncerrors(async(req,res,next)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorHandler("user not found",404));

    }
    //get reset password token
    const resettoken= user.getResetPasswordToken();
   await user.save({validateBeforeSave:false});
    const resetpasswordurl=`${process.env.FRONTEND_URL}/password/reset/${resettoken}`;
    const message=`your password reset token is t:-\n\n${resetpasswordurl}\n\n if you have not requested this email then please ignore it`;

    try {
        await sendEmail({
            email:user.email,
            subject:"CareerCircuit Password recovery",
            message,
        })
        res.status(200).json({
            success:true,
            message:`email sent to ${user.email} successfully`
        })
        
    } catch (error) {
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message,500));

    }


})

//reset password
exports.resetPasswords=catchasyncerrors(async(req,res,next)=>{
    
    //creating token hash
    const resetPasswordToken=crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user=await User.findOne({resetPasswordToken:resetPasswordToken,resetPasswordExpire:{$gt:Date.now()},
});
if(!user){
    return next(new ErrorHandler("reset password token is invalid or has expired",404));

}
if(req.body.password!==req.body.confirmPassword){
    return next(new ErrorHandler("Password does not match password",400));

}
user.password=req.body.password;
user.resetPasswordToken=undefined;
user.resetPasswordExpire=undefined;

await user.save();
sendToken(user,200,res);


})

