import { Schema } from "mongoose";
import db from "../databases/data-wallet.js";

const loginMethods = [
  "google",
  "email",
  "facebook",
  "discord",
  "twitter",
  "instagram",
];

const userSchema = new Schema(
  {
    personalInfo: {
      name: { type: String },
      username: {
        name: { type: String, required: true },
        tag: { type: Number, required: true },
      },
      email: { type: String, required: true },
      pictureUrl: { type: String },
      about: { type: String },
      timezone: { type: String },
    },
    credentials: {
      ids: [{ type: Map, of: String }],
      loginMethod: {
        type: String,
        enum: loginMethods,
        default: loginMethods[0],
      },
      lastLogin: { type: Date },
    },
    auth: {
      password: { type: String },
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const User = db.model("User", userSchema);
