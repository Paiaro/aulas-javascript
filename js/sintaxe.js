   //habilitando o modo estrito da linguem (faz uma checagem no codigo para evitar erros)
        /* ao fazer isso a linguagem passa a analizar se voce declarou variaveis e nao esta usando palavras-reservadas.
    se isso acontecer, erros serão exibidos.*/
    'use strict';
    //comentario apenas uma linha (ctrl ;)

    /* comentario de multiplas linhas (shift alt a) */

    console.log("hello world!");

    //manipulação de dados

    // variaveis (valores podem ser modificados)
    let curso = "HTML5 e CSS3"; //string, literal (entre aspas)
    let ano = 2024; //números (inteiro/real), sem aspas

    //variavel sem valor definido
    let disciplina;

    //atribuir valores apos declarar a variavel
    disciplina = "lógica";

    console.log(disciplina);




    //constantes (valores fixos e não podem ser modificados)
    const escola = "Senac - Penha";

    //saida de dados
    console.log(curso);
    console.log(ano);
    console.log(escola);


    // vrau = "vrau";
    // console.log(vrau);

    /*  palavras-chave de uso reservado: public, implements,private,arguments*/
    // let public = "palavras-reservadas!"
    // console.log(public);

    /*Saída de dados personalizada*/
    /*estou fazendo o curso de HTML5 e CSS3 no Senac Penha. */

    //concatenação (forma mais antiga/tradicional)
    console.log("Estou fazendo o curso de " + curso + " no " + escola + ".");

    //template literal/string (forma mais moderna)
    console.log(`estou fazendo o curso de ${curso} no ${escola}.`);

    //montando a frase antes de dar a saída nela

    let mensagem = `estou fazendo o curso de ${curso} no ${escola}.`;

    console.log(mensagem);


    /*operações matemáticas básicas*/
    let valor1 = 10;
    let valor2 = 5;
    let valor3 = 7.5;

    //operações simples

    let soma=valor1+valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;

console.log(`Soma: ${soma}`);
console.log(`Subtracao ${subtracao}`);
console.log(`Multiplicação ${multiplicacao}`);
console.log(`divisão ${divisao}`);