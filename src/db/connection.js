const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://infoanish02:Annu%40123@cluster0.hqmtili.mongodb.net/food-factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


