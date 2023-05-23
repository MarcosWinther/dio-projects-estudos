function Pessoa(nome, idade) {
   this.nome = nome;
   this.idade = idade;
}

Pessoa.prototype.falar = function () {
   console.log(`Meu nome é: ${this.nome}`);
}

const marcos = new Pessoa('Marcos', 26);

console.log(marcos);
marcos.falar();