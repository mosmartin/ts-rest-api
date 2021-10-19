import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connect = async () => {
  const dbUrl = process.env.DB_URI;

  try {
    await mongoose.connect(dbUrl!);
    console.log("🟢 dbconn successful");
  } catch (error) {
    console.log("🔴 dbconn failed");
    console.log(error);
    process.exit(1);
  }
};
