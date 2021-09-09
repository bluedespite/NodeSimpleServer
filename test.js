const word =
  "got word from arduino|LATITUD=0.000000|LONGITUD=0.000000|VELOCIDAD=0.00|FECHA_HORA=INVALID DATETIME|AN0=0|AN1=0|AN2=0|AN3=0|AN4=0|AN5=0";

function AjusteWord(word) {
  var newword, MSG;
  newword = word.split("|");
  MSG = {
    FECHA_HORA: newword[4].split("=")[1],
    LATITUD: newword[1].split("=")[1],
    LONGITUD: newword[2].split("=")[1],
    VELOCIDAD: newword[3].split("=")[1],
    AN0: newword[5].split("=")[1],
    AN1: newword[6].split("=")[1],
    AN2: newword[7].split("=")[1],
    AN3: newword[8].split("=")[1],
    AN4: newword[9].split("=")[1],
    AN5: newword[10].split("=")[1],
  };
  return MSG;
}

console.log(AjusteWord(word));
