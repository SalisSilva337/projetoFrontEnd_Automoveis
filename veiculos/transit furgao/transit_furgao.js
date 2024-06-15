const imgSlider = document.querySelector("#imgSlider");
const botaoProximo = document.querySelector("#botaoProximo");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botoesCategorias = document.querySelectorAll(".botoesCategorias");
const imgCategoria = document.querySelector("#imgCategoria");
const posicaoImg = document.querySelector("#posicaoImg")

listaImgPrincipal = ["imgs/transit furgao.jpeg", "imgs/frente.jpg", "imgs/lado.jpg", "imgs/tras.jpg"]

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
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/transit-furgao/colorizer/prata-lunar/fbr-furgao-color-cinza.jpg.dam.full.high.jpg/1650489668894.jpg"
    nomeCor.textContent = "Prata Lunar"
})

prata.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/transit-furgao/colorizer/branco-oxford/fbr-transit-color-branca.jpg.dam.full.high.jpg/1650489672999.jpg"
    nomeCor.textContent = "Branco Oxford"
})