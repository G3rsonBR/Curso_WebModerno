// Criar uma Função que receba 2 parâmetros: início e fim. Imprimir os números impares desse intervalo, corrigir se o início for maior que o fim
function imparesNoIntervalo(inicio = 0, fim = 100){
    if(inicio < fim){
        for(let x = inicio; x <= fim; x++){
            if(x % 2 !== 0){
                console.log(`Impares do Intervalo: ${x}`)
            }
        }
    } else if(inicio > fim){
        console.log('Aviso: Parâmetros invertidos! Mas relaxa, demos um jeitinho :D')
        for(let x = fim; x <= inicio; x++){
            if(x % 2 !== 0){
                console.log(`Impares do Intervalo: ${x}`)
            }
        }
    } else if(inicio == fim){
        if(inicio % 2 == 1){
            console.log('Não é possível imprimir um intervalo de impares com números iguais, porém, verificamos que o número ' + inicio + ' é impar.')
        } else{
            console.log('Não é possível verificar um intervalo de números iguais!')
        }
    }
}

// imparesNoIntervalo()
// imparesNoIntervalo(50, 100)
// imparesNoIntervalo(100, 20)
// imparesNoIntervalo(27, 27)
// imparesNoIntervalo(30, 30)
