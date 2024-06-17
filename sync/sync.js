const horario = document.querySelector("#horario")
const musicaApp = document.querySelector("#musicaApp")
const mapsApp = document.querySelector("#mapsApp")
const mensagensApp = document.querySelector("#mensagensApp")
const configApp = document.querySelector("#configApp")
const iframe = document.querySelector("#iframeSync")
const botaoSair = document.querySelector("#botaoSair")


setInterval(() => {
    let hora = new Date ()
    horario.textContent = hora.toLocaleTimeString()
}, 100);


mapsApp.addEventListener("click", () => {
    iframe.hidden = false
    iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31465.898013255046!2d-35.7543257!3d-9.66075845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1718651382407!5m2!1spt-BR!2sbr"
})

musicaApp.addEventListener("click", () => {
    iframe.hidden = false
    iframe.src = "https://widget.deezer.com/widget/dark/playlist/10813379622"
})

botaoSair.addEventListener("click", () => {
    iframe.hidden = true
})