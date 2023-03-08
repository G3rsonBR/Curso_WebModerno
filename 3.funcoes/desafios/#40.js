// Uma função que receba um vetor e classifique de acordo com sua categoria

function classifica(vetorNotas){
    for(let x = 0; x < vetorNotas.length; x++){
        if(vetorNotas[x] >= 0.0 && vetorNotas[x] <= 4.9){
            console.log(`A nota ${vetorNotas[x]} está no Conceito D`)
        } else if(vetorNotas[x] >= 5.0 && vetorNotas[x] <= 6.9){
            console.log(`A nota ${vetorNotas[x]} está no Conceito C`)
        } else if(vetorNotas[x] >= 7.0 && vetorNotas[x] <= 8.9){
            console.log(`A nota ${vetorNotas[x]} está no Conceito B`)
        } else if(vetorNotas[x] >= 9.0 && vetorNotas[x] <= 10.0){
            console.log(`A nota ${vetorNotas[x]} está no Conceito A`)
        } else{
            console.log('Digite uma nota válida')
        }
    }
}

classifica([2.2, 5.6, 8, 9.9, 11, -1])