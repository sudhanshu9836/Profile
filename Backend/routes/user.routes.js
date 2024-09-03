import { Router } from "express";
import { upload } from "../middleware/multer.middleware";
import { registerUser } from "../controllers/user.controllers";

const router = Router();

router.route("/register").post( upload.fields([
    {
        name: "avatar",
        maxCount: 1
    }
]) ,registerUser)

export default router;