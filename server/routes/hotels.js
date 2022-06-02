import express from "express";
import { createHotel, getHotels, getHotel } from "../controllers/hotels.js";

export const router = express.Router();

router.route("/").post(createHotel).get(getHotels);
router.route("/:id").get(getHotel);
