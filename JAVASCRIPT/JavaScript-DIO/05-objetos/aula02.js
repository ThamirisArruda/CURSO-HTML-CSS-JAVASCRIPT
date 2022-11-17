class Pessoa {                                               
    nome;                                                   
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const thamiris = new Pessoa('Thamiris', 23);                                  
const dyanara = new Pessoa('Dyanara', 24);                                  
    


thamiris.descrever();
dyanara.descrever();    