// server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");
const connectDB = require("./config/db");


const PORT = process.env.PORT || 5000;
console.log("MONGO_URI:", process.env.MONGO_URI);


const app = express();

// connect to database
connectDB();

// middleware
app.use(express.json());
app.use(cors({
  origin: "https://your-vercel-app.vercel.app"
}));
// routes
app.use("/api/auth", authRoutes);

app.get("/profile", authMiddleware, (req, res) => {
  res.send("Welcome user " + req.user.userId);
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);