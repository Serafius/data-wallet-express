import { Router } from "express";
import { getUser, createUser } from "../../controllers/user/index.js";

const router = Router();
router.get("/search/:id", getUser).post("/create", createUser);

export default router;
