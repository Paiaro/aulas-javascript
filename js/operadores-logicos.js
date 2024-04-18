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
if (mediaFinal >= mediaMinima && faltas <= faltasMaxima ){
resultado = "aprovado";
}
else {
    resultado = "reprovado";
}

console.log(`Sua nota é ${mediaFinal}, ${resultado}`);

// exemplo

console.log("----------------------------------------------------------");

let idade = 25;

// Operador || "OR"/"OU" 
if (idade >= 18 || idade <12 ){

console.log("voce é um adulto ou uma criança!");
}
else{
    console.log("voce é um adolescente!");
}