import { json } from "micro";
import query from "micro-query";

import logger from "./logger";

const POST = "POST";

export const loggerDecorator = fn => async (req, res, ...args) => {
  const { method, url, headers, params = null } = req;
  const q = query(req);

  logger.info("micro router params", {
    method,
    url,
    headers,
    ...(params && { params }),
    ...(q && { query: q }),
    ...(method === POST && { body: await json(req) })
  });

  return fn(req, res, ...args);
};

export const myDecoratorWithParams = (...options) => fn => async (
  req,
  res,
  ...args
) => {
  logger.info("myDecoratorWithParam - options", options);

  return fn(req, res, ...args);
};
