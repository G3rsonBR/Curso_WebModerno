const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
//console.log(valores[4]); -> Não está definido (undefined), pois só temos até o index 3

valores[4] = 10;
// valores[10] = 10; -> Como temos 5 valores vazios, no console ele relata esse vazio
console.log(valores);
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores);

console.log(valores.pop());
delete valores[0]
console.log(valores);

console.log(typeof valores)