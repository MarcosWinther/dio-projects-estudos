const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listaDeNumerosPares = lista.filter((element) => {
   return (element % 2 === 0);
});

console.log(listaDeNumerosPares);

// Filter - gera outra lista sem alterar a lista consultada e devolve os valores true
// da condição em outra lista