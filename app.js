const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const connectDB = require("./config/db");

const app = express()
connectDB()

app.use(express.json())

// test route
app.get("/", (req, res) => {
  res.json({ message: "server is working!" })
})

app.use((err, req, res, next) => {
  const status = err.statusCode || 500
  res.status(status).json({ error: err.message || "Server Error" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})

module.exports = app