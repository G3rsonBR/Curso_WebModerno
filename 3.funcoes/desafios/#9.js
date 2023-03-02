// Criar um algoritmo de aprovação. notas de 0 a 100, acima de 38, arrendondar para o próximo multiplo de 5, abaixo disso, não arredonda
// Acima de 40, o aluno está aprovado, abaixo, está reprovado.

function resultado(nota){
    let multiplosDe5 = []
    for(let i = 1; i <= 20; i++){
        multiplosDe5.push(5 * i)
    }
    const proxMult = multiplosDe5.find(element => element > nota)
    const mesmoNum = multiplosDe5.includes(nota)

    if(nota >= 38 && nota <= 100){
        if(mesmoNum == true){
            console.log(`Aluno Aprovado.\nNota: ${nota}\n`)
        } else {
            console.log(`Aluno Aprovado.\nNota: ${nota} \nNota Arredondada: ${proxMult}\n`)
        }
    } 
    else if(nota < 40 && nota >= 0) console.log(`Aluno Reprovado.\nNota: ${nota}\n`)
    else console.log('Nota Inválida!\n')
}
resultado(38)
resultado(50)
resultado(-5)