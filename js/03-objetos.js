'use strict';

// Declarando um objeto

const livro = {

    titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", volumes: 3, ano: 1954

};
console.log(livro);

console.log(livro.titulo);

console.log(`${livro.titulo} foi criado por ${livro.autor}`);


// Exercicio 01 

/*Crie um novo objeto chamado "carro" contendo as seguintes características:
- marca do carro
- modelo
- ano de fabricação
- quantidade de portas
- cor
-lista de opcionais (ar-condicionado, vidros elétricos, alarme)*/

/* exercicio 02 

mostre a segunte mensagem no console: 
o fiat uno fabricado em 1996 com duas portas e com vidros elétricos, foi um famoso carro no brasil.*/

const carro = {
    marca: "Karl Benz", modelo: "Benz Patent-Motorwagen", ano: 1886, quantidadeportas: 2, cor: "preto", opcionais: ["ar-condicionado", "vidros eletricos", "alarme"]

};

Object.freeze(carro); // deixa o objeto imutavel

console.log(`O ${carro.modelo} foi fabricado no ano de ${carro.ano} e com ${carro.quantidadeportas} e com ${carro.opcionais[2]} foi um carro famoso no mundo.`);


//objeto com array e outro objeto

const pessoa = {
    nome: "Charlie Chaplin", idade: 88, telefone: ["11-2135-0300", "11-96666-5555"], medidas: {
//propriedades como objeto
peso: 70, altura: 1.65

    }

};
console.log(`O ${pessoa.nome} tem ${pessoa.medidas.peso}kg e ${pessoa.medidas.altura}. contato: ${pessoa.telefone[1]}`);