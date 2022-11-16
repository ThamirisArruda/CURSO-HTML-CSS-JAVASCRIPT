//Elabore um algoritmo que caulcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 1-2-3-4

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}
else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}
else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
}
else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
    

