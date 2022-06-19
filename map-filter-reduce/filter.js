const numeros = [2, 3, 6, 5, 10]

let mult = [];

for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] % 2 === 0) {
    mult.push(numeros[i]);
   } 
}

const numerosFiltrados = numeros.filter(function(numero) {
    return numero % 2 === 0 //já retornamos true ou false nessa operação
})

console.log('Numeros Filtrado: ', numerosFiltrados);