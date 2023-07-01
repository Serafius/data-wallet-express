import { Router } from "express";
import {
    testConnection,
} from "../controllers/script/index.js";

const router = Router();
router
  .get("/test", testConnection)

export default router;
