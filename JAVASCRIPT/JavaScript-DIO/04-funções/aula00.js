//Primeira função
function sayMayName(name) {
    console.log('Your name is:' + name);
}

sayMayName('Thamiris');
sayMayName('Dyanara');

//Segunda função
function quadrado(valor) {
    return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

//Terceira função
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor +valorDeAcrecimo;
}
console.log(incrementarJuros (100, 10));
console.log(incrementarJuros (100, 15));