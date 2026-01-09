const express = require("express");
const Leads = require("../models/Customer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const leads = new Leads(req.body);
    await leads.save();
    res.status(201).json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  const leads = await Leads.find();
  res.json(leads);
});

module.exports = router;
