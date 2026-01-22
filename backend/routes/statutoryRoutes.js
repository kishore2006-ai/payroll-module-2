const express = require("express");
const router = express.Router();
const StatutoryRule = require("../models/StatutoryRule");

// CREATE statutory rules
router.post("/", async (req, res) => {
  try {
    const rule = new StatutoryRule(req.body);
    await rule.save();
    res.status(201).json(rule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET statutory rules
router.get("/", async (req, res) => {
  const rules = await StatutoryRule.find();
  res.json(rules);
});

module.exports = router;
