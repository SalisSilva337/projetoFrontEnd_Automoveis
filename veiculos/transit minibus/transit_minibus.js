const imgSlider = document.querySelector("#imgSlider");
const botaoProximo = document.querySelector("#botaoProximo");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botoesCategorias = document.querySelectorAll(".botoesCategorias");
const imgCategoria = document.querySelector("#imgCategoria");
const posicaoImg = document.querySelector("#posicaoImg")

listaImgPrincipal = ["imgs/transit.jpg", "imgs/frente.jpg", "imgs/lado.jpg", "imgs/tras.jpg"]

let contadorImgPrincipal = 0;
let contarImg = 1;
imgSlider.src = listaImgPrincipal[0]


botaoProximo.addEventListener("click", function () {
    if (contadorImgPrincipal < listaImgPrincipal.length - 1) {
        contadorImgPrincipal++
        contarImg++
        imgSlider.src = listaImgPrincipal[contadorImgPrincipal];
        posicaoImg.textContent = contarImg + "/4"
    }
    
});

botaoAnterior.addEventListener("click", function () {
    if (contadorImgPrincipal > 0) {
        contadorImgPrincipal--
        contarImg--
        imgSlider.src = listaImgPrincipal[contadorImgPrincipal];
        posicaoImg.textContent = contarImg + "/4"
    }
    
});

const branco = document.querySelector("#branco");
const prata = document.querySelector("#prata");




branco.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/transit/colorizer/branco-oxford/fbr-transit-colores-branco-oxford.jpg.dam.full.high.jpg/1633639208917.jpg"
    nomeCor.textContent = "Branco Oxford"
})

prata.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/transit/colorizer/prata-lunar/fbr-transit-colores-prata-lunar.jpg.dam.full.high.jpg/1633639220680.jpg"
    nomeCor.textContent = "Prata Lunar"
})