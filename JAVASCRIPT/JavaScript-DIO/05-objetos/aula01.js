class Pessoa {                                              //PESSOA É UMA CLASSE QUE DESCREVE COMO TEM QUE SER  
    nome;                                                   //CLASSE É UMA DEFINIÇÃO
    idade;

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const thamiris = new Pessoa();                                  
    thamiris.nome = 'Thamiris Dyanara';                      //UMA PESSOA ESPECIFICA É THAMIRIS QUE TEM 23AN
    thamiris.idade = 23;                                    //INSTANCIA É UMA OCORRENCIA DO OBJETO
                                                
    const dyanara = new Pessoa();                                  
    dyanara.nome = 'Dyanara';                        
    dyanara.idade = 23; 


console.log(thamiris);
console.log(dyanara);                          
