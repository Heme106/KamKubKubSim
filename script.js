const mech = document .getElementById("mech")
const text = document .getElementById("text")

const typ = document .getElementById("typ")
const text1 = document .getElementById("text1")

mech.addEventListener("click", function() {
    text.classList.toggle("open")
    
})

typ.addEventListener("click", function() {
    text1.classList.toggle("open")
    
})