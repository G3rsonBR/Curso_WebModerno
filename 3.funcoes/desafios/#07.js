// Calcular Bhaskara
function calcBhaskara(a = 1, b = 1, c = 1){
    let delta = (b ** 2) - (4 * a * c)
    if(delta >= 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(`a: ${a}\nb: ${b}\nc: ${c}\nDelta: ${delta}\nx1: ${x1}\nx2: ${x2}\n`)
    } else console.log('Delta Negativo!\n')
}
calcBhaskara(-2, -5, 12)
calcBhaskara(1, -6, 9)
calcBhaskara(3, -5, 12)