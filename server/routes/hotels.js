import express from "express";
import {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotels.js";
import { verifyAdmin } from "./../middleware/verifyToken.js";

export const router = express.Router();

router.route("/").post(verifyAdmin, createHotel).get(getHotels);
router
  .route("/:id")
  .put(verifyAdmin, updateHotel)
  .delete(verifyAdmin, deleteHotel);
router.route("/find/:id").get(getHotel);
router.route("/countByCity").get(countByCity);
router.route("/countByType").get(countByType);
router.route("/room/:id").get(getHotelRooms);
