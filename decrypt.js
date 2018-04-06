var fs = require('fs');
var palavras = require('./DB');

function decryptAndSave(texto) {
    var txtMinusculoDoArquivo = texto.toLowerCase();
    var banco = palavras().map(function(e){ return e.toLowerCase()});
    var alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var txtDescriptografado = [];
    var txtDescriptografadoPalavraPorPalavra = [];
    var todosOsTextos = [];

    var acertos = 0;

    var porcentagensAcerto = [];

    for(variation=0; variation<26; variation++) {
        acertos = 0;
        porcentagemAcerto = 0
        for (i = 0; i < txtMinusculoDoArquivo.length; i++){
            if(/[a-z]/g.test(txtMinusculoDoArquivo[i])){
                for (j = 0; j < alfa.length; j++){
                    if (txtMinusculoDoArquivo[i] == alfa[j]){
                        txtDescriptografado[i] = alfa[(j - variation) % alfa.length];
                        break;
                    }
                }
            }
        else txtDescriptografado[i] = txtMinusculoDoArquivo[i];
        }
        txtDescriptografadoPalavraPorPalavra = txtDescriptografado.join("").split(" ")
        txtDescriptografadoPalavraPorPalavra.forEach(function(e) {
            banco.indexOf(e) > 0? acertos++ : null;
        })

        porcentagemAcerto = acertos/txtDescriptografado.length * 100;
        porcentagensAcerto.push(porcentagemAcerto);

        todosOsTextos.push(txtDescriptografado.join(""));
    }

    var indiceMaiorPorcentagem = porcentagensAcerto.indexOf(Math.max(...porcentagensAcerto));

    fs.writeFile(`./decryptedTextFiles/textoDescriptografado.txt`, todosOsTextos[indiceMaiorPorcentagem], function(err) {
        if(err) throw err;
        console.log('Arquivo escrito com sucesso');
    })

    return todosOsTextos[indiceMaiorPorcentagem];
}

module.exports = function decriptaArq(encryptedText) {
    // var ehPraSalvarEsse = 0;
    return ehPraSalvarEsse = decryptAndSave(encryptedText)
    // if(ehPraSalvarEsse)
    //     fs.writeFile(`./decryptedTextFiles/writtenFile${variation}.txt`, ehPraSalvarEsse, function(err) {
    //         if(err) throw err;
    //         console.log('Arquivo escrito com sucesso');
    //     })
  }
