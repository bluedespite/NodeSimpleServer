const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');


async function Arduino_Comm() {
    const p = await SerialPort.list();
    const path = select_port(p);
    const port = await new SerialPort(path, { baudRate: 9600 });
    const parser = port.pipe(new Readline({ delimiter: '\n' }));
    await parser.on('data', data =>{
        console.log('got word from arduino:', data.toString());
      });
    
    await parser.on('error', err =>{
        console.log('Error :', errmesage);
      });
    await setTimeout(() => {port.write('hello from node\n', (err) => {
    if (err) {
        return console.log('Error on write: ', err.message);
    }
    console.log('message written');
    port.close;
    }); }, 2000);
    }
function select_port(p){
    var path='';
    p.forEach(function(port){
        try{
            if (port.manufacturer.includes('arduino')){
                path=port.path;
            }}
        catch(err){}   
});
    return path;
}

module.exports  data = data;