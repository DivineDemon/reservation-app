import cors from "cors";
import dotenv from "dotenv";

import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";

// Configured .env
dotenv.config({ path: "../.env" });

// Importing Routes

// Initializing Express App + MongoDB
connectDB();
const app = express();

// Middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", (req, res) => {
  res.status(200).json({ message: "Base URL Working!" });
});

// Starting the App
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
