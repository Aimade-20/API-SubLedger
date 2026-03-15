const express = require("express");
const router = express.Router();
const {
  createSubscription,
  getAllSubscriptions,
  getSubscription,
  updateSubscription,
  deleteSubscription
} = require("../controllers/subscriptionControl");
const authMiddleware = require("../middlewares/authMiddlewase");
const { body } = require("express-validator");
const validate = require("../middlewares/validationMiddleware");

// validation rules 
const subscriptionValidation = [
  body("name").notEmpty().withMessage("name is required"),
  body("price").isFloat({ gt: 0 }).withMessage("price must be greater than 0"),
  body("billingCycle")
    .isIn(["monthly", "yearly"])
    .withMessage("billingCycle must be monthly or yearly"),
];


router.post("/", authMiddleware, subscriptionValidation, validate, createSubscription);
router.get("/", authMiddleware, getAllSubscriptions);
router.get("/:id", authMiddleware, getSubscription);
router.put("/:id", authMiddleware, subscriptionValidation, validate, updateSubscription);
router.delete("/:id", authMiddleware, deleteSubscription);

module.exports = router;