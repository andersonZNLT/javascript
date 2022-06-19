const arr = [1, 2];

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

console.log(somaNumeros(arr));
