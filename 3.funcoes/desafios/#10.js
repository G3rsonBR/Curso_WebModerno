// Verificar se um número é divisivel por 3, se sim, retorne True, se não, False
function eDivisivel(num){
    let calc = num % 3
    if(calc == 0) console.log(`${true}`) 
    else console.log(`${false}`)
}

eDivisivel(3)
eDivisivel(5)
eDivisivel(15)
eDivisivel(37.9)