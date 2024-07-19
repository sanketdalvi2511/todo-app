const mongoose=require("mongoose")
const connectMongodb= async()=>{
    try{
        const url=process.env.CONNECTION_URL;
        await mongoose.connect(url)
        console.log("connected successfullly")
    }catch(error){
        console.log(error.message);
        process.exit(1)
    }
}


module.exports = connectMongodb