// Comparar se duas strings são iguais

function comparar(valor1, valor2){
    if(valor1.toLowerCase() == valor2.toLowerCase()){
        console.log(true)
    } else if(valor1.toLowerCase() !== valor2.toLowerCase()){
        console.log(false)
    } else if(valor1 == null || valor2 == null){
        console.log('Valores nulos detectados!')
    }
}

comparar('nome', 'nome')
comparar('nome', 'Nome')
comparar('nome', 'Jorge')
comparar('nome', '')