import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import { verifyUser, verifyAdmin } from "./../middleware/verifyToken.js";

export const router = express.Router();

router.route("/").get(verifyAdmin, getUsers);
router
  .route("/:id")
  .get(verifyUser, getUser)
  .put(verifyUser, updateUser)
  .delete(verifyUser, deleteUser);
