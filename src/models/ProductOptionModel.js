const mongoose = require("mongoose")

const ProductOptionScheme = new mongoose.Schema({
    product_option_id:{
        type:String,
        required:true,
        unique:true
    },
    key:{
        type:Array,
        required:true,
    },
    value:{
        type:Array,
        required:true,
    },
    product_id:{
        type:String,
        required:true,
    },
    
})

const product_options = mongoose.model("product_options",ProductOptionScheme)