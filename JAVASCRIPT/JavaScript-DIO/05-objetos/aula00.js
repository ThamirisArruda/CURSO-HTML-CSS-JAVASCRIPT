const pessoa = {                                  //OBJETO É THAMRIIS (OBJETO É UMA COLEÇÃO DINAMICA DE CHAVE
    nome: 'Thamiris Dyanara',                     //E VALOR PODE ADICIONAR E RETIRAR; OBJETO DECLARA COM  {}
    idade: 23,                                    //NOME = CHAVE |   'THAMIRIS', = VALOR
                                                
    descrever: function () {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
};

pessoa['nome'] = 'teste';                         //acesso dinamico
pessoa.nome = 'teste';                            //acesso direto

