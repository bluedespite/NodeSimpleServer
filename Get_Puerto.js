const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
let ddata = "";
async function ReadArduino() {
  try {
    list = await SerialPort.list();
    path = list[0].path;
    port = await new SerialPort(path, { baudRate: 9600 });
    parser = await port.pipe(new Readline({ delimiter: "\n" }));
    await parser.on("data", (data) => {
      console.log("got word from arduino:", data);
      //guardar en base de datos
    });
    setInterval(() => port.write("hello from node\n"), 2000);
  } catch {}
}
ReadArduino();
//module.exports.ReadArduino = ReadArduino;
