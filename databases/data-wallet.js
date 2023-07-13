import mongoose from "mongoose";

const db = "mongodb://localhost:27017/data-wallet";

const datawalletConnection = mongoose.createConnection(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

datawalletConnection.on("connected", () => {
  console.log("Connected to database");
});

datawalletConnection.on("error", (err) => {
  console.error("Error connecting to database:", err);
});

export default datawalletConnection;
