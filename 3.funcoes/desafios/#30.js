// Criar um vetor de nums inteiros, percorrer e verificar o maior e o menor num
let maior = 0
let menor = 0
let nums = []
for(let x = 1; x <= 500; x++){
    nums.push((Math.random() * x + 1).toFixed())
}

function verificar(){
    console.log(Math.max(...nums))
    console.log(Math.min(...nums))
}
console.log(nums)

verificar()