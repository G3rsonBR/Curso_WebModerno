// Essa aula foi muito mais voltada para Node do que JS em si
// Em resumo: Saiba onde você está programando
// Com Node você vai fazer uma coisa, para o Browser outra.

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3 // Variável sem Var ou Let, NÃO FAÇA ISSO!!!
console.log(global.abc)

//module.exports = { e: 456, f: false, g: 'teste' }