/* 

    For/of

    - Funciona como uma repetição a partir de um valor
    - No array, ele imprime o valor de cada índice
    - For of não dá para utilizar no objeto, pois ele só autoriza acessar
      uma propriedade, e além disso ele vai imprimir cada caractere em uma linha diferente.

*/

let array = ['valor1', 'valor2', 'valor3', 'valor4'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

for (i of array) {
    console.log(i);
}

