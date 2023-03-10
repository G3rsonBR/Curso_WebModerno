class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu Nome é ${nome}`)
    }
}

const p2 = criarPessoa('James')
p2.falar()