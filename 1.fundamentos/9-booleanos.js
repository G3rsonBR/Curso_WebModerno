let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('\nOs Verdadeiros são...')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!(isAtivo = Infinity));

console.log('\nOs Falsos são...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\nPara Finalizar:')
console.log(!!('' || null || 0 || ' ')) // Aqui ele retorna o valor verdadeiro (caso tenha), e se tirar o !! ele retorna o valor mesmo.

let nome = '' // Se estiver vazio esse valor, o console a seguir retorna o True, no caso, a string do ||.
console.log(nome || 'Desconhecido')