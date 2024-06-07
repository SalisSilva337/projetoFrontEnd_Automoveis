const div_dados_do_usuario = document.querySelector("#div_dados_do_usuario");
const script_button_login = document.querySelector("#script_button_login");
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const repetir_senha = document.querySelector("#repetir_senha");
const senhaInvalida = document.querySelector("#senhaInvalida");
const emailInvalido = document.querySelector("#emailInvalido");

telefone.addEventListener("input", (event) => {
    let maxLength = parseInt(telefone.getAttribute('maxlength'));
    
    if (telefone.value.length > maxLength) {
        telefone.value = telefone.value.slice(0, maxLength);
      }
})

script_button_login.addEventListener("click", (event) => {
    if (validar_campo()) {

        if (validar_email(email.value)) {

            if (validar_senha(repetir_senha.value)) {

                div_dados_do_usuario.innerHTML = ""

                let titulo_cadastro_endereco = document.createElement("h2");
                let label_CEP = document.createElement("label");
                let input_CEP = document.createElement("input");
                let label_UF = document.createElement("label");
                let input_UF = document.createElement("input");
                let label_Localidade = document.createElement("label");
                let input_Localidade = document.createElement("input");
                let label_Rua = document.createElement("label");
                let input_Rua = document.createElement("input");
                let script_button_login_finalizar = document.createElement("button");

                input_CEP.id = "input_CEP";
                input_UF.disabled = true;
                input_Localidade.disabled = true;
                input_CEP.type = "number";

                input_CEP.addEventListener("input", (event) => {
                    let maxLength = 8;
                    
                    if (input_CEP.value.length > maxLength) {
                        input_CEP.value = input_CEP.value.slice(0, maxLength);
                      }
                })

                titulo_cadastro_endereco.classList.add("titulo_cadastro");
                label_CEP.classList.add("label_titulo");
                input_CEP.classList.add("input_login");
                label_UF.classList.add("label_titulo");
                input_UF.classList.add("input_login");
                label_Localidade.classList.add("label_titulo");
                input_Localidade.classList.add("input_login");
                label_Rua.classList.add("label_titulo");
                input_Rua.classList.add("input_login");
                script_button_login_finalizar.classList.add("button_login");

                titulo_cadastro_endereco.textContent = "Informe seu CEP.";
                label_CEP.textContent = "CEP*";
                label_UF.textContent = "UF*";
                label_Localidade.textContent = "Localidade*";
                label_Rua.textContent = "Rua (opcional)";
                script_button_login_finalizar.textContent = "Finalizar";

                titulo_cadastro_endereco.style.fontSize = "25px";
                div_dados_do_usuario.style.height = "645px";

                div_dados_do_usuario.appendChild(titulo_cadastro_endereco);
                div_dados_do_usuario.appendChild(label_CEP);
                div_dados_do_usuario.appendChild(input_CEP);
                div_dados_do_usuario.appendChild(label_UF);
                div_dados_do_usuario.appendChild(input_UF);
                div_dados_do_usuario.appendChild(label_Localidade);
                div_dados_do_usuario.appendChild(input_Localidade);
                div_dados_do_usuario.appendChild(label_Rua);
                div_dados_do_usuario.appendChild(input_Rua);
                div_dados_do_usuario.appendChild(script_button_login_finalizar);

                input_CEP.addEventListener("input", (event) => {
                    buscar_CEP(input_CEP.value, input_UF, input_Localidade, input_Rua);
                });

                script_button_login_finalizar.addEventListener("click", (event) => {
                    if (validar_campo_endereco()) {
                        div_dados_do_usuario.innerHTML = "";
                        let infoUsuario = {
                            "infoNome": nome.value,
                            "infoSobrenome": sobrenome.value,
                            "infoTelefone": telefone.value,
                            "infoEmail": email.value,
                            "infoSenha": senha.value,
                            "infoCEP": input_CEP.value,
                            "infoUF": input_UF.value,
                            "infoLocalidade": input_Localidade.value,
                            "infoRua": input_Rua.value

                        }

                        sessionStorage.usuarioSessionStorage = JSON.stringify(infoUsuario)
                        window.location.href = "../home.html";
                    }

                })
            }
        }
    }

});

function buscar_CEP(cep_value, uf_value, localidade_value, rua_value) {
    let url = "https://viacep.com.br/ws/" + cep_value + "/json/"
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
  
    request.onload = () => {
        let request_CEP = JSON.parse(request.response);
        uf_value.value = request_CEP.uf;
        localidade_value.value = request_CEP.localidade;
        rua_value.value = request_CEP.rua;

        if(uf_value.value=== "undefined"){
            uf_value.value = "";
        }
        if(localidade_value.value=== "undefined"){
            localidade_value.value = "";
        }
        if (rua_value.value === "undefined") {
            rua_value.value = "";
        }


    }

};

function validar_campo() {
    if (nome.value === "") {
        nome.style.borderColor = "red";
        document.getElementById("nome").placeholder = "Campo obrigatório*"
        return false;

    } else if (sobrenome.value === "") {
        sobrenome.style.borderColor = "red";
        document.getElementById("sobrenome").placeholder = "Campo obrigatório*"
        return false;

    } else if (telefone.value === "") {
        telefone.style.borderColor = "red";
        document.getElementById("telefone").placeholder = "Campo obrigatório*"
        return false;

    } else if (email.value === "") {
        email.style.borderColor = "red";
        document.getElementById("email").placeholder = "Campo obrigatório*"
        return false;

    } else if (senha.value === "") {
        senha.style.borderColor = "red";
        document.getElementById("senha").placeholder = "Campo obrigatório*"
        return false;

    } else if (repetir_senha.value === "") {
        repetir_senha.style.borderColor = "red";
        document.getElementById("repetir_senha").placeholder = "Campo obrigatório*"
        return false;
    }
    else {
        return true;
    }
};

function validar_campo_endereco() {
    if (input_CEP.value === "") {
        input_CEP.style.borderColor = "red";
        document.getElementById("input_CEP").placeholder = "Campo obrigatório*"
        return false;
    } else {
        return true;
    }
}
function validar_email(emailValue) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z-0-9._-]+\.[a-zA-Z]{2,}/
    );

    if (emailRegex.test(emailValue)) {
        emailInvalido.style.display = "none";
        return true;
    } else {
        emailInvalido.style.display = "flex";
        return false;
    }
}
function validar_senha(repetirSenha) {

    if (repetirSenha === senha.value) {
        return true;
    } else {
        senhaInvalida.style.display = "flex";
        return false;
    }

};

