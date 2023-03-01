/*class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()*/

function Pessoas(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu Nome é ${this.nome}`)
    }
}

const nome = new Pessoas('Diogo')
nome.falar()