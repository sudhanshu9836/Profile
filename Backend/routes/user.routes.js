import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post( upload.fields([
    {
        name: "avatar",
        maxCount: 1
    }
]) ,registerUser)

router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

export default router;