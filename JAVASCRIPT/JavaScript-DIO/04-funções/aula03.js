function escrevaMeuNome(nome) {                               //outra forma usando return
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {                        
    if (idade >= 18 ) {                   
        console.log(escrevaMeuNome ('Thamiris') + 'é Maior'); 
    }  
    else {
        console.log('Menor');
    } 
}

verificarIdade(18); 