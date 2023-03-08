// Calcular média aritmética dos valores de um array
let nums = []

function media(){
    for(let x = 0; x <= 100; x++){
        nums.push(x)
    }
    const somados = nums.reduce((acumulado, atual) => acumulado + atual)
    console.log(`A Média é: ${somados / nums.length}`)
}
media()