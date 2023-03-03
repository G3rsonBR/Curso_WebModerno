// Imprimir a media ponderada de um aluno

function final(numAluno, nota1, nota2, nota3){
    let maior = 0
    let demais = 0
    if(nota1 > nota2 && nota1 > nota3){
        maior = nota1 * 4
        demais = (nota2 * 3) + (nota3 * 3) 
    } else if(nota2 > nota1 && nota2 > nota3){
        maior = nota2 * 4
        demais = (nota1 * 3) + (nota3 * 3) 
    } else if(nota3 > nota1 && nota3 > nota2){
        maior = nota3 * 4
        demais = (nota1 * 3) + (nota2 * 3) 
    }
    let calc = (maior + demais) / (4 + 3 + 3)
    
    if(calc >= 5) console.log(`Aluno de n°${numAluno}\nSuas notas foram: ${nota1}, ${nota2}, ${nota3}\nSua Média é: ${calc}\nAPROVADO!!`)
    else if(calc < 5) console.log(`Aluno de n°${numAluno}\nSuas notas foram: ${nota1}, ${nota2}, ${nota3}\nSua Média é: ${calc}\nREPROVADO!`)
    console.log('\n')
}

final('000', 5, 4, 6)
final('000', 9, 8, 8)
final('001', 5, 4, 1)