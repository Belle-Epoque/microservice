import { send } from "micro";
import { router, get } from "microrouter";

const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`);

const notfound = (req, res) =>
  send(res, 404, "Not found route for user service");

const userService = router(get("/hello/:who", hello), get("/*", notfound));

const myDecorator = fn => async (req, res) => {
  console.log("DEBUG micro router params", {
    req,
    res
  });

  return fn(req, res);
};

export default myDecorator(userService);
