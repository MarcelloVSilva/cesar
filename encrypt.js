module.exports = function encrypt(texto) {
    var txtMinusculoDoArquivo = texto.toLowerCase();
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var variacao = 5
    var txtCriptografado = [];

    for (var i = 0; i < txtMinusculoDoArquivo.length; i++){
        if(txtMinusculoDoArquivo[i] != ' '){
            for (var j = 0; j < alfa.length; j++){
                if (txtMinusculoDoArquivo[i] == alfa[j]){
                txtCriptografado[i] = alfa[(j + variacao) % alfa.length];
                break;
                }
            }
        }
    else txtCriptografado[i] = ' ';
    }
    return(txtCriptografado.join(""));
}
