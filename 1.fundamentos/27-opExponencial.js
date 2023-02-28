// O ES7 trouxe agora o operador de Exponenciação.
// Antigamente era necessário a seguint sintaxe para fazer isso:
let exp = Math.pow(2, 3); //Primeiro a base, segundo o expoente
console.log(exp); //2 elevado a 3 = 8

// Agora não precisamos do Math, podemos usar:
let exp2 = 2 ** 3;
console.log(exp2);
// Usando o ' ** ' utilizamos o 1° valor como a base e o 2° como o expoente

// Com isso abrimos um leque de possibilidades como por exemplo:
let base = 2;
base **= 3; // Elevamos a base em à terceira potência
console.log(base);

//Podemos trabalhar com negativos ainda:
let exp3 = 2 ** -3;
console.log(exp3);