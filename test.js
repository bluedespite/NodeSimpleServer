const SerialPort = require("serialport");

SerialPort.list() // returns promise that resolves to list of ports
  // filters for a specific port
  .then((ports) =>
    ports.filter((port) => port.manufacturer.includes("arduino"))
  )
  // logs info
  .then((ports) => {
    console.log("inner", port[0].comName, "outer", port[0]);
    return ports;
  })
  .catch((err) => {});
