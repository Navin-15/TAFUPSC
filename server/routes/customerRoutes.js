const express = require("express");
const Customer = require("../models/Customer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

module.exports = router;
