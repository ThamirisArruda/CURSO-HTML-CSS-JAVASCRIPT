//Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

const { gets, print } = require('./funções-auxiliares');

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
    
}

print(maiorValorEncontrado);