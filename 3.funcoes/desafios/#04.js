// Func. com 2 params., dividendo e divisor, imprima o resultado e o resto da divisão.
const result = (dividendo, divisor) => {
    if(divisor !== 0) console.log(`Resultado: ${dividendo / divisor}\nResto: ${dividendo % divisor}\n`)
    else console.log('Não é possível dividir um número por 0\n')
}

result(5, 2.5)
result(5, 2)
result(5, 3)
result(5, 0)
result(0, 1)

result()