import express from "express";
import { register } from "../controllers/auth.js";

export const router = express.Router();

router.route("/register").post(register);
