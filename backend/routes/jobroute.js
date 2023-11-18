const {postJob,getAllJobs, applyJob} = require( "../controllers/jobcontroller" );


const express = require("express");

const router = express.Router();


router.route("/postjob").post(postJob);
router.route('/getjobs').get(getAllJobs);
router.route('/applyjob').put(applyJob);



module.exports=router;

