import { Schema } from "mongoose";
import db from "../databases/data-wallet.js";

const documentSchema = new Schema({
  
});

export const Document = db.model("Document", documentSchema);
