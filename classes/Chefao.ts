import Inimigo from "./Inimigo";
import Personagem from "./Personagem";

export default class Chefao extends Inimigo{
    atacar(personagem: Personagem) {
        const chanceDeAcerto = Math.random()
        if (chanceDeAcerto < 0.8) {
            console.log('Ataque do chefão falhou')
        } else {
            personagem.receberDano(this.causarDano() * 2)
            console.log('Chefão lançou-te um poderoso dano em dobro')
        }
    }

    receberDano(dano: number){
        super.receberDano(dano)
        if(this.getVida() <= 0){
            console.log('O Chefão foi derrotado, será que acabou mesmo?')
        }
    }
}