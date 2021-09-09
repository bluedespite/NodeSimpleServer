const mongoose = require("mongoose");
const lectura = {
  FECHA_HORA: "2021-09-09 14:40:23",
  LATITUD: "0.000000",
  LONGITUD: "0.000000",
  VELOCIDAD: "0.00",
  AN0: "126",
  AN1: "134",
  AN2: "143",
  AN3: "201",
  AN4: "284",
  AN5: "345",
};

async function savedb(lectura) {
  mongoose.connect(
    "mongodb://admin:admin@127.0.0.1:27017/MAINDB?authSource=admin&w=1"
  );
  const Schema = new mongoose.Schema(
    { tag: String, medida: Number },
    { collection: "ArduinoDB" }
  );
  const Arduino = mongoose.model("Arduino", Schema);
  const elemento = new Arduino(lectura);
  elemento.save().then(() => console.log("meow"));
}
savedb(lectura);
