const {postProduct} = require( "../controllers/productcontroller" );


const express = require("express");

const router = express.Router();


router.route("/postproduct").post(postProduct);


module.exports=router;

