// Criar um for, faça uma função que percorra um vetor, e inditivique quantos nums estão no intervalo 10~20 e quantos não estão
let nums = []
for(let x = 1; x <= 100; x++){
    nums.push(x)
}

function percorra(){
    let intervalo = []
    let foraIntervalo = []
    for(let y = 0; y <= nums.length; y++){
        if(y >= 10 && y <= 20){
            intervalo.push(nums[y - 1])
        }
        else if(y > 0 && y != intervalo){
            foraIntervalo.push(nums[y - 1])
        }
    }
    console.log(`Está no intervalo:\n${intervalo}`)
    console.log('\n')
    console.log(`Está fora do intervalo:\n${foraIntervalo}`)
}
percorra()