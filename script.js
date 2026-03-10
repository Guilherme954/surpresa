const stars = document.getElementById("stars")
const startBtn = document.getElementById("startBtn")
const prep = document.getElementById("prep")
const prepText = document.getElementById("prepText")
const pedidoTela = document.getElementById("pedidoTela")
const fade = document.getElementById("cinemaFade")
const nomeAnimado = document.getElementById("nomeAnimado")
const perguntaTexto = document.getElementById("perguntaTexto")
const musica = document.getElementById("musica")

const sim = document.getElementById("sim")
const sim2 = document.getElementById("sim2")

let started=false

let player;

function onYouTubeIframeAPIReady() {

player = new YT.Player('player', {

height: '0',
width: '0',

videoId: 'F-cO2CMue4Q',

playerVars: {

autoplay: 0,
controls: 0,
rel: 0,
showinfo: 0

}

});

}

// criar estrelas animadas

for(let i=0;i<120;i++){

const star=document.createElement("div")

star.className="star"

star.style.left=Math.random()*100+"vw"
star.style.top=Math.random()*100+"vh"

stars.appendChild(star)

}


// iniciar

startBtn.onclick = () => {

if(started) return;

started = true;

startBtn.style.display = "none";

prep.style.display = "block";

// toca música
player.playVideo();

preparacao();

}



function preparacao(){

const textos=[

"Respira fundo...",

"Eu preparei esse momento com todo carinho.",

"Agora só mais alguns segundos..."

]

let etapa=0

function mostrar(){

if(etapa<textos.length){

prepText.innerHTML=textos[etapa]

etapa++

setTimeout(mostrar,2000)

}

else{

iniciarContagem()

}

}

mostrar()

}



// contagem

function iniciarContagem(){

let tempo = 10

prepText.innerHTML = "Faltam " + tempo + " segundos... ❤️"

const intervalo = setInterval(()=>{

tempo--

if(tempo > 0){

prepText.innerHTML = "Faltam " + tempo + " segundos... ❤️"

}

else if(tempo === 0){

prepText.innerHTML = "Agora..."

}

else{

clearInterval(intervalo)

fade.classList.add("show")

setTimeout(()=>{

prep.style.display="none"

},600)

setTimeout(()=>{

fade.classList.remove("show")

pedidoTela.classList.add("show")

animarNome()

setTimeout(()=>{

formarCoracao()

},500)

},1000)

}

},1000)

}     



// formar coração com estrelas

function formarCoracaoEstrelas(){

const estrelas=document.querySelectorAll(".star")

estrelas.forEach((s,i)=>{

s.style.transition="all 2s"

const x=50+16*Math.pow(Math.sin(i),3)

const y=40-(13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i))

s.style.left=x+"vw"

s.style.top=y+"vh"

})

}



// explosão de corações

function coracao(){

const heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},6000)

}

function explosao(){

for(let i=0;i<60;i++){

setTimeout(coracao,i*60)

}

}

if(sim) sim.onclick = explosao
if(sim2) sim2.onclick = explosao

function animarNome(){

const nome="Ludy Kellen...<br>"

let i=0

nomeAnimado.style.opacity=1

const escrever=setInterval(()=>{

nomeAnimado.innerHTML+=nome[i]

i++

if(i===nome.length){

clearInterval(escrever)

setTimeout(()=>{

perguntaTexto.classList.add("show")

},1000)

}

},150)

}

function formarCoracao(){

const estrelas = document.querySelectorAll(".star")

let t = 0

estrelas.forEach(star=>{

const x = 45 * Math.pow(Math.sin(t),3)

const y =
35 * Math.cos(t)
-15 * Math.cos(2*t)
-6 * Math.cos(3*t)
-3 * Math.cos(4*t)

star.style.left = (50 + x) + "vw"
star.style.top = (45 - y) + "vh"

t += 0.2

})


}





