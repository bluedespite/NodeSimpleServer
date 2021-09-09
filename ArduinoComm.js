const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const mongoose = require("mongoose");

async function ReadArduino() {
  try {
    mongoose.connect(
      "mongodb://admin:admin@127.0.0.1:27017/MAINDB?authSource=admin&w=1"
    );
    const Schema = new mongoose.Schema(
      {
        FECHA_HORA: String,
        LATITUD: Number,
        LONGITUD: Number,
        VELOCIDAD: Number,
        AN0: Number,
        AN1: Number,
        AN2: Number,
        AN3: Number,
        AN4: Number,
        AN5: Number,
      },
      { collection: "ArduinoDB" }
    );
    const Arduino = mongoose.model("Arduino", Schema);
    list = await SerialPort.list();
    path = list[0].path;
    port = await new SerialPort(path, { baudRate: 9600 });
    parser = await port.pipe(new Readline({ delimiter: "\n" }));
    await parser.on("data", (data) => {
      var elemento = new Arduino(AjusteWord(data));
      elemento.save().then(() => console.log("Exito!"));
      //guardar en base de datos
    });
    setInterval(() => port.write("hello from node\n"), 2000);
  } catch {}
}

function AjusteWord(word) {
  var newword, MSG;
  newword = word.split("|");
  MSG = {
    FECHA_HORA: newword[3].split("=")[1],
    LATITUD: newword[0].split("=")[1],
    LONGITUD: newword[1].split("=")[1],
    VELOCIDAD: newword[2].split("=")[1],
    AN0: newword[4].split("=")[1],
    AN1: newword[5].split("=")[1],
    AN2: newword[6].split("=")[1],
    AN3: newword[7].split("=")[1],
    AN4: newword[8].split("=")[1],
    AN5: newword[9].split("=")[1].trimRight("\r"),
  };
  return MSG;
}

ReadArduino();
//module.exports.ReadArduino = ReadArduino;
