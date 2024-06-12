let listaImgPrincipal = ["imgs/inicial/principal/fordBronco.jpg","imgs/inicial/principal/fordPicape.jpg","imgs/inicial/principal/fordNewMustang.jpg","imgs/inicial/principal/fordultima.avif"];

const imgSlider = document.querySelector("#imgSlider");
const botaoProximo = document.querySelector("#botaoProximo");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botoesCategorias = document.querySelectorAll(".botoesCategorias");
const dropdownBotoesLogin = document.querySelector("#dropdownBotoesLogin");
const usuarioLogado = document.querySelector("#usuarioLogado")
const imgCategoria = document.querySelector("#imgCategoria");

const chatSuporte = document.querySelector(".chatSuporte");
const botaoChat = document.querySelector("#botaoChat");



let contadorImgPrincipal = 0;
imgSlider.src = listaImgPrincipal[0]
imgCategoria.src = "imgs/inicial/categorias/mustang.jpg";

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

 
let request_infoUsuario = JSON.parse(sessionStorage.usuarioSessionStorage)
console.log(request_infoUsuario);
usuarioLogado.textContent = request_infoUsuario.infoNome;

if(usuarioLogado){
    let botaoSair=document.createElement("button");
    botaoSair.textContent="Sair"
    dropdownBotoesLogin.appendChild(botaoSair);

    botaoSair.addEventListener("click", (event)=>{
        usuarioLogado.textContent=""

    })

}


