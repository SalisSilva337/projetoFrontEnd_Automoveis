const imgSlider = document.querySelector("#imgSlider");
const botaoProximo = document.querySelector("#botaoProximo");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botoesCategorias = document.querySelectorAll(".botoesCategorias");
const imgCategoria = document.querySelector("#imgCategoria");
const posicaoImg = document.querySelector("#posicaoImg")

listaImgPrincipal = ["imgs/transit_chassi.jpg", "imgs/frente.jpg", "imgs/lado.jpg", "imgs/tras.jpg"]

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
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/e-transit/chassi/overview/colorizer/branco-oxford/fbr-e-transit-chassi-colorizer-branco-oxford.jpg.dam.full.high.jpg/1713792719562.jpg"
    nomeCor.textContent = "Branco Oxford"
})

prata.addEventListener("click", () => {
    imgCorVeiculo.src = "https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/e-transit/chassi/overview/colorizer/prata-lunar/fbr-e-transit-chassi-colorizer-prata-lunar.jpg.dam.full.high.jpg/1713792714778.jpg"
    nomeCor.textContent = "Prata Lunar"
})


const divHeader = document.querySelector("#divHeader");
const fordLogo = document.querySelector("#fordLogo");
const botoesHeader = document.querySelectorAll(".botoesHeader");

const dropdownVeiculos = document.querySelector(".dropdownVeiculos");
const dropdownCategoriaVeiculos = document.querySelector("#dropdownCategoriaVeiculos");

const dropdownLoginAll = document.querySelector(".dropdownLoginAll");

const dropdownCategoriaServicos = document.querySelector("#dropdownCategoriaServicos");
const dropdownSuporteServicos = document.querySelector(".dropdownSuporteServicos");


//Transição do Header ficar transparente para a cor branca (e vice-versa)
window.addEventListener("scroll", function () {
    if (window.scrollY === 0 ) {
        divHeader.style.color = "white";
        fordLogo.style.filter ="invert(100%) sepia(100%) saturate(0%) hue-rotate(345deg) brightness(103%) contrast(101%)";
        divHeader.style.backgroundColor = "transparent";

        divHeader.addEventListener("mouseover", function () {
            divHeader.style.color = "rgb(0, 20, 45)";
            fordLogo.style.filter ="invert(11%) sepia(10%) saturate(5051%) hue-rotate(175deg) brightness(92%) contrast(108%)";
            divHeader.style.backgroundColor = "white";

            for (let index = 0; index < botoesHeader.length; index++) {
                botoesHeader[index].style.color =  "rgb(0, 20, 45)";
                
            }
        });
        
        for (let index = 0; index < botoesHeader.length; index++) {
            botoesHeader[index].style.color =  "white";
            
        }
    }

    else{
        divHeader.style.color = "rgb(0, 20, 45)";
        divHeader.style.backgroundColor = "white";
        fordLogo.style.filter ="invert(11%) sepia(10%) saturate(5051%) hue-rotate(175deg) brightness(92%) contrast(108%)";
        for (let index = 0; index < botoesHeader.length; index++) {
            botoesHeader[index].style.color =  "rgb(0, 20, 45)";
            
        }
    }
   
});


fordLogo.addEventListener("click", () => {
    window.location.href = "../../home.html"
})


//Mostrar DropDown dos Botoes
botoesHeader[0].addEventListener("click", function () {
    dropdownVeiculos.classList.toggle("ativado")
});


dropdownVeiculos.addEventListener("mouseleave", function () {
    dropdownVeiculos.classList.remove("ativado")
});

dropdownLoginAll.addEventListener("mouseleave", function () {
    dropdownLoginAll.classList.remove("ativado")
});

dropdownCategoriaServicos.addEventListener("mouseleave", function () {
    dropdownSuporteServicos.classList.remove("ativado")
});
    
botoesHeader[1].addEventListener("click", function () {
    dropdownSuporteServicos.classList.toggle("ativado")
});

 botoesHeader[2].addEventListener("click", function () {
    dropdownLoginAll.classList.toggle("ativado")
});


const divLocalizarConcessionaria = document.querySelector("#divLocalizarConcessionaria")
const iframeMaps = document.querySelector(".iframeMaps")


divLocalizarConcessionaria.addEventListener("click", () => {
    iframeMaps.classList.toggle("ativado")
})


const botaoSuv = document.querySelector("#botaoSuv")
const botaoPicapes = document.querySelector("#botaoPicapes")
const botaoEletricos = document.querySelector("#botaoEletricos")
const botaoPerformance = document.querySelector("#botaoPerformance")
const botaoComercial = document.querySelector("#botaoComercial")

const divSuv = document.querySelector("#divSuv")
const divPicapes = document.querySelector("#divPicapes")
const divEletricos = document.querySelector("#divEletricos")
const divPerformance = document.querySelector("#divPerformance")
const divComercial = document.querySelector("#divComercial")

window.addEventListener("load", () => {
    divSuv.style.display = "flex"
})

botaoSuv.addEventListener("click", () => {
    divSuv.style.display = "flex"
    divPicapes.style.display = "none"
    divEletricos.style.display = "none"
    divPerformance.style.display = "none"
    divComercial.style.display = "none"
})

botaoPicapes.addEventListener("click", () => {
    divSuv.style.display = "none"
    divPicapes.style.display = "flex"
    divEletricos.style.display = "none"
    divPerformance.style.display = "none"
    divComercial.style.display = "none"
})

botaoEletricos.addEventListener("click", () => {
    divSuv.style.display = "none"
    divPicapes.style.display = "none"
    divEletricos.style.display = "flex"
    divPerformance.style.display = "none"
    divComercial.style.display = "none"
})

botaoPerformance.addEventListener("click", () => {
    divSuv.style.display = "none"
    divPicapes.style.display = "none"
    divEletricos.style.display = "none"
    divPerformance.style.display = "flex"
    divComercial.style.display = "none"
})

botaoComercial.addEventListener("click", () => {
    divSuv.style.display = "none"
    divPicapes.style.display = "none"
    divEletricos.style.display = "none"
    divPerformance.style.display = "none"
    divComercial.style.display = "flex"
})