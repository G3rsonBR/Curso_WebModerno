// Calcular se o ano é Bissexto
function anoBissexto(ano){
    if(ano % 4 == 0 && ano % 100 !== 0 && ano % 400 !== 1) console.log(true)
    else console.log(false)
}

anoBissexto(2004)
anoBissexto(2006)
anoBissexto(2024)
anoBissexto(2683)