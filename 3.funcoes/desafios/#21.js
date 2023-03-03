// Calcular valor de convênio conforme a idade do usuário

function convenio(idade = 0){
    let precoFixo = 100
    if(idade < 10) console.log(`Você tem ${idade} anos, seu plano é de R${precoFixo + 80}`)
    else if(idade >= 10 && idade <= 30) console.log(`Você tem ${idade} anos, seu plano é de R${precoFixo + 50}`)
    else if(idade > 30 && idade <= 60) console.log(`Você tem ${idade} anos, seu plano é de R${precoFixo + 95}`)
    else if(idade > 60 && idade <= 122) console.log(`Você tem ${idade} anos, seu plano é de R${precoFixo + 130}`)
    else console.log('Idade Inválida!')
}

convenio(9)
convenio(26)
convenio(55)
convenio(68)
convenio(125)
convenio()