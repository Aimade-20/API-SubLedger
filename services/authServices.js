const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async(data) =>{
    const existing = await User.findOne({email : data.email})
    if(existing) throw new Error("email already exists")
        const hashesPassword = await bcrypt.hash(data.password,10)
        const user = await User.create({...data, password :hashesPassword})
    return user
}

const login =async (email , password) => {
    
    const user =await User.findOne({email})
    if(!user) throw new Error("invalid credentials")

        const isMatch =await bcrypt.compare(password,user.password)
        if(!isMatch) throw new Error("invalid credentials")
           
           
            const token = jwt.sign(
                {userID :user._id,role:user.role},
                process.env.JWT_SECRET,
                {expiresIn :"2d"}
            )
            return {token}
}

module.exports ={register,login}