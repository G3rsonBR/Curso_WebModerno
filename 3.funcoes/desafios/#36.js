// Criar duas funções que tem dois parametros: um vetor de números e um número inteiro qualquer, multiplicar os valores do vetor pelo inteiro
// na primeira função, a segunda fará igual, mas somente se o número inteiro for MAIOR que 5

function multi(vetor, inteiro){
    let valMultiplicados = []
    valMultiplicados = vetor.map(element => element * inteiro)
    console.log(valMultiplicados)
}

function multiMaiorQueCinco(vetor, inteiro){
    let valMultiplicados = []
    if(inteiro > 5){
        valMultiplicados = vetor.map(element => element * inteiro)
        return console.log(valMultiplicados)
    } else{
        return console.log('Valor menor que Cinco')
    }
}

multi([1, 2, 3, 4, 5], 2)
multiMaiorQueCinco([1, 2, 3, 4, 5], 2)

console.log('\n')

multi([1, 2, 3, 4, 5], 10)
multiMaiorQueCinco([1, 2, 3, 4, 5], 6)
