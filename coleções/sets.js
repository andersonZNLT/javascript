const meuArray = [30, 30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    //os ... são o argumento spread
    //adiciona dentro de um array vazio, os valores de cada posição do set
    return [...mySet];
}

console.log(valoresUnicos(meuArray));