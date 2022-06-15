//solução 1
function verificaPalindormo(string) {
    if(!string) return "string inexistente"; //verificamos se realmente é uma string

    return string.split("").reverse().join("") === string;
}

//console.log(verificaPalindormo("ama"));


//solução 2
function verificaPalindormo2(string) {
    if(!string) return "string inexistente";

    //vamos fazer apenas metade dos loops pois vamos fazer duas checagens dentro do laço
    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindormo2("abba"));