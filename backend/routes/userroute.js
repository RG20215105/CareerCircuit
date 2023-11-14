const express = require("express");
const { registerUser,loginUser,logout, forgotpassword,resetPasswords,getuserdetails, updatepass, updateprofile} = require("../controllers/usercontroller");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotpassword);
router.route("/password/reset/:token").put(resetPasswords);
router.route("/logout").get(logout);
router.route("/me").get(getuserdetails);
router.route("/password/update").put(updatepass);
router.route("/me/update").put(updateprofile);


module.exports=router;

