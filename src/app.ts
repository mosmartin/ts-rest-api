import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";

import { connect } from "./utils/connect";
import { log as logger } from "./utils/logger";
import healthCheckRouter from "./routes/healthcheck.routes";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use("/api/healthcheck", healthCheckRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, async () => {
  await connect();
  logger.info(`🚀 server running at http://localhost:${port}`);
});
