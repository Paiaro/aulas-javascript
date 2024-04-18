'use strict';


/* Loops tradicionais mais usados:
- while (enquanto)
- for (para)


Normalmente, os loops são controlandos através de uma variavél contadora ou de alguma condição lógica para que p loop seja interrompido.*/

// Loop While

let contador = 1;

while (contador <= 5) {
    console.log(`Valor do contador : ${contador}`);
    contador++;
}

console.log("---------------------------------------------------");

// Loop FOR

for( let i = 1; i <=10; i++){

    console.log(`contador vale: ${i}`);
}
//obs: normalmente, variaveis de controle de repetição são chamadas de "i", "j", "k"

// Loop para acessar arrays

const alunos =["Chaves","chapolin","Madruga","bruxa do 71"];

// for (let i = 0; i < alunos.length;i++) {
//     console.log(alunos[i]);
    
// }

console.log('------------------------------------------------------');

//Loop exclusivo do JS para arrays : for/of

for(const aluno of alunos){

    console.log(aluno);
}

console.log('--------------------------------------------');

for (let i = 0; i < alunos.length;i++) {
    if(i % 1==0){
console.log(alunos[i]);
    }
    
}

console.log('-------------------------------');


// Loop exclusivo do JS para objetos: for/in

const livro={
    titulo: "HTML5", autor: "Maujor", site: "http/maujor.com", ano: 2016
};
//acessando a propriedade dentro do livro usando o IN
for(const prop in livro){

console.log(livro[prop]);

}