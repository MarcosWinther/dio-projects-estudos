// orientação a prótipo - um objeto onde o objeto está se baseando

const pessoa = {
   genero: 'masculino'
}

const marcos = {
   nome: "Marcos Winther",
   idade: 26,
   __proto__: pessoa
}

console.log(marcos);
console.log(marcos.genero);