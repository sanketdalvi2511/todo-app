
const app =require("./app")
const PORT= process.env.PORT=8000




//listen server
app.listen(PORT,()=>{
    console.log("http://www.localhost:"+PORT+"/")
})