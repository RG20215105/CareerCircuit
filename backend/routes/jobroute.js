const {postJob} = require( "../controllers/jobcontroller" );


const express = require("express");

const router = express.Router();


router.route("/postjob").post(postJob);



module.exports=router;

