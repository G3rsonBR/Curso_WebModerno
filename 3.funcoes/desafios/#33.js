// Usar concat() de duas formas para juntar os seguinte vetores
let valorInteiro = [1, 86, 654, 13]
let valorString = ['eu', 'queria', 'comer', 'panqueca']
let valorDouble = [2.555, 3.1415, 5.8897213, 25.45]

function concatenando(){
    let resultado = valorInteiro.concat(valorString)
    resultado = resultado.concat(valorDouble)
    console.log(resultado)
}

concatenando()