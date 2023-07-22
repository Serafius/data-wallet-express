import { Router } from "express";

import google from "./google.js";

const router = Router();
router.use("/google", google);

export default router;
