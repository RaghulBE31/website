const btn = document.getElementById("blowBtn")

btn.onclick = () => {

document.querySelectorAll(".flame").forEach(f=>{
f.style.display="none"
})

confetti({
particleCount:300,
spread:120
})

document.getElementById("song").play()

document.getElementById("birthdayContent").style.display="block"

}
