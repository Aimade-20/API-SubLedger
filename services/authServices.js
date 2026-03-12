const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async(data) =>{
    const existing = await User.findOne({email : data.email})
    if(existing) throw new Error("email already exists")
        const user = await User.create(data)
    return user
}

const login =async (email , password) => {
    if(!user) throw new Error("invalid credentials")
        const isMatch =await bcrypt.compare(password,user.password)
        if(!isMatch) throw new Error("invalid credentials")
           
           
            const token = jwt.sign(
                {userID :user._id,role:user.role},
                process.env.JWT_SECRET,
                process.env.expiresIn
            )
            return {token}
}

module.exports ={register,login}