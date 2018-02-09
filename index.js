var fs = require("fs");
var path = require("path");
var json = fs.readFileSync(path.join(__dirname, "config.json"));

module.exports = JSON.parse(json);
