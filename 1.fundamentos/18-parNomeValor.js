// Par Nome/Valor
const saudacao = "Opa"; //Contexto Léxico1

function exec() {
  const saudacao = "falaa"; // Contexto Léxico2
  return saudacao;
}

// Objetos são grupos aninhados de pares Nome/Valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);