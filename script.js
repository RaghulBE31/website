const startBtn = document.getElementById("startBtn")
const cakeScreen = document.getElementById("cakeScreen")
const intro = document.getElementById("intro")

startBtn.onclick = () => {

intro.style.display = "none"
cakeScreen.style.display = "flex"

}

const blowBtn = document.getElementById("blowBtn")

blowBtn.onclick = () => {

document.querySelectorAll(".flame").forEach(f=>{
f.style.display="none"
})

confetti({
particleCount:300,
spread:120
})

document.getElementById("popup").style.display="flex"

document.getElementById("song").play()

}
