// Verificar quantas notas o usuário receberá de acordo com o quanto ele quer sacar
let calc = 0
let resto = 0
let valores = {
    cem: 0,
    cinquenta: 0,
    dez: 0,
    cinco: 0,
    um: 0,
}

function notas(valor){
    if(valor >= 100){
        calc = Math.floor(valor / 100)
        resto = valor % 100
        valores.cem = calc
    }
    if(resto < 100 && resto >= 50){
        calc = Math.floor(resto / 50)
        resto = valor % 50
        valores.cinquenta = calc
    }
    if(resto < 50 && resto >= 10){
        calc = Math.floor(resto / 10)
        resto = valor % 10
        valores.dez = calc
    }
    if(resto < 10 && resto >= 5){
        calc = Math.floor(resto / 5)
        resto = valor % 5
        valores.cinco = calc
    }
    if(resto < 5 && resto > 0){
        calc = Math.floor(resto / 1)
        resto = valor % 1
        valores.um = calc
    }
    console.log(valores)
}

notas(1289)
notas(20999)


/*function calcularNotas(valor) {
  if (typeof valor !== 'number' || valor <= 0) {
    console.error('Valor inválido. Por favor, forneça um número positivo maior que zero.');
    return;
  }

  let notas = [100, 50, 10, 5, 1];
  let quantidades = [0, 0, 0, 0, 0];
  let resto = valor;

  for (let i = 0; i < notas.length; i++) {
    quantidades[i] = Math.floor(resto / notas[i]);
    resto = resto % notas[i];
  }

  console.log(quantidades);
}

calcularNotas(1289);
calcularNotas(20999);

// Código feito com auxílio do ChatGPT para fins de aprimorar o código anterior
*/