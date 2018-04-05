var fs = require('fs');
var palavras = require('./DB');

function decrypt(texto) {
    var txtMinusculoDoArquivo = texto.toLowerCase();
    var banco = palavras().map(function(e){ return e.toLowerCase()});
    var alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var txtDescriptografado = [];
    var txtDescriptografadoPalavraPorPalavra = [];
    var acertos = 0;
    var porcentagemAcerto = 0;

    for(variation=0; variation<27; variation++) {
        acertos = 0;
        porcentagemAcerto = 0
        for (i = 0; i < txtMinusculoDoArquivo.length; i++){
            if(txtMinusculoDoArquivo[i] != ' '){
                for (j = 0; j < alfa.length; j++){
                    if (txtMinusculoDoArquivo[i] == alfa[j]){
                        txtDescriptografado[i] = alfa[(j - variation) % alfa.length];
                        break;
                    }
                }
            }
        else txtDescriptografado[i] = ' ';
        }
        txtDescriptografadoPalavraPorPalavra = txtDescriptografado.join("").split(" ")
        txtDescriptografadoPalavraPorPalavra.forEach(function(e) {
            banco.indexOf(e) > 0? acertos++ : null;
        })
        
        porcentagemAcerto = acertos/txtDescriptografado.length * 100;
        // console.log("txtDescriptografado", txtDescriptografado.join(""))
        // console.log("txtDescriptografado", txtDescriptografado.join("").split(" "))
        console.log("variation", variation)
        console.log("txtDescriptografado.length", txtDescriptografado.length)
        console.log("acertos", acertos)
        console.log("porcentagemAcerto", porcentagemAcerto)
        console.log("")
    }

    // return(txtDescriptografado.join(""));
}

module.exports = function decriptaArq(encryptedText) {
    var ehPraSalvarEsse = 0;
    ehPraSalvarEsse = decrypt(encryptedText)
    // if(ehPraSalvarEsse)
    //     fs.writeFile(`./decryptedTextFiles/writtenFile${variation}.txt`, ehPraSalvarEsse, function(err) {
    //         if(err) throw err;
    //         console.log('Arquivo escrito com sucesso');
    //     })
  }