class Pessoa {                                               
    nome;                                                   
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }


    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const thamiris = new Pessoa('Thamiris', 23);                                  
const dyanara = new Pessoa('Dyanara', 24);                                  
    


console.log(thamiris) 