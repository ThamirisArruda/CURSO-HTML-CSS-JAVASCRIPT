package Estruturas;

import java.util.Scanner;

public class parEimpa {
    /**
     * @param args
     */
    public static void main (String[] args) {
        var out = System.out;
        try (Scanner scan = new Scanner(System.in)) {
            int quantNumeros;
            int numero;
            int quantPares = 0;
            int quantImpares = 0;

            out.println("Quantidade de números: ");
            quantNumeros = scan.nextInt();

            int count = 0;
            do {
                out.println("Número: ");
                numero = scan.nextInt();

                if (numero % 2 == 0 ) quantPares++;
                else quantImpares++;

                count++;
            } while(count < quantNumeros);

            out.println("Quantidade Par: " + quantPares);
            
            out.println("Quantidade Ímpar: " + quantImpares);
            
        }  
    }
}





