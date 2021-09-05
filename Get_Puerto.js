const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const p = SerialPort.list(); //promise

exports.getp = function (puerto) {
  p.then(function (list) {
    list.forEach(function (port) {
      try {
        if (port.manufacturer.includes("arduino")) {
          puerto = port.path;
          console.log(puerto);
        }
      } catch (err) {}
    });
    return puerto;
  });
};
