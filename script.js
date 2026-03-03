const mech = document .getElementById("mech")
const text = document .getElementById("text")

const typ = document .getElementById("typ")
const text1 = document .getElementById("text1")

const příb = document .getElementById("příb")
const text2 = document .getElementById("text2")

const výv = document .getElementById("výv")
const text3 = document .getElementById("text3")

mech.addEventListener("click", function() {
    text.classList.toggle("open")
})

typ.addEventListener("click", function() {
    text1.classList.toggle("open") 
})

příb.addEventListener("click", function() {
    text2.classList.toggle("open")
})

výv.addEventListener("click", function() {
    text3.classList.toggle("open")
})