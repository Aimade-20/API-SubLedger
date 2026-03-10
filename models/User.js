const mongoose = require("mongoose")
const schema = mongoose.schema
const useraSchema = new schema ({
    name : {type :String ,required : true ,trim :true },
    email :{type : String ,required : true , unique :true , lowercase :true ,trim : true , match: [/^\S+@\S+\.\S+$/, "email is not valid"]},
    role :{type :String, required :true ,enum : ["admin", "user"] ,default :"user"},
    createdAt :{type :Date, default: Date.now}
})