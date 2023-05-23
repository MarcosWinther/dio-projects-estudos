function calculadora() {
    const operacao = Number(prompt('Escolha uma opção: '
    + '\n 1- Soma(+) \n 2- Subtração \n 3- Multiplicação(*)'
    + '\n 4- Divisão Real(/) \n 5- Divisão Inteira(%)'
    + '\n 6- Potenciação(**)'));

    if (!operacao || operacao >=7) {
        alert('Erro de operacao!');
        calculadora();
    } else {

        let numero1 = Number(prompt('Insira o primeiro valor:'));
        let numero2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!numero1 || !numero2) {
            alert("Erro - Parâmetros inválidos!");
            calculadora();
        } else {
            function soma() {
                resultado = numero1 + numero2;
                alert(`${numero1} + ${numero2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultado = numero1 - numero2;
                alert(`${numero1} - ${numero2} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicacao() {
                resultado = numero1 * numero2;
                alert(`${numero1} * ${numero2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoReal() {
                resultado = numero1 / numero2;
                alert(`${numero1} / ${numero2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoInteira() {
                resultado = numero1 % numero2;
                alert(`O resto da divisão entre ${numero1} e ${numero2} é igual a ${resultado}`);
                novaOperacao();
            }
    
            function potenciacao() {
                resultado = numero1 ** numero2;
                alert(`${numero1} elevado à ${numero2} é igual a ${resultado}`);
                novaOperacao();
            }

        }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }

    }
    
}

function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operacao?\n 1- Sim \n 2- Não');

    if (opcao == 1) {
        calculadora();
    } else if (opcao == 2) {
        alert('Até mais!');
    } else {
        alert("Opção Inválida! Digite novamente.");
        novaOperacao();
    }
}

calculadora();