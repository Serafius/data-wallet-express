import express from "express";
import cors from "cors";
import "dotenv/config";

import { router } from "./routes/index.js";
import { overrideLogs } from "./utilities/overrideLogs.js";

const app = express();
const port = process.env.PORT

app.use(cors());
overrideLogs();

app.use("/", router);

app.listen(port, () => {
  console.log("Connected API to " + port);
});
