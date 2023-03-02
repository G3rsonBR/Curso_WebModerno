// Identificar se o dia é FDS, dia de semana ou se é um dia inválido 

function qualDia(dia){
    switch(dia){
        case 1:
            console.log('Hoje é Domingo.')
            break;
        case 2: 
            console.log('Hoje é Segunda.')
            break;
        case 3: 
            console.log('Hoje é Terça.')
            break;
        case 4:
            console.log('Hoje é Quarta.')
            break;
        case 5: 
            console.log('Hoje é Quinta.')
            break;
        case 6:
            console.log('Hoje é Sexta.')
            break;
        case 7:
            console.log('Hoje é Sábado.')
            break;
        default:
            console.log('O dia é Inválido.')
            break;
    }
}

for(let i = 1; i < 10; i++){
    qualDia(i)
}