import { Schema } from "mongoose";
import db from "../databases/data-wallet.js";

const fieldTypes = ["text", "radio", "check", "menu", "date", "number", "email", "textarea"];

const formSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    details: { type: String },

    sections: [
      {
        title: { type: String, required: true },
        fields: [
          {
            label: { type: String, required: true },
            type: { type: String, enum: fieldTypes, required: true },
            required: { type: Boolean, default: false }, // Indicates if the field is required to be filled
            options: { type: [String], required: function() { return ['radio', 'check', 'menu'].includes(this.type); } }, // Options for radio, check, and menu field types
            default: { type: Schema.Types.Mixed }, // Default value for the field
            placeholder: { type: String }, // Placeholder for the field
          },
        ],
      }
    ],
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Form = db.model("Form", formSchema);
