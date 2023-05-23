// vetores ou arrays

// como declrar um array
let array = ['string', 1, true];
console.log(array);
console.log(array[0]);

let animacao = ['Bob Esponja', 'Batman', 'Scooby-Doo', 'Digimon', 'Pokemon', 'Ben 10'];

// forEach - itera um array
animacao.forEach(
    function(item, index) {
        console.log(item, index)
    }
);

// push - add item no final do array
animacao.push('Dragon Ball');
console.log(animacao);

// pop - remove item no final do array
animacao.pop();
console.log(animacao);

// shift - remove item no início do array
animacao.shift();
console.log(animacao);

// unshift - add item no início do array
animacao.unshift('As três espiãs demais');
console.log(animacao);

// indexOf - retorna o índice de um valor
console.log(animacao.indexOf('Scooby-Doo'));

// splice - remove ou substitui um item pelo índice
animacao.splice(4, 5);
console.log(animacao);

// slice - retorna uma parte de um array existente
let novoArray = animacao.slice(1, 3);
console.log(novoArray);

/*
Objetos 
*/

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objetoInterno: {
        objetoInterno: 'objeto interno'
    }
};

console.log(object);
console.log(object.boolean);

// Destruturação de uma array
let arrayInterno = object.array;
console.log(arrayInterno);

let {string, boolean, objetoInterno} = object;
console.log(string, boolean, objetoInterno);