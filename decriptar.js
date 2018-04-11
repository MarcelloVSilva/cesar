var decriptaArq = require('./decrypt');

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "txtParaDecript.txt");

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) {
        console.log("texto lido: ",texto);

        var decriptografado = decriptaArq(texto);
        console.log("texto decriptografado: ",decriptografado);
    }
});
