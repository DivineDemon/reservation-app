import express from "express";
import {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "./../middleware/verifyToken.js";

export const router = express.Router();

router.route("/").post(verifyAdmin, createHotel).get(getHotels);
router
  .route("/:id")
  .get(getHotel)
  .put(verifyAdmin, updateHotel)
  .delete(verifyAdmin, deleteHotel);
