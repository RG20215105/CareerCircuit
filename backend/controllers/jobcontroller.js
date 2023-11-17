const Job = require("../models/jobmodel")
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

