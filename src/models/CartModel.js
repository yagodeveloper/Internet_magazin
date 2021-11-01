const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    comment_id:{
        type:String,
        required:true,
        unique:true
    },
    
    count:{
        type:Number,
        required:true,
        min:1,
        default:1,
    },
    product_id:{
        type:String,
        required:true,
    },
    user_id:{
        type:String,
        required:true,
    },
    
})

const carts = mongoose.model("carts",CartSchema)