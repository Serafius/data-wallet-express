import { Router } from "express";

import user from "./user.js";
import auth from "./auth/index.js"

const router = Router();
router.use("/user", user).use("/auth", auth);

export default router;