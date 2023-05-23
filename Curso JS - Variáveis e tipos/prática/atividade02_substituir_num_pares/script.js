/*
    Substituir  números pares

    - Troque todos os elementos pares e diferentes de zero de um array
      pelo número 0. Se o array for vazio, retorne -1;

*/

function substituiNumPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("O valor já é zero");
        } else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} pelo número 0.`);
            array[i] = 0;
        }
    }

    return console.log(array);
}


let Input = [1, 2, 3, 4, 5, 6, 7, 8];

substituiNumPares(Input);