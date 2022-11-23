//Crie uma classe para representar pessoas
//Para cada pessoa temos atributos nome, peso e pessoa.

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo de peso');
        }
        else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        }
        else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        }
        else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        }
        else {
            return ('Obesidade grave');
        }
    }
}

const thamiris = new Pessoa('Thamiris', 60, 1.60);
console.log(thamiris.classificarImc());

