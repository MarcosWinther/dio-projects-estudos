class Pessoa {
   constructor(nome) {
      this.nome = nome;
   }
}

const lista = [new Pessoa('Marcos'), new Pessoa('Thaís'), new Pessoa('Luana')];

/*
const listaNomes = [];

for(let i = 0; i < lista.length; i++) {
   const element = lista[i];
   listaNomes.push(element.nome)
}

console.log(listaNomes);
*/

// Map - transformação de um elemento em outro

const listaNomes = lista.map((element) => element.nome);

console.log(listaNomes);