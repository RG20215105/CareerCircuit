const express = require("express");
const { registerUser,loginUser,logout, forgotpassword,resetPasswords,getuserdetails, updatepass, updateprofile, createpost, getallposts, createcomment,getPostDetails, createlike} = require("../controllers/usercontroller");
const{isAuthenticatedUser}=require("../middleware/auth");


const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotpassword);
router.route("/password/reset/:token").put(resetPasswords);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser,getuserdetails);
router.route("/password/update").put(isAuthenticatedUser,updatepass);
router.route("/me/update").put(isAuthenticatedUser,updateprofile);
router.route("/me/post").post(isAuthenticatedUser,createpost);
router.route("/allposts").get(getallposts);
router.route("/docomment").put(isAuthenticatedUser,createcomment);
router.route("/post/:id").get(getPostDetails);
router.route("/dolike").put(isAuthenticatedUser,createlike);


module.exports=router;

