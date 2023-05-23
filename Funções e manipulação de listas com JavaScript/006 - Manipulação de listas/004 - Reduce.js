const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const somaTodosOsNumeros = lista.reduce((previuos, current) => {
   return previuos + current;
});

console.log(somaTodosOsNumeros);

// Reduce percorre a lista e reduz a lista em único valor