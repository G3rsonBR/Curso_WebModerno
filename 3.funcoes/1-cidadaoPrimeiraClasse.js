// Função em JS é First-Class Object (Citizens)
// Higher-Order Function

// Criar de forma Literal
function fun1(){} // Retorna Undefined se não tiver nada para Retornar, Obrigatorio ter Bloco

// Armazenas em uma Variável
const fun2 = function(){} //Func. Anônima, para invocar ela, usar os ()

// Armazenar em um Array
const array = [function(a,b){return a + b}, fun1, fun2] // Não é comum declarar dentro do Array
console.log(array[0](2,3))

// Armazenar em um atributo de Objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// Passar função como Param.
function run(fun){
    fun()
}

run(function (){ console.log('Executado') })

// Função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)