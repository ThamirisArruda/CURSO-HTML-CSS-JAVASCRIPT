package Classes;
public class MinhaClasse {
    public static void main (String [] args) {
        String primeiroNome = "Thamiris";
        String segundoNome = "Dyanara";

        String nomeCompleto = nomeCompleto (primeiroNome, segundoNome);

        System.out.println(nomeCompleto);
    }

    public static String nomeCompleto (String primeiroNome, String segundoNome) {
        return primeiroNome.concat(" ").concat(segundoNome);
    }
}

/*
Variaveis
Os unicos simbolos permitidos são _ &
Uma variavel não pode começar com numero
Não pode ter espaço no nome da variavel
Log faz parte das palavras reservadas da lingua

TIPO      NOMEDEFINIDO  VALOR
boolean   verdadeira    true;

Metodos
TipoRetorno NomeNoInfinitivo Parametros
String      FormatarCep      (long cep)
*/