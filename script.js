const mech = document .getElementById("mech")
const text = document .getElementById("text")

const typ = document .getElementById("typ")
const text1 = document .getElementById("text1")

const příb = document .getElementById("příb")
const text2 = document .getElementById("text2")

const výv = document .getElementById("výv")
const text3 = document .getElementById("text3")

const dia = document .getElementById("dia")
const diagram_vývoj = document .getElementById("diagram_vývoj")

function otevrit_mechaniky () { 
    text.classList.toggle("open")
}

function otevrit_typy () { 
    text1.classList.toggle("open")
}

function otevrit_pribeh () { 
    text2.classList.toggle("open")
}

function otevrit_vyvoj () { 
    text3.classList.toggle("open")
}

function otevrit_obrazek () { 
    diagram_vývoj.classList.toggle("open")
}

mech.addEventListener("click", otevrit_mechaniky)

typ.addEventListener("click", otevrit_typy)

příb.addEventListener("click", otevrit_pribeh)

výv.addEventListener("click", otevrit_vyvoj)

dia.addEventListener("click", otevrit_obrazek)