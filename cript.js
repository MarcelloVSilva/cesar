var encrypt = require('./encrypt');
var decrypt = require('./decrypt');

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "file.txt");

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) {
         var encryptedText = encrypt(texto);
         var decryptedText = decrypt(encryptedText, 5);
         console.log(encryptedText);
         console.log(decryptedText);
    } else {
        console.log(err);
    }
});
