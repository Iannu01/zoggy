const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    price: {
        type: Number
    },
    available:{
        type: Boolean
    },
    category:{
        type:String
    },
    currency:{
        type:String
    },
    description:{
        type:String
    },
    discount:{
        type:Number
    },
    duration:{
        type:Number
    },
    image:{
        type:String
    },
    quantity:{
        type:Number
    },
    ratings:{
        type:Number
    },
    resturant:{
        type:String
    },
    resturant_address:{
        type:String
    },
    resturant_distance:{
        type:Number
    },
    status:{
        type:String
    }
}
)

const food = new mongoose.model('foods', foodSchema)

module.exports = food; 