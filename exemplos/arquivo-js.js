// (let) tipo de variável que pode ser declarada apenas uma vez
let array = [1, 2, 4, 5, 7, 8];

// var para armazenar um array com os numeros pares
let evenNums = [];

function returnEvenValues(array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] %2 === 0) {
            evenNums.push (array[i]);
        }
    }

    console.log('Os números pares são: ', evenNums);
}

returnEvenValues(array);