var encrypt = require('./encrypt');
var decrypt = require('./decrypt');

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "file.txt");

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) {
         var encryptedText = encrypt(texto);
         console.log(encryptedText);

         writeMultipleFiles(encryptedText);

    } else {
        console.log(err);
    }
});

function writeMultipleFiles(encryptedText) {
  for(variation=0; variation<=26; variation++) {
    fs.writeFile(`./decryptedTextFiles/writtenFile${variation}.txt`, decrypt(encryptedText, variation), function(err) {
      if(err) throw err;
      console.log('Arquivo escrito com sucesso');
    })
  }
}
