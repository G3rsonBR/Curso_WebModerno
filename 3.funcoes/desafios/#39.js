// Função que troque os valores de 2 vetores, fazendo o primeiro ter os valores do segundo e vise versa

function troca(vetor1, vetor2){
    if(vetor1.length !== vetor2.length) console.log('Não é possível trocar os valores, os n° de elementos está diferente')
    else{
        [vetor1, vetor2] = [vetor2, vetor1];
        console.log(vetor1, vetor2);
    }
}

troca([1, 2, 3], [4, 5, 6])


/*function troca(vetor1, vetor2) {
    vetor1.length === vetor2.length
      ? ([vetor1, vetor2] = [vetor2, vetor1], console.log(vetor1, vetor2))
      : console.log(
          "Não é possível trocar os valores, os números de elementos estão diferentes"
        );
  }
  
troca([1, 2, 3], [4, 5, 6]);  */

// Código comentado escrito com a ajuda do ChatGPT, para aprendizado e uso de aprimoramentos e outros meios de como fazer. Nesse caso
// Usando operador ternário.