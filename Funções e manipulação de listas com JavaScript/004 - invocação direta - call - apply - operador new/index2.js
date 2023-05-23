const pessoa = {
   nome: 'Marcos Winther',
   idade: 30
}

function gritar(prefixo) {
   console.log(prefixo, this.nome);
}

gritar.apply(pessoa, ['Olá']);
gritar.call(pessoa, 'Oláaaa');