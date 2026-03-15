const mongoose = require("mongoose")
const Schema = mongoose.Schema
const useraSchema = new Schema ({
    name : {type :String ,required : true ,trim :true },
    email :{type : String ,required : true , unique :true , lowercase :true ,trim : true , match: [/^\S+@\S+\.\S+$/, "email is not valid"]},
    password: { type: String, required: true },
    role :{type :String, required :true ,enum : ["admin", "user"] ,default :"user"},
    createdAt :{type :Date, default: Date.now}
})

const User = mongoose.model("User" ,useraSchema)
module.exports = User