var encrypt = require('./encrypt');
var decrypt = require('./decrypt');

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "file.txt");

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) {
         var encryptedText = encrypt(texto);
         console.log(encryptedText);

         for(variacao=0; variacao<=20; variacao++) {
           fs.writeFile(`./decryptedTextFiles/writtenFile${variacao}.txt`, decrypt(encryptedText, variacao), function(err) {
             if(err) throw err;
             console.log('Arquivo escrito com sucesso');
           })
         }

    } else {
        console.log(err);
    }
});
