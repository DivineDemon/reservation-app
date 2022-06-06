import express from "express";
import {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/rooms.js";
import { verifyAdmin } from "./../middleware/verifyToken.js";

export const router = express.Router();

router.route("/").get(getRooms);
router.route(":/id").put(verifyAdmin, updateRoom).get(getRoom);
router.route("/:hotelid").post(verifyAdmin, createRoom);
router.route("/:id/:hotelid").delete(verifyAdmin, deleteRoom);
