let jogador1 = 0;
let jogador2 = 1;
let placar;

// Condição ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Jogadores válidos") : console.log("Jogadores inválidos!");

if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log("Jogador 1 marcou ponto.");
    } else if(jogador2 > 0) {
        console.log("Jogador 2 marcou ponto.");
    } else {
        console.log("Ninguém marcou ponto.");
    }
}
