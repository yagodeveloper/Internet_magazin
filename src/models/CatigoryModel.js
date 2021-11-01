const mongoose = require("mongoose")

const CatigorySchema = new mongoose.Schema({
    catigory_id:{
        type:String,
        required:true,
        unique:true
    },
    catigory_name:{
        type:String,
        required:true,
    },
    
})

const catigoryes = mongoose.model("catigoryes",CatigorySchema)