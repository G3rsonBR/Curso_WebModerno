// Uma string com valores númericos, identificar os resultados maiores que o 1° valor e verificar em qual posição foi o pior número (o menor)

let jogos = '10, 20, 20, 8, 25, 3, 0, 30, 1'

function verificar(pontos){
    let pontuacao = pontos.split(', ')
    let records = 0
    let piores = 1
    let melhor = pontuacao[0]
    let pior = pontuacao[0]
    
    for(let x = 1; x < pontuacao.length; x++){
        if(pontuacao[x] > melhor){
            melhor = pontuacao[x]
            records++
        } else if(pontuacao[x] < pior){
            pior = pontuacao[x]
            piores = x + 1
        }
    }
    return [records, piores]
}

console.log(verificar(jogos))