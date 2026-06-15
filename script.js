const perguntas = [
{
pergunta:"Qual é o principal objetivo da sustentabilidade?",
opcoes:[
"Explorar recursos",
"Preservar recursos para futuras gerações",
"Produzir lixo",
"Aumentar poluição"
],
correta:1
},

{
pergunta:"Quem produz boa parte dos alimentos consumidos no Brasil?",
opcoes:[
"Indústrias",
"Agricultores",
"Bancos",
"Escolas"
],
correta:1
},

{
pergunta:"Qual atitude ajuda o meio ambiente?",
opcoes:[
"Desperdiçar água",
"Queimar lixo",
"Reciclar",
"Poluir rios"
],
correta:2
},

{
pergunta:"O tema do Agrinho valoriza:",
opcoes:[
"A conexão campo e cidade",
"A destruição ambiental",
"O desperdício",
"A poluição"
],
correta:0
}
];

let atual = 0;
let pontos = 0;

function carregarPergunta(){

if(atual >= perguntas.length){

document.getElementById("pergunta").innerHTML="";
document.getElementById("respostas").innerHTML="";

document.getElementById("resultado").innerHTML=
`Você acertou ${pontos} de ${perguntas.length}!`;

return;
}

const p = perguntas[atual];

document.getElementById("pergunta").innerHTML=p.pergunta;

let html="";

p.opcoes.forEach((opcao,index)=>{
html += `
<button onclick="responder(${index})">
${opcao}
</button>`;
});

document.getElementById("respostas").innerHTML=html;
}

function responder(indice){

if(indice === perguntas[atual].correta){
pontos++;
}

atual++;

carregarPergunta();
}

function proximaPergunta(){
carregarPergunta();
}

carregarPergunta();