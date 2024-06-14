let listaImgPrincipal = ["imgs/inicial/principal/fordBronco.jpg","imgs/inicial/principal/fordPicape.jpg","imgs/inicial/principal/fordNewMustang.jpg","imgs/inicial/principal/fordultima.avif"];

const imgSlider = document.querySelector("#imgSlider");
const botaoProximo = document.querySelector("#botaoProximo");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botoesCategorias = document.querySelectorAll(".botoesCategorias");

const botaoLogin = document.querySelector("#botaoLogin");
const botaoCadastro = document.querySelector("#botaoCadastro");
const usuarioLogado = document.querySelector("#usuarioLogado");

const botaoFeedback = document.querySelector("#botaoFeedback");
const modalFeedback = document.querySelector("#modalFeedback");
const fecharModalFeedback = document.querySelector("#fecharModalFeedback");
const botaoEnviarFeedback = document.querySelector("#botaoEnviarFeedback");
const selectFeedback =  document.querySelector("#selectFeedback");

const imgCategoria = document.querySelector("#imgCategoria");

const chatSuporte = document.querySelector(".chatSuporte");
const botaoChat = document.querySelector("#botaoChat");


let contadorImgPrincipal = 0;
imgSlider.src = listaImgPrincipal[0]
imgCategoria.src = "imgs/inicial/categorias/mustang.jpg";


// BOTOES SLIDER 
botaoProximo.addEventListener("click", function () {
    if (contadorImgPrincipal < listaImgPrincipal.length - 1) {
        contadorImgPrincipal++
        imgSlider.src = listaImgPrincipal[contadorImgPrincipal];
    }
    
});

botaoAnterior.addEventListener("click", function () {
    if (contadorImgPrincipal > 0) {
        contadorImgPrincipal--
        imgSlider.src = listaImgPrincipal[contadorImgPrincipal];
    }
       
});

// SELEÇÃO DAS IMAGENS DE CADA CATEGORIA 
for (let index = 0; index < botoesCategorias.length; index++) {
    botoesCategorias[index].addEventListener("click", function () {
        if (index === 0) {
            imgCategoria.src = "imgs/inicial/categorias/mustang.jpg";
        }
        if (index === 1) {
            imgCategoria.src = "imgs/inicial/categorias/picape.avif"
        }
        if (index === 2) {
            imgCategoria.src = "imgs/inicial/categorias/eletrico.jfif"
        }
        if (index === 3) {
            imgCategoria.src = "imgs/inicial/categorias/performance.avif"
        }
        if (index === 4) {
            imgCategoria.src = "imgs/inicial/categorias/comercial.avif"
        }
    })
  
    
}


botaoChat.addEventListener("click", () => {
    chatSuporte.classList.toggle("ativado")
})


botaoFeedback.addEventListener("click", () => {
    modalFeedback.style.display = "flex"
})

fecharModalFeedback.addEventListener("click", () => {
    modalFeedback.style.display = "none"
})

botaoEnviarFeedback.addEventListener("click", () => {
    modalAlerta.style.display = "flex"
    botaoEnviarFeedback.disabled = true
    setTimeout(() => {
        modalAlerta.style.display = "none"
        botaoEnviarFeedback.disabled = false
    }, 2000);
    
})

selectFeedback.addEventListener("change", () => {
    botaoEnviarFeedback.disabled = false
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

// window.addEventListener("load", () => {
//     divSuv.style.display = "flex"
// })

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



let request_infoUsuario = JSON.parse(sessionStorage.usuarioSessionStorage)
console.log(request_infoUsuario);
usuarioLogado.textContent = request_infoUsuario.infoNome;

if (usuarioLogado) {
    var botaoSair = document.createElement("button");
    let botaoMinhaConta = document.createElement("button");

    botaoMinhaConta.textContent = "Minha Conta";
    botaoSair.textContent = "Sair"

    botaoMinhaConta.classList.toggle("botoesLogin");
    botaoSair.classList.toggle("botoesLogin");

    dropdownBotoesLogin.appendChild(botaoMinhaConta);
    dropdownBotoesLogin.appendChild(botaoSair);

    botaoLogin.style.display = "none";
    botaoCadastro.style.display = "none";

    botaoMinhaConta.addEventListener("click", (event)=>{
        window.location.href="usuario_cadastrado/usuario_cadastrado.html"
    })

    botaoSair.addEventListener("click", (event) => {

        remover_itens(botaoLogin, botaoCadastro, botaoMinhaConta, usuarioLogado);

    })

}

function remover_itens(w, x, y, z) {
    w.style.display = "flex";
    x.style.display = "flex";
    y.style.display = "none";
    z.textContent = "";
    
}





