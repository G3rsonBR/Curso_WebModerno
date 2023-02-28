let valor; // Não inicializada
console.log(valor);

// console.log(valor2); Erro => Ela NEM FOI definida, é diferente de Undefined

valor = null; // Ausência de Valor
console.log(valor);
// console.log(valor.toString()); Erro => Você não pode ler propriedades de Nulos

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // Não faça isso!
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // Sem preço, diferente de 0 !
console.log(!!produto.preco);
console.log(produto);

