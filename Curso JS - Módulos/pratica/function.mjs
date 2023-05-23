function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return `A soma dos números ${valor1} e ${valor2} é ${soma}`;
}

function subtracao(valor1, valor2) {
    let subtracao = valor1 - valor2;
    return `A subtração dos números ${valor1} e ${valor2} é ${subtracao}`;
}

function multiplicacao(valor1, valor2) {
    let multiplicacao = valor1 * valor2;
    return `A multiplicação dos números ${valor1} e ${valor2} é ${multiplicacao}`;
}

function divisao(valor1, valor2) {
    let divisao = valor1 / valor2;
    return `A divisão dos números ${valor1} e ${valor2} é ${divisao}`;
}

export {
    soma,
    subtracao,
    multiplicacao,
    divisao
};
