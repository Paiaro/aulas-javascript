'use strict';

// Requisitos para aprovação 

const mediaMinima = 7;
const faltasMaxima = 10;

// Aluno de exemplo

let aluno = "Dayane";
let mediaFinal = 0;
let faltas = 0;
let resultado;
// operador && "and" ("E")
if (mediaFinal >= mediaMinima && faltas <= faltasMaxima) {
    resultado = "aprovado";
}
else {
    resultado = "reprovado";
}

console.log(`Sua nota é ${mediaFinal}, ${resultado}`);

// exemplo

console.log("----------------------------------------------------------");

let idade = 12;

// Operador || (PIPE) "OR"/"OU" 
if (idade >= 18 || idade < 12) {

    console.log("voce é um adulto ou uma criança!");
}
else {
    console.log("voce é um adolescente!");
}

console.log("------------------------------------------------------------");

let onibus = 2203;

if (onibus == 2203 || onibus == 2019) {

    console.log("passa no Senac, embarque ! ");

}
else {
    console.log("não passa no Senac, aguarde outro");
}

console.log("------------------------------------------------------------");


// Operador de negação "!"  (NOT/Negação)

let blackFri = true; // false simboliza que nao esta ativo;

// Se blackfri nao for verdadeira
if(!blackFri){
    console.log("Preços normais");
}else{
    console.log("black friday !!!!");
}