const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    order_id:{
        type:String,
        required:true,
        unique:true
    },
    
    time:{
        type:Date,
        required:true,
    },
    user_id:{
        type:String,
        required:true,
    },
    
})

const orders = mongoose.model("orders",OrderSchema)