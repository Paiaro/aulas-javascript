'use strict';



/* Comando utilizados em condicionais

if (se)
else (senão)
else if (senão se)

switch/case (escolha/caso)*/


//operadores relacionais:

// > maior,< menor,>= maior que,<= menor que,!= diferente, == igual

//Condicional simples

let numero = 10;

if (numero > 5) {

    console.log("maior que 5");
}

//condicional composta

let usuario = "Bombril";
let idade = 170;

//variavel com proposito de guardar a palavra "maior" ou "menor"
let mensagem; //indefined/ nao definida 

if (idade >= 18) {
    mensagem = "maior";
}
else {
    mensagem = "menor"

}
console.log(`${usuario} é ${mensagem} de idade.`);



//sintax Ternário

console.log("if/else usando ternario ?:");

let texto = idade >=18 ? "maior" : "menor";

console.log(`${usuario} é ${texto} de idade.`);


//aplicando o ternario direto dentro da template string

console.log(`${usuario} é ${idade >= 18 ? "maior" : "menor"} de idade.`);

//condicional encadeada/sicessiva

let texto2;

if (idade >=60) {

    texto2 = "idoso(a)";
}
else if(idade >= 18){
    texto2 = "adulto(a)";
}
else{
    texto2 = "menor de idade";
}

console.log(`${usuario} tem ${idade} anos e é ${texto2}`);

