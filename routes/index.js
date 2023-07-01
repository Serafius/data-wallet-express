import { Router } from "express";

import script from "./script.js";
import api from "./api/index.js";

export const router = Router();
router.use("/script", script).use("/api", api);
