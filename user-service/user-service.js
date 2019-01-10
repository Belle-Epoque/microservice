import { send, json } from "micro";
import { router, get, post } from "microrouter";

import compose from "./helpers/compose";
import {
  loggerDecorator as logger,
  myDecoratorWithParams
} from "./helpers/decorator";

const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`);

const user = async (req, res) => {
  const body = await json(req);
  send(res, 201, body);
};

const notfound = (req, res) =>
  send(res, 404, "Not found route for user service");

const userService = router(
  get("/hello/:who", hello),
  get("/*", notfound),
  post("/user", user),
  post("/*", notfound)
);

export default compose(
  logger,
  myDecoratorWithParams("param1", "param2")
)(userService);
