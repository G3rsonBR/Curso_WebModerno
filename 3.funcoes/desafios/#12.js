// Calcular o fatorial de um número
function fatorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    console.log(num)
}
fatorial(5)
fatorial(52)
fatorial(8)
fatorial(12)