const express = require("express");
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

module.exports = router;
