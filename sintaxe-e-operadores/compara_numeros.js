let input1 = 5;
let input2 = 1;
let sumResult = 0;

//vamos retornar apenas o texto que precisamos
function compareNumbers(input1, input2) {
    return input1 == input2 ? 'são iguais.' : 'não são iguais.';
}

function sum(input1, input2) {
    sumResult =  input1 + input2;
}

//chama a funcao passando os inputs
sum (input1, input2);

//recebemos por parametro o valor que quermos comparar com o resultado da soma e retornamos o texto
function greaterOrLess(value) {
    return sumResult > value ? 'maior' : 'menor'
}

console.log('Os números', input1, 'e', input2, compareNumbers(input1, input2),
            'Sua soma é', sumResult, ', que é', 
            greaterOrLess(10), 'que 10 e',
            greaterOrLess(20), 'que 20.');