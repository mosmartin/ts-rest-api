import dotenv from "dotenv";
import express from "express";

import { connect } from "./utils/connect";
import { log as logger } from "./utils/logger";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.listen(port, async () => {
  await connect();
  logger.info(`🚀 server running at http://localhost:${port}`);
});
