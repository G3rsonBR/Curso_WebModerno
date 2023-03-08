// ler um vetor de nums inteiros e imprimir quantos são pares e quantos são impares

let nums = []
let pares = []
let impares = []

function quanto(){
    for(let x = 1; x <= 100; x++){
        nums.push(x)
        if(nums[x] % 2 == 0){
            pares.push(x)
        } else if(nums[x] % 2 == 1){
            impares.push(x)
        }
    }
    console.log('São Pares: ', pares.length)
    console.log(pares)
    console.log('\nSão Impares: ', impares.length)
    console.log(impares)
}

quanto()