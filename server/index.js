import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";

// Configured .env
dotenv.config({ path: "../.env" });

// Importing Routes
import { router as authRouter } from "./routes/auth.js";
import { router as userRouter } from "./routes/users.js";
import { router as hotelRouter } from "./routes/hotels.js";
import { router as roomRouter } from "./routes/rooms.js";

// Initializing Express App + MongoDB
connectDB();
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);

// Error Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
});

// Starting the App
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
