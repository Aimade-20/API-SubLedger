const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerUser, loginUser } = require("../controllers/authController");
const validate = require("../middlewares/validationMiddleware");

const registerValidation = [
  body("name")
  .notEmpty()
  .withMessage("name is required"),
  body("email")
  .isEmail()
  .withMessage("valid email is required"),
  body("password")
  .isLength({ min: 8 })
  .withMessage("password must be at least 8 chracters"),
];
const loginValidation = [
  body("email").isEmail().withMessage("valid email is required"),
  body("password").notEmpty().withMessage("password is required"),
];
        router.post("/register", registerValidation, validate, registerUser);
router.post("/login", loginValidation, validate, loginUser); 

    module.exports = router
