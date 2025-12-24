require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://tafupsc.netlify.app/"
    ],
    methods: ["GET", "POST"],
  }));
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/customers", customerRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
