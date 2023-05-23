/* 

    For/in

    - Funciona como uma repetição a partir de uma propriedade
    - No array, imprime o índice
    - No object imprime a propriedade.

*/

let array = ['valor1', 'valor2', 'valor3', 'valor4'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}