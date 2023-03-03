// Calculadora simples de forma estática em JS
function calc(valor1, operador, valor2){
    switch(operador){
        case '+':
            console.log(valor1 + valor2)
            break;
        case '-':
            console.log(valor1 - valor2)
            break;
        case '*':
            console.log(valor1 * valor2)
            break;
        case '/':
            console.log(valor1 / valor2)
            break;
        default:
            console.log('Operador não disponível.')
            break;
    }
}

calc(2, '+', 5)
calc(2, '-', 1)
calc(2, '*', 20)
calc(2, '/', 100)
calc(2, '%', 100)