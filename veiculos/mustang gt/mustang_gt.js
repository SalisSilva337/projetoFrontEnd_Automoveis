const imgSlider = document.querySelector("#imgSlider");
const botaoProximo = document.querySelector("#botaoProximo");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botoesCategorias = document.querySelectorAll(".botoesCategorias");
const imgCategoria = document.querySelector("#imgCategoria");
const posicaoImg = document.querySelector("#posicaoImg")

listaImgPrincipal = ["imgs/mustang_gt.jpg", "imgs/frente.jpg", "imgs/lado.jpg", "imgs/tras.jpg", "imgs/interior.jpg"]

let contadorImgPrincipal = 0;
let contarImg = 1;
imgSlider.src = listaImgPrincipal[0]


botaoProximo.addEventListener("click", function () {
    if (contadorImgPrincipal < listaImgPrincipal.length - 1) {
        contadorImgPrincipal++
        contarImg++
        imgSlider.src = listaImgPrincipal[contadorImgPrincipal];
        posicaoImg.textContent = contarImg + "/5"
    }
    
});

botaoAnterior.addEventListener("click", function () {
    if (contadorImgPrincipal > 0) {
        contadorImgPrincipal--
        contarImg--
        imgSlider.src = listaImgPrincipal[contadorImgPrincipal];
        posicaoImg.textContent = contarImg + "/5"
    }
    
});

const branco = document.querySelector("#branco");
const prata = document.querySelector("#prata");

branco.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/branco-artico/fbr-colorizer-mustang-gt-branco-artico.jpg.dam.full.high.jpg/1711376820369.jpg"
    nomeCor.textContent = "Branco Ártico"
});
vermelhoEscuro.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/vermelho-arizona/fbr-colorizer-mustang-gt-vermelho-arizona.jpg.dam.full.high.jpg/1714086012482.jpg"
    nomeCor.textContent = "Vermelho Arizona"
});
preto.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/preto-asturias/fbr-colorizer-mustang-gt-preto-asturias.jpg.dam.full.high.jpg/1711376831578.jpg"
    nomeCor.textContent = "Preto Astúrias"
});
cinzaClaro.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/cinza-torres/fbr-colorizer-mustang-gt-cinza-torres.jpg.dam.full.high.jpg/1711376835659.jpg"
    nomeCor.textContent = "Cinza Torres"
});
cinzaEscuro.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/cinza-catalunha/fbr-colorizer-mustang-gt-cinza-catalunha.jpg.dam.full.high.jpg/1711376842641.jpg"
    nomeCor.textContent = "Cinza Catalunha"
});
azulClaro.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/azul-estorial/fbr-colorizer-mustang-gt-azul-estoril.jpg.dam.full.high.jpg/1711376846510.jpg"
    nomeCor.textContent = "Azul Estoril"
});
vermelhoClaro.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/vermelho-zadar/fbr-colorizer-mustang-gt-vermelho-zadar.jpg.dam.full.high.jpg/1714086006833.jpg"
    nomeCor.textContent = "Vermelho Zadar"
});
azulEscuro.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/azul-algarve/fbr-colorizer-mustang-gt-azul-algarve.jpg.dam.full.high.jpg/1711376855016.jpg"
    nomeCor.textContent = "Azul Algarve"
});