const express = require("express");
const { registerUser,loginUser,logout, forgotpassword,resetPasswords,getAllCompany, profileUpdateCompany, getCompanyProfile} = require("../controllers/usercontroller");
const {getCompanyDetails} = require('../controllers/usercontroller');
const {
  registerUser,
  loginUser,
  logout,
  forgotpassword,
  resetPasswords,
  allConnections,
} = require("../controllers/usercontroller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/connections").get(protect, allConnections); // To get all the connections of the current user logged in
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotpassword);
router.route("/password/reset/:token").put(resetPasswords);
router.route("/logout").get(logout);

router.route('/allcompanies').get(getAllCompany);
router.route('/company/updateprofile').post(profileUpdateCompany)
router.route('/company/getprofile').post(getCompanyProfile);

router.route('/company/details').post(getCompanyDetails);

module.exports=router;

module.exports = router;
