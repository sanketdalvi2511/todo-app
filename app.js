
const express= require('express')
const path= require("path");
const bodyParser= require("body-parser")
const connectMongodb= require("./init/mongodb")
const Todo=require("./models/Todo")
const router= require("./routes/Todo")
const dotenv=require("dotenv")

dotenv.config();
//init app
const app=express();

connectMongodb();


//view emgine
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({exptended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/",router)

module.exports= app