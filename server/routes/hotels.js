import express from "express";
import { createHotel } from "../controllers/hotels.js";

export const router = express.Router();

router.route("/").post(createHotel);
