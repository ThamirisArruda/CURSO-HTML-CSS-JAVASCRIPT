//Tipos de Variaveis Boleanas//
const numero = 3;
const numeroPar = (numero % 2) === 0;  
console.log(numeroPar); 
// = é atribuição == igualdade === igualdade para comparar//

if (numeroPar) {                                           //if=SE//
    console.log('Par');
}                         
else {                                                     //ELSE-SE NÃO
    console.log('Impar');                   //! serve para ser negação//
}

