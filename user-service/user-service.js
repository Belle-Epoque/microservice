import babelRegister from "babel-register";

babelRegister({
  presets: ["env"]
});

const userService = () => "User service started 3";

export default userService;
