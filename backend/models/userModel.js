const mongoose=require("mongoose")

// Create Schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,

    }
},{
    timestamps:true
})

// create Model 
const User = mongoose.model('User',userSchema )
module.exports=User


//Schema only defines the structure of your document
//Model is : - We need to convert our blogSchema into model  we can work with to do that we pass it into mongoose.model(modelName,schema)