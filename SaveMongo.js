const mongoose = require("mongoose");
const lectura = { tag: "prueba", medida: 1.5 };

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
