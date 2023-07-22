import { Router } from "express";
import { createAuthUrl } from "../../../controllers/auth/google/index.js";

const router = Router();
router.get("/callback", createAuthUrl)

export default router;
