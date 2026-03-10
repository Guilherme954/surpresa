const stars = document.getElementById("stars")
const startBtn = document.getElementById("startBtn")
const prep = document.getElementById("prep")
const prepText = document.getElementById("prepText")
const pedidoTela = document.getElementById("pedidoTela")
const fade = document.getElementById("cinemaFade")
const nomeAnimado = document.getElementById("nomeAnimado")
const perguntaTexto = document.getElementById("perguntaTexto")

let player
let started=false


function onYouTubeIframeAPIReady(){

player = new YT.Player('player',{

height:'0',
width:'0',

videoId:'F-cO2CMue4Q',

playerVars:{
autoplay:0,
controls:0
}

})

}


// criar estrelas

for(let i=0;i<120;i++){

const star=document.createElement("div")

star.className="star"

star.style.left=Math.random()*100+"vw"
star.style.top=Math.random()*100+"vh"

stars.appendChild(star)

}


// iniciar

startBtn.onclick=()=>{

if(started)return

started=true

startBtn.style.display="none"

prep.style.display="block"

if(player){
player.playVideo()
}

preparacao()

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

let tempo=10

prepText.innerHTML="Faltam "+tempo+" segundos... ❤️"

const intervalo=setInterval(()=>{

tempo--

if(tempo>0){

prepText.innerHTML="Faltam "+tempo+" segundos... ❤️"

}

else if(tempo===0){

prepText.innerHTML="Agora..."

}

else{

clearInterval(intervalo)

fade.classList.add("show")

setTimeout(()=>{

prep.style.display="none"

},600)

setTimeout(()=>{

fade.classList.remove("show")

pedidoTela.style.display="block"

animarNome()

},1200)

}

},1000)

}



// nome aparecendo

function animarNome(){

const nome="Ludy Kellen"

let i = 0

nomeAnimado.style.opacity = 1

const escrever = setInterval(()=>{

nomeAnimado.innerHTML += nome[i]

i++

if(i === nome.length){

clearInterval(escrever)

setTimeout(()=>{

perguntaTexto.style.opacity = 1

explosao()

},800)

}

},150)

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

},5000)

}


function explosao(){

for(let i=0;i<60;i++){

setTimeout(coracao,i*60)

}

}
