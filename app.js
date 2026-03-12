const dotenv = require(dotenv)
dotenv.config()

const express = require("express")
const connectDB = require("./config/db");

const authRoutes = require("./Routes/authRoutes")
const subscriptionRoutes = require("./Routes/adminRoutes");
const adminRoutes = require("./Routes/subscriptionroutes");

const app=express()
connectDB()

app.use("/auth",authRoutes)
app.use("/subscription",subscriptionRoutes)
app.use("/admin",adminRoutes)

app.use((err,req,res,next)=>{
    const status =err.statusCode || 500
    res.status(status).json({error : err.message || "Server Error"})
})
app.listen(process.env.PORT || 3000 , () =>
    console.log(`server is running on port ${process.env.PORT || 3000}`) 
)