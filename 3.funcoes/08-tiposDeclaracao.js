console.log(soma(3, 4)) // é possível acessar mesmo antes de declarar a Function Declaration
// console.log(sub(2, 1)) --> É necessário declarar antes de chamar
// console.log(mult(2, 5)) --> É necessário declarar antes de chamar

// Function declaration
function soma(x, y){
    return x + y
}

// ... Expression
const sub = function (x, y){
    return x - y
}
console.log(sub(2, 1))


// Named ... Expression
const mult = function mult(x, y){
    return x * y
} // Pouco Usada
console.log(mult(2, 5))