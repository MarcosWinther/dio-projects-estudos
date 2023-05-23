const lista = [1, 2, 3];

console.log(lista.join('/'));

const nomes = [{nome: 'Marcos'}, {nome: 'Thaís'}, {nome: 'Luana'}, {nome: 'Max'}];

console.log(nomes.map((e) => e.nome).join('; '));

console.log(
nomes.map((e) => e.nome)
   .filter((e) => e.startsWith('M'))
   .join('; ')
);

const elementoEmHTML = nomes.filter((e) => e.nome.startsWith('M'))
   .map((e) => `<li>${e.nome}</li>`)
   .join('');

console.log(elementoEmHTML);