function Pessoa(nome, idade) {
   this.nome = nome;
   this.idade = idade;
}

Pessoa.prototype.falar = function () {
   console.log(`Meu nome é: ${this.nome}`);
}

const marcos = new Pessoa('Marcos Winther', 26);
console.log(typeof marcos);
console.log(marcos);
marcos.falar();