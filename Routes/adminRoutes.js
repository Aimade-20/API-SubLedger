const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddlewase");
const roleMiddleware = require("../middlewares/rouleMiddkeware");

// GET /admin/users 
router.get("/users", authMiddleware, roleMiddleware("admin"), getAllUsers);

module.exports = router;