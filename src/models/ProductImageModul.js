const mongoose = require("mongoose")

const ProductImageSchema = new mongoose.Schema({
    product_image_id:{
        type:String,
        required:true,
        unique:true
    },
    images:{
        type:Array,
        required:true,
    },
    product_id:{
        type:String,
        required:true,
    },
    
})

const product_image = mongoose.model("product_image",ProductImageSchema)