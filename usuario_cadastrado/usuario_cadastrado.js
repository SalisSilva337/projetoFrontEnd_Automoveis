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


    let request_infoUsuario = JSON.parse(sessionStorage.usuarioSessionStorage)
    console.log(request_infoUsuario);
    txtNome.value = request_infoUsuario.infoNome;
    txtSobrenome.value = request_infoUsuario.infoSobrenome;
    txtTelefone.value = request_infoUsuario.infoTelefone;
    txtEmail.value = request_infoUsuario.infoEmail;
    txtSenha.value = request_infoUsuario.infoSenha;
    txtCEP.value = request_infoUsuario.infoCEP;
    txtUF.value = request_infoUsuario.infoUF;
    txtLocalidade.value = request_infoUsuario.infoLocalidade;
    txtRua.value = request_infoUsuario.infoRua;
