const mech = document .getElementById("mech")
const text = document .getElementById("text")

const typ = document .getElementById("typ")
const text1 = document .getElementById("text1")

const příb = document .getElementById("příb")
const text2 = document .getElementById("text2")

mech.addEventListener("click", function() {
    text.classList.toggle("open")
    
})

typ.addEventListener("click", function() {
    text1.classList.toggle("open")
    
})

příb.addEventListener("click", function() {
    text2.classList.toggle("open")
    
})