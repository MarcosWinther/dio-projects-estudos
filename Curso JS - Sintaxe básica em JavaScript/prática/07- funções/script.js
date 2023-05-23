/* 

    Function

    - Geralmente se utiliza a palavra reservada "function" seguida de
      parênteses "()" e chaves "{}"

    () - indica que é um objeto do tipo function;
    {} - indica que é um bloco de instrução;

*/

function funcao() {
    console.log("Bem vindo Marcos Winther!");
}

funcao();

/*

    Funções com parâmetros

    - As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua 
      atribuição pode ser feita durante a chamada da função.

*/

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}

mensagem('Hello', 'World!');