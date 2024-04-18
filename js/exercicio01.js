'use strict';
// VAR variavel de escopo global let de escopo em bloco
let nota1 = 9;

let nota2 = 5;

const media = (nota1 + nota2) / 2;
console.log(media);
if (media >= 7) {
    console.log(`Aprovado!`);
}
else if (media >= 5) {

    console.log(`recuperação`);
}
else {
    console.log(`Reprovado !`);
}
