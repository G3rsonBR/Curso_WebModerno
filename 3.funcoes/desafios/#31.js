// Identificar um número positivo e negativo em um array
let nums = [1, 9, -5, 500, -66, 78, -2]
let negativos = []

function percorrer(){
    for(let x = 0; x <= nums.length; x++){
        if(Math.sign(nums[x]) == -1){
            negativos.push(nums[x])
        }
    }
    console.log(negativos)
    console.log(negativos.length + ' Números negativo encontrados')
}
percorrer()