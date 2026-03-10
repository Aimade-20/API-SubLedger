const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require("./config/db")

const app = express();
connectDB();
app.use(express.json());