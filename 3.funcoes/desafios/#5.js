// Criar uma function para fazer números como esse: 0.3000004, virar isso: R$0.30

const valorRS = valor => {
    if(valor != null) console.log(`O valor ${valor}, em reais, fica: R$${valor.toFixed(2)}`)
    else console.log('Por favor, digite um valor válido.')
}

valorRS(336.67676767)
valorRS(25.000005)
valorRS(0.55555)
valorRS(Math.PI)
valorRS()
