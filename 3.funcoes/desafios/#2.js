// Verificar o tipo do triangulo, usar condição de existencia para verificar
function verificar(a, b, c){
    if((a + b) >= c || (a + c) >= b || (c + b) >= a){
        console.log('Seu Triângulo existe!')
        
        if(a == b && b == c) console.log('É um Triângulo Equilátero, tem todos os lados iguais.\n')
        else if(a == b || a == c || b == c ) console.log('É um Triângulo Isóceles, tem 2 lados iguais.\n')
        else console.log('É um Triângulo Escaleno, tem todos os lados diferentes.\n')
        
    } else console.log('Seu Triângulo não existe! Verifique as informações.')
}

verificar(5, 5, 5)
verificar(5, 15, 5)
verificar(5, 15, 10)
verificar()