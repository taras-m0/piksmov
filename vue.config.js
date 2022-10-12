const path = require("path");

// Alias for WebStorm IDE
function resolve(dir) {
  return path.join(`${__dirname}/src`, dir);
}

module.exports = {
  outputDir: "./docs",
};
