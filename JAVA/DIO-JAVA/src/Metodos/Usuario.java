package Metodos;

public class Usuario {
    
    public static void main (String[] args) throws Exception {
        SmartTv smartTv = new SmartTv();

        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.aumentarVolume();

        
        System.out.println("Canal Atual: " + smartTv.canal);
        smartTv.mudarCanal(13);
        System.out.println("Volume Atual : " + smartTv.volume);


        System.out.println("Tv ligada? " + smartTv.ligada);

        System.out.println("Volume Atual: " + smartTv.volume);

        smartTv.ligar ();
        System.out.println("Novo Status -> Tv ligada? " + smartTv.ligada);

        smartTv.desligar(); 
        System.out.println("Novo Status -> Tv desligada? " + smartTv.ligada);



    }
}
