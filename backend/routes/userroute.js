const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotpassword,
  resetPasswords,
  allConnections,
  getAllCompany,
  profileUpdateCompany,
  getCompanyProfile,
  getCompanyDetails,
  getloggeduserdetails,
  getuserdetails,
  updatepass,
  updateprofile,
  createpost,
  getallposts,
  createcomment,
  getPostDetails,
  createlike,
  getalluserdetails,
  newConnection,
  AcceptConnection,
  RejectConnection,
  getConnections,
} = require("../controllers/usercontroller");
const { protect } = require("../middleware/authMiddleware");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/connections").get(protect, allConnections); // To get all the connections of the current user logged in
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotpassword);
router.route("/password/reset/:token").put(resetPasswords);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getloggeduserdetails);
router.route("/else/:id").get(isAuthenticatedUser, getuserdetails);
router.route("/password/update").put(isAuthenticatedUser, updatepass);
router.route("/me/update").put(isAuthenticatedUser, updateprofile);
router.route("/me/post").post(isAuthenticatedUser, createpost);
router.route("/allposts").get(getallposts);
router.route("/docomment").put(isAuthenticatedUser, createcomment);
router.route("/post/:id").get(getPostDetails);
router.route("/dolike").put(isAuthenticatedUser, createlike);
router.route("/doconnect").put(isAuthenticatedUser, newConnection);
router.route("/allusers").get(isAuthenticatedUser, getalluserdetails);
router.route("/AcceptConnection").put(isAuthenticatedUser, AcceptConnection);
router.route("/RejectConnection").put(isAuthenticatedUser, RejectConnection);
router.route("/allcompanies").get(getAllCompany);
router.route("/company/updateprofile").post(profileUpdateCompany);
router.route("/company/getprofile").post(getCompanyProfile);

router.route("/company/details").post(getCompanyDetails);
router.route("/getconnections/:id").get(getConnections);

module.exports = router;

module.exports = router;
