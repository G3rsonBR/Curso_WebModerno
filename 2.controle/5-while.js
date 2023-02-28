function getInteieroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteieroAleatorioEntre(-1, 10);
  console.log(`Opção Escolhida foi: ${opcao}`);
}
console.log("Até a próxima!");

//Podemos ter uma quantidade de repetição definida também:

let contador = 1 
while(contador <= 10){
  console.log(`Contador = ${contador}`)
  contador++
}