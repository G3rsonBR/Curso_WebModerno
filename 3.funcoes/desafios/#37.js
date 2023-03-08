// Duas funções, uma para progressão aritmética e outra para ... geométrica

function pA(numTermos, termoInicial, razao){
    let progresso = [`a${1}: ${termoInicial}`]
    let armazena = termoInicial + razao
    for(let x = 2; x <= numTermos; x++){
        progresso.push(`a${x}: ${armazena}`)
        armazena += razao
    }
    console.log(progresso)
}

function pG(numTermos, termoInicial, razao){
    let progresso = [`a${1}: ${termoInicial}`]
    let armazena = termoInicial * razao
    for(let x = 2; x <= numTermos; x++){
        progresso.push(`a${x}: ${armazena}`)
        armazena *= razao
    }
    console.log(progresso)
}


pA(10, 4, 2)
pG(10, 4, 2)