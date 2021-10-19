import dotenv from "dotenv";
import mongoose from "mongoose";

import { log as logger } from "./logger";

dotenv.config();

export const connect = async () => {
  const dbUrl = process.env.DB_URI;

  try {
    await mongoose.connect(dbUrl!);
    logger.info("🟢 dbconn successful");
  } catch (error) {
    logger.error("🔴 dbconn failed");
    logger.error(error);
    process.exit(1);
  }
};
