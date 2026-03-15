const Subscription = require("../models/Subscription"); 

// POST /subscriptions
const createSubscription = async (req, res, next) => {
  try {
    
    const newSubscription = await Subscription.create({
      ...req.body, userId: req.user._id
    });
    res.status(201).json(newSubscription); 
  } catch (error) {
    next(error);
  }
};

// GET /subscriptions
const getAllSubscriptions = async (req, res, next) => {
  try {
    
    const subscriptions = await Subscription.find({ userId: req.user._id });
    res.status(200).json(subscriptions); 
  } catch (error) {
    next(error);
  }
};

// GET /subscriptions/:id
const getSubscription = async (req, res, next) => { 
  try {
    const subscription = await Subscription.findById(req.params.id); 
    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }
    if (subscription.userId.toString() !== req.user._id.toString()) { 
      return res.status(403).json({ error: "Access denied" });
    }
    res.status(200).json(subscription);
  } catch (error) {
    next(error);
  }
};

// PUT /subscriptions/:id
const updateSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }
    if (subscription.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Access denied" });
    }
    const updated = await Subscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

// DELETE /subscriptions/:id
const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }
    if (subscription.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Access denied" });
    }
    await Subscription.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Subscription deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSubscription,
  getAllSubscriptions, 
  getSubscription,    
  updateSubscription,
  deleteSubscription
};