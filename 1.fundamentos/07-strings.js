const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // Retorna um Null, pois não tem esse caractere
console.log(escola.charCodeAt(3)); // Valor em UniCode
console.log(escola.indexOf("3"));

console.log(escola.substring(1)); // Tira o primeiro valor
console.log(escola.substring(0, 3)); // Vá do 0, contando ele, até o 3, sem contar ele

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(3, "e"));

// Rejax? Deixar anotado
console.log(escola.replace(/\d/, "e"));
console.log(escola.replace(/\w/, "e"));
console.log(escola.replace(/\w/g, "e"));

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))