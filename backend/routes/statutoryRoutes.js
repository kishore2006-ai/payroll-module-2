const express = require("express");
const router = express.Router();
const StatutoryRule = require("../models/StatutoryRule");

// POST - Save statutory config
router.post("/", async (req, res) => {
  try {
    const rule = new StatutoryRule(req.body);
    await rule.save();
    res.status(201).json({ message: "Saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Fetch statutory config
router.get("/", async (req, res) => {
  const rules = await StatutoryRule.find();
  res.json(rules);
});

module.exports = router;
