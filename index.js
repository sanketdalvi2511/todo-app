const express= require('express')

const PORT= 8000

//init app
const app=express();

//view emgine
app.set("view engine",'ejs');

//listen server
app.listen(PORT,()=>{
    console.log("http://www.localhost:8000/")
})