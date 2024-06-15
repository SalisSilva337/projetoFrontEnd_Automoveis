const button_carregarDados = document.querySelector("#button_carregarDados");
const txtNome = document.querySelector("#txtNome");
const txtSobrenome = document.querySelector("#txtSobrenome");
const txtTelefone = document.querySelector("#txtTelefone");
const txtEmail = document.querySelector("#txtEmail");
const txtSenha = document.querySelector("#txtSenha");
const txtCEP = document.querySelector("#txtCEP");
const txtUF = document.querySelector("#txtUF");
const txtLocalidade = document.querySelector("#txtLocalidade");
const txtRua = document.querySelector("#txtRua");
const botaoEditar = document.querySelector("#botaoEditar");
const botaoConfirmar = document.querySelector("#botaoConfirmar");
const botaoPaginaInicial = document.querySelector("#botaoPaginaInicial");



botaoEditar.addEventListener("click", (event) => {
    txtNome.disabled = false;
    txtEmail.disabled = false;
    txtSenha.disabled = false;
    txtCEP.disabled = false;
});

botaoConfirmar.addEventListener("click", (event) => {
    txtNome.disabled = true;
    txtEmail.disabled = true;
    txtSenha.disabled = true;
    txtCEP.disabled = true;

    let infoUsuario = {
        "infoNome": txtNome.value,
        "infoEmail": txtEmail.value,
        "infoSenha": txtSenha.value,
        "infoCEP": txtCEP.value,
        "infoLocalidade": txtUF.value,
        "infoUF": txtLocalidade.value
    }

    sessionStorage.usuarioSessionStorage = JSON.stringify(infoUsuario)

});

botaoPaginaInicial.addEventListener("click", (event)=>{
    window.location.href="../home.html"
})



let request_infoUsuario = JSON.parse(sessionStorage.usuarioSessionStorage)
console.log(request_infoUsuario);


txtNome.value = request_infoUsuario.infoNome;
txtEmail.value = request_infoUsuario.infoEmail;
txtSenha.value = request_infoUsuario.infoSenha;
txtCEP.value = request_infoUsuario.infoCEP;
txtUF.value = request_infoUsuario.infoUF;
txtLocalidade.value = request_infoUsuario.infoLocalidade;


