module.exports = function encrypt(texto) {
    var txtMinusculoDoArquivo = texto.toLowerCase();
    var txtMinusculoDoArquivoEmArray = txtMinusculoDoArquivo.split('');
    var txtCriptografado = [];

    txtCriptografado = txtMinusculoDoArquivoEmArray.map((e)=> {
        if(e!=' ')
            return indice[e]
        return e
    })
    return(txtCriptografado.join(""));
}


indice = {
    a: 'q',
    b: 'a',
    c: 'z',
    d: 'w', 
    e: 's',
    f: 'x',
    g: 'e',
    h: 'd',
    i: 'c',
    j: 'r',
    k: 'f',
    l: 'v',
    m: 't',
    n: 'g', 
    o: 'b', 
    p: 'y', 
    q: 'h',
    r: 'n',
    s: 'u',
    t: 'j',
    u: 'm',
    v: 'i',
    x: 'k',
    y: 'o',
    w: 'l',
    z: 'p',
}