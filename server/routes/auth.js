import express from "express";
import { register, login } from "../controllers/auth.js";

export const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
