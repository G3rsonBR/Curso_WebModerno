// Criar um vetor com um valor inicial, e adicionar valores de um outro vetor ao criado primeiramente

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionar(){
    console.log(vetorPilha)
    
    for(let x = 0; x < vetorAdiciona.length; x++){
        vetorPilha.push(vetorAdiciona[x])
    }
    
    console.log(vetorPilha)
    console.log(vetorAdiciona)
}

adicionar()