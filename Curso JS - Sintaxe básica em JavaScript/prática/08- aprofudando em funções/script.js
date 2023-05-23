/* --------------------------------------------------
    Tipos de função 

-------------------------------------------------- */

/*
    Função declarativa

    - São funções que possuem o uso mais comum, deve ser declarada
      usando a palavra reservada function seguida do nome da função,
      parênteses "()" e chaves "{}".

*/
function funcao() {
    console.log('Mensagem de função declaritiva.');
}

funcao();

/*
    Expressões de função 

    - São funções atribuídas à expressões. A nomeação das funções
      é opcional.

*/

// com nomeação
let funcao2 = function funcao2() {
    console.log("Mensagem de expressão de função.");
}

funcao2();

// sem nomeação
let funcao3 = function funcao3() {
    console.log("Mensagem de expressão de função.");
}

funcao3();

/*
    Arrow function

    - São funções de expressão de sintaxe curta. Arrow functions
      sempre serão anônimas, e portanto não podem ser nomeadas.
    - Deve ser declarada com parênteses "()", seguido de "=>" e
      depois chaves "{}"

*/

let funcao4 = () => {
    console.log("Mensagem de Arrow Function.");
}

funcao4();