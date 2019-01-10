import { json } from "micro";
import logger from "./logger";

const POST = "POST";

export const loggerDecorator = fn => async (req, res) => {
  const { method, url, headers } = req;

  logger.info("DEBUG micro router params", {
    method,
    url,
    headers,
    ...(method === POST && { body: await json(req) })
  });

  return fn(req, res);
};
