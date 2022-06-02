import express from "express";
import { createHotel, getHotels } from "../controllers/hotels.js";

export const router = express.Router();

router.route("/").post(createHotel).get(getHotels);
