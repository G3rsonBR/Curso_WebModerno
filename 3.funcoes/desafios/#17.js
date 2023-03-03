// Calcular o aumento de sálario de acordo com um plano selecionado.
function aumento(plano, salario){
    switch(plano){
        case 'a':
            console.log(salario + (salario * 0.10))
            break;
        case 'b':
            console.log(salario + (salario * 0.15))
            break;
        case 'c':
            console.log(salario + (salario * 0.20))
            break;
        default:
            console.log('Digite um Plano válido.')
            break;
    }
}

aumento('a', 2000)
aumento('b', 2000)
aumento('c', 2000)
aumento('e', 2000)