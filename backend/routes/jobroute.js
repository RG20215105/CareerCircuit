const {postJob,getAllJobs, applyJob,getMyJobs} = require( "../controllers/jobcontroller" );


const express = require("express");

const router = express.Router();


router.route("/postjob").post(postJob);
router.route('/getjobs').get(getAllJobs);
router.route('/applyjob').put(applyJob);
router.route('/getmyjobs').get(getMyJobs);



module.exports=router;

