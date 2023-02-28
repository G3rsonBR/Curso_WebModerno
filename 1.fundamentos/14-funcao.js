// Sem um retorno
// Receita de bolo, se resume a isso uma Function

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
// imprimirSoma(2) -> NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8); // Vai pegar só os 2 Primeiros parametros
imprimirSoma(); // NaN

// Com retorno

function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // Porque o b é 1
console.log(soma()); // NaN
