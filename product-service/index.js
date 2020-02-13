// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require("babel-register")({
  presets: ["env", "es2015", "stage-0"]
});

require("babel-polyfill");

// Import the rest of our application.
module.exports = require("./product-service.js");
