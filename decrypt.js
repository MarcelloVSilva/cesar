var fs = require('fs');

module.exports = function decrypt(texto, variacao) {
    var txtMinusculoDoArquivo = texto.toLowerCase();
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var txtDescriptografado = [];

    for (var i = 0; i < txtMinusculoDoArquivo.length; i++){
        if(txtMinusculoDoArquivo[i] != ' '){
            for (var j = 0; j < alfa.length; j++){
                if (txtMinusculoDoArquivo[i] == alfa[j]){
                txtDescriptografado[i] = alfa[(j - variacao) % alfa.length];
                break;
                }
            }
        }
    else txtDescriptografado[i] = ' ';
    }

    // Criação e escrita de arquivo
    fs.appendFile('./decryptedTextFiles/writtenFile.txt', txtDescriptografado.join(""), function (err) {
      if (err) throw err;
      console.log('Arquivo escrito com sucesso!');
    });

    return(txtDescriptografado.join(""));
}
