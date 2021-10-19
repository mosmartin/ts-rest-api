import dotenv from "dotenv";
import express from "express";

import { connect } from "./utils/connect";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.listen(port, async () => {
  await connect();
  console.log(`\n🚀 server running on port ${port}`);
});
