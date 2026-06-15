const perguntas = [
{
pergunta:"O que ajuda a preservar o meio ambiente?",
opcoes:["Desmatamento","Plantio Direto","Queimadas"],
correta:1
},
{
pergunta:"O agro produz:",
opcoes:["Alimentos","Poluição","Lixo"],
correta:0
},
{
pergunta:"Qual recurso deve ser preservado?",
opcoes:["Água","Desperdício","Poluição"],
correta:0
}
];

let atual=0;
let pontos=0;

function carregar(){

document.getElementById("pergunta").innerHTML=
perguntas[atual].pergunta;

document.getElementById("a").innerHTML=
perguntas[atual].opcoes[0];

document.getElementById("b").innerHTML=
perguntas[atual].opcoes[1];

document.getElementById("c").innerHTML=
perguntas[atual].opcoes[2];
}

function responder(opcao){

if(opcao===perguntas[atual].correta){
pontos++;
}

atual++;

if(atual<perguntas.length){
carregar();
}else{
document.querySelector(".quiz").innerHTML=
`<h1>Fim do Quiz</h1>
<h2>Pontuação: ${pontos}/${perguntas.length}</h2>`;
}
}

carregar();