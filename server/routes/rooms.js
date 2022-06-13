import express from "express";
import {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  updateRoomAvailability,
} from "../controllers/rooms.js";
import { verifyAdmin } from "./../middleware/verifyToken.js";

export const router = express.Router();

router.route("/").get(getRooms);
router.route(":/id").put(verifyAdmin, updateRoom).get(getRoom);
router.route("/availability/:id").put(updateRoomAvailability);
router.route("/:hotelid").post(verifyAdmin, createRoom);
router.route("/:id/:hotelid").delete(verifyAdmin, deleteRoom);
