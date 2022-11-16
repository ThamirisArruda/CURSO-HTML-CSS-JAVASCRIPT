//Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição.

const peso = 60;
const altura = 1.60;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc <18.5) {
    console.log('Abaixo de peso');
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
}
else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
}
else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
}
else {
    console.log('Obesidade grave');
}