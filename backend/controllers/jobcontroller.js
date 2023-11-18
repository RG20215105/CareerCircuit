const { application } = require("express");
const Job = require("../models/jobmodel")
const User = require("../models/usermodels");

//posting a job
exports.postJob = async(req,res) =>{
    // console.log(req.body.job.company);
    const jobDetails = req.body.job;
    const job = await Job.create({
        company : jobDetails.company ,
        companyID :jobDetails.companyID, 
        description :jobDetails.description , 
        profileName :jobDetails.profileName,
        salary:jobDetails.salary,
        skills :jobDetails.skills,
        location:jobDetails.location,
        expire :jobDetails.expire,
        applications:jobDetails.applications
    });
    res.status(200).json({
        success:true,
        message:"Job Created",
    })
}
//jobs home page
exports.getAllJobs = async (req,res) => {
    // console.log("Called")
    const data = await Job.find({}).populate("companyID");
    res.send(data);
}


//apply for job
exports.applyJob=async (req,res)=>{
    // console.log(req.body);
    const {jobID, userID} = req.body;

    const job = await Job.findById(jobID);
    job.applications.push(userID);
    job.save();

    const user = await User.findById(userID);
    user.appliedJobs.push(jobID);
    user.save();
    
    
    res.send(user.appliedJobs);
}