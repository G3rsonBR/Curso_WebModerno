// Imprima os números de 1 a 50

function imprimir(){
    for(let x = 1; x <= 50; x++){
        document.write(`${x}\n`)
    }
}

// Dessa forma, é impresso na tela do navegador, para imprimir no console, basta mudar o 'document.write' para 'console.log'
// Em ambos os casos devemos fazer o seguinte para chamar essa função:
// imprimir() // -> Precisa do console para imprimir no Node