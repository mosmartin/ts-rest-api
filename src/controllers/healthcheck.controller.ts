import { RequestHandler } from "express";

export const healthCheck: RequestHandler = (req, res, next) => {
  res.sendStatus(200);
};
