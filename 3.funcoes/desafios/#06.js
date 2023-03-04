// 2 Functions, uma para mostrar o montante do Juros Simples, e outra para mostrar a Aplicação dos Juros Compostos
function jurosSimples(capital, taxa, tempo){
    let calc = capital * (taxa / 100) * tempo
    let montante = capital + calc
    console.log(`O Juros Simples é: ${calc}`)
    console.log(`O Montante é: ${montante}`)
}
jurosSimples(100, 10, 5)
jurosSimples(1000, 50, 50)

console.log('\n')

function jurosCompostos(capital, taxa, tempo){
    let montante = capital * ((1 + (taxa / 100)) ** tempo)
    let calc = montante - capital
    console.log(`O Juros Composto é: ${calc.toFixed(2)}`)
    console.log(`O Montante é: ${montante.toFixed(2)}`)
}
jurosCompostos(100, 10, 5)
jurosCompostos(1000, 50, 50)