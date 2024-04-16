'use strict';
//Vetor (array de uma dimensão)
//DECLARANDO UM ARRAY DE ALUNOS 
const alunos = ["Wilian", "Vinicius", "Marli", "Duda", "Gabriel"];

//exibindo a estrutura do array (somente no console)
console.log(alunos);

//Acessando individualmente alguns alunos atravez do índice
console.log(alunos[1]); // Vinicius 
console.log(alunos[3]); // Duda
console.log(alunos[0]); // Wilian


/* mini-exercicio (faça aqui mesmo)
- crie um novo array com o nome de 7 coisas que você gosta (artista, banda, musica, livros ... sei la, inventa !)

-Em seguida, mostre uma frase personalizada no console indicando o nome do segundo, do quinto e do sétimo elemento do array.*/


const coisasquegosto = [
    'escutar musica',
    'ler livros',
    'jogar video games',
    'escalar montanhas',
    'café',
    'assistir filmes',
    'codificar HTML e CSS'];


const segundo = coisasquegosto[1];
const quinto = coisasquegosto[4];
const setimo = coisasquegosto[6];


console.log(`Eu gosto ${segundo}, ${quinto}, ${setimo}!`);

// console.log(`Eu gosto ${coisasquegosto[1]}, ${coisasquegosto[4]}, ${coisasquegosto[6]}!`);


// matriz (array com mais de uma dimensão)


const tecnologias = [
    [
        "HTML5", "CSS3", "JavaScript"],
    ["PHP", "Node.js", "SQL", "Python", "firebase"]
];
console.log(tecnologias[0][1]); //CSS3 

