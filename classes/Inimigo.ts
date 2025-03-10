import Personagem from "./Personagem";

export default class Inimigo extends Personagem {
    atacar(personagem: Personagem) {
        const chanceDeAcerto = Math.random()
        if (chanceDeAcerto < 0.2) {
            console.log('Ataque do inimigo falhou')
        } else {
            personagem.receberDano(this.causarDano())
            console.log('Dano no guerreiro!')
        }
    }
}