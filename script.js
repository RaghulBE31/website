const startBtn = document.getElementById("startBtn")
const blowBtn = document.getElementById("blowBtn")

const intro = document.getElementById("intro")
const cakeScreen = document.getElementById("cakeScreen")

startBtn.onclick = () => {

intro.style.display="none"
cakeScreen.style.display="flex"

createBalloons()

}

blowBtn.onclick = () => {

document.querySelectorAll(".flame").forEach(f=>{

f.style.display="none"

const s=document.createElement("div")
s.className="smoke"
f.parentElement.appendChild(s)

})

confetti({
particleCount:400,
spread:160,
origin:{y:0.6}
})

document.getElementById("song").play()

document.getElementById("popup").style.display="flex"

}

function createBalloons(){

const balloons=["🎈","🎉","✨","🎊"]

for(let i=0;i<15;i++){

let b=document.createElement("div")

b.className="balloon"

b.innerHTML=balloons[Math.floor(Math.random()*balloons.length)]

b.style.left=Math.random()*100+"vw"

b.style.animationDuration=(6+Math.random()*5)+"s"

document.body.appendChild(b)

}

}
