//Função de anuidade, se não for paga em janeiro, é aplicado juros de 5% aplicado a juros compostos por mês.

function anuidade(valor, mesPago = 1){
    let juros = 5 / 100
    if(mesPago == 1) console.log('Você pagou em tempo! Não há juros. Você pagou', valor)
    else if(mesPago > 1 && mesPago <= 12) {
        let montante = valor * ((1 + (5 / 100)) ** mesPago)
        let calc = montante - valor
        let multa = (mesPago * juros).toFixed(2)
        console.log(`Você atrasou o pagamento, haverá juros de ${multa}\nVocê pagou ${(valor + calc).toFixed(2)}`)
    }
    else console.log('Você digitou uma data inválida.')
}

for(let i = 0; i <= 14; i++){
    anuidade(1000, i)
    console.log('\n')
}