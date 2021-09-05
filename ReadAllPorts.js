const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const p = require("./Get_Puerto.js");
pp = p.getName.then(function (path) {
  console.log(path);
});
