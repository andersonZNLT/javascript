function substituiPares(array) {
    //verifica se o array é valido OU se o tamanho dele não é zero
    if(!array || !array.length) return -1;

    for(let i = 0; i < array.length; i++) {
        //se já é zero, não temos o que fazer...
        if(array[i] === 0) {
            console.log("Você já é zero!")
        //se o resto da divisão for zero, é par! vamos substituir por zero
        } else if(array[i] % 2 === 0) {
            console.log(`substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));