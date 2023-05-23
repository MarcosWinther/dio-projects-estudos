let nome = 'Marcos Winther';
let sobrenome = 'Silva Carreiro';

console.log(`Nome completo: ${nome} ${sobrenome}.`);

console.log(nome.length);

let exemplo = new String("blablabla");
console.log(typeof (exemplo));
console.log(exemplo);

console.log(nome[1]);
console.log(nome.length);
// Obs.: Não confundi índice com tamanho

let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

let frase = "Hello World!";
console.log(frase.split(" "));

console.log(frase.includes("Hello")); // procura na string a palavra que procura

console.log(frase.startsWith("H")); // verfifica se começa com o caractere pedido

console.log(frase.endsWith("!")); // verfifica se termina com o caractere pedido
