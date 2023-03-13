// Coleção Dinâmica de Pares Chave/Valor
const produto = new Object();
produto.nome = "Cadeia";
produto["marca de produto"] = "Generica"; // Não recomendável
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto["marca de produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 20,
    },
  ],
  calcValorSeguro: function(){
    //...
  }
};

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length)