// Switch que aceita 3 valores (instruções na tarefa)
function tratrarErroELancar(erro) {
    throw {
      nome: erro.name,
      msg: erro.message,
      date: new Date(),
    };
}

function fruta(nome){
    switch(nome){
        case 'maça':
            console.log('Não vendemos esse fruta aqui.')
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break;
        case 'melancia':
            console.log('Aqui está, são R$3.00 o Kg.')
            break;
        default:
            tratrarErroELancar(nome)
            break;
    }
}
fruta('maça')
fruta('kiwi')
fruta('melancia')
fruta('abacaxi')