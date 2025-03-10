import Arma from "../classes/Arma";
import Chefao from "../classes/Chefao";
import Inimigo from "../classes/Inimigo";
import Personagem from "../classes/Personagem";

const espada = new Arma('Espada longa', 'Uma longa e afiada espada de dois gumes')
const arco = new Arma('Arco e flechas', 'Um grande e poderoso arco com flechas flamejantes')
const tridente = new Arma('Tridente', 'Um tridente comprido e afiado')
//Personagem guerreiro
const guerreiro = new Personagem('Legolas', 250, 80)
//Inimigos
const smeagle = new Inimigo('Smeagle', 170, 50)
const saruman = new Inimigo('Saruman', 150, 70)
const sauron = new Inimigo('Sauron', 150, 40)
const smaug = new Inimigo('Smaug', 150, 40)
const aragorn = new Inimigo('Aragorn', 120, 70)
//chefão
const frodo = new Chefao('frodo', 250, 50)

console.log('Tensão no ar, os oponentes do guerreiro Steve se aproximam')
console.log('Nome: ', guerreiro.getNome())
console.log('Vida: ', guerreiro.getVida())
console.log('Força: ', guerreiro.getForca())

guerreiro.setArma(espada)
saruman.setArma(arco)
sauron.setArma(tridente)
smeagle.setArma(arco)

guerreiro.atacar(saruman)
smaug.atacar(guerreiro)
guerreiro.atacar(aragorn)
saruman.atacar(guerreiro)

console.log(`A guerra começou, e deixou muitos feridos. O Guerreiro steve tem somente ${guerreiro.getVida()} de vida, e é hora de enfrentar o Chefão!`)

guerreiro.atacar(frodo)
frodo.atacar(guerreiro)
frodo.atacar(guerreiro)
frodo.atacar(guerreiro)

console.log(`Nosso guerreiro está com ${guerreiro.getVida()} de vida`)



