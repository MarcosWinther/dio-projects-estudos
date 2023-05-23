function Pessoa(nome, idade) {
   this.nome = nome;
   this.idade = idade;
}

Pessoa.prototype.falar = function () {
   console.log(`Meu nome é: ${this.nome}`);
}

const marcos = {
   genero: 'masculino'
}

Pessoa.call(marcos, 'Marcos', 30);

console.log(marcos);