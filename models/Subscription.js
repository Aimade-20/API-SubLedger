const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subscriptionSchema = new Schema ({
    name :{type :String ,required :true ,trim : true},
    price : {type : Number ,required :true , min : 1},
    billingCycle: { type: String, required: true, enum: ["monthly", "yearly"] },
    userId : {type : Schema .Types.ObjectId,ref:"User",required :true},
    createdAt : {type : Date , default :Date.now}
})
const subscription = mongoose.model("subscription",subscriptionSchema)
module.exports=subscription