import { Router } from "express";
import { findUserById } from "../controllers/profile.controllers.js";


const router = Router();


router.route("/profile").post(findUserById);

export default router;