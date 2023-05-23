const pessoa = {
   idade: 26
}

const marcos = {
   nome: 'Marcos Winther',
   idade: 26,
   __proto__: pessoa
}

console.log(marcos.idade);