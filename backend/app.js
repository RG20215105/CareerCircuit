const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")

const bodyParser=require("body-parser");
const fileupload=require("express-fileupload");
const dotenv=require("dotenv");


dotenv.config({path:'config/config.env'});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,limit:'50000mb'}));
app.use(fileupload());

//route imports

const user=require("./routes/userroute");



app.use(user);




module.exports=app