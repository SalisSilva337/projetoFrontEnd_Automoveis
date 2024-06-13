let listaImgPrincipal = ["imgs/inicial/principal/fordBronco.jpg", "imgs/inicial/principal/fordPicape.jpg", "imgs/inicial/principal/fordNewMustang.jpg", "imgs/inicial/principal/fordultima.avif"];

const imgSlider = document.querySelector("#imgSlider");
const botaoProximo = document.querySelector("#botaoProximo");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botoesCategorias = document.querySelectorAll(".botoesCategorias");
const dropdownBotoesLogin = document.querySelector("#dropdownBotoesLogin");
const usuarioLogado = document.querySelector("#usuarioLogado")
const imgCategoria = document.querySelector("#imgCategoria");
const botaoCadastro = document.querySelector("#botaoCadastro");
const chatSuporte = document.querySelector(".chatSuporte");
const botaoChat = document.querySelector("#botaoChat");
const id_dropdownLoginAll = document.querySelector("#id_dropdownLoginAll");
const buttonLogin = document.querySelector("#buttonLogin");


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

if (usuarioLogado) {
    var botaoSair = document.createElement("button");
    let botaoMinhaConta = document.createElement("button");

    botaoMinhaConta.textContent = "Minha Conta";
    botaoSair.textContent = "Sair"

    botaoMinhaConta.classList.toggle("botoesLogin");
    botaoSair.classList.toggle("botoesLogin");

    dropdownBotoesLogin.appendChild(botaoMinhaConta);
    dropdownBotoesLogin.appendChild(botaoSair);

    buttonLogin.style.display = "none";
    botaoCadastro.style.display = "none";

    botaoMinhaConta.addEventListener("click", (event)=>{
        window.location.href="usuario_cadastrado/usuario_cadastrado.html"
    })

    botaoSair.addEventListener("click", (event) => {

        remover_itens(buttonLogin, botaoCadastro, botaoMinhaConta, usuarioLogado);

    })

}

function remover_itens(w, x, y, z) {
    w.style.display = "flex";
    x.style.display = "flex";
    y.style.display = "none";
    z.textContent = "";
    sessionStorage.clear();
}


