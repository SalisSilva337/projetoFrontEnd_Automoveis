const form = document.querySelector("#form");
const botaoRegistrar = document.querySelector("#botaoRegistrar");
const nome = document.querySelector("#nome");
const input_CEP = document.querySelector("#input_CEP");
const input_Localidade = document.querySelector("#input_Localidade");
const input_UF = document.querySelector("#input_UF");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const repetir_senha = document.querySelector("#repetir_senha");
const senhaInvalida = document.querySelector("#senhaInvalida");

input_CEP.addEventListener("input", (event) => {
    buscar_CEP(buscar_CEP(input_CEP.value, input_Localidade, input_UF));
    if (input_CEP.value.length < 8) {
        input_Localidade.value = "";
        input_UF.value = "";
    };

    let maxLength = parseInt(input_CEP.getAttribute('maxlength'));

    if (input_CEP.value.length > maxLength) {
        input_CEP.value = input_CEP.value.slice(0, maxLength);
    };
});

email.addEventListener("input", (event) => {
    validar_email(email.value)
});

repetir_senha.addEventListener("input", (event) => {
    validar_senha(repetir_senha.value)
});

botaoRegistrar.addEventListener("click", (event) => {

    if (validar_campo() && validar_email(email.value) && validar_senha(repetir_senha.value)) {
        let infoUsuario = {
            "infoNome": nome.value,
            "infoEmail": email.value,
            "infoSenha": senha.value,
            "infoCEP": input_CEP.value,
            "infoLocalidade": input_Localidade.value,
            "infoUF": input_UF.value
        }
        console.log(infoUsuario);

        sessionStorage.usuarioSessionStorage = JSON.stringify(infoUsuario)
        window.location.href = "../home.html";
    };

});

function buscar_CEP(cep_value, localidade_value, uf_value) {
    let url = "https://viacep.com.br/ws/" + cep_value + "/json/"
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = () => {
        let request_CEP = JSON.parse(request.response);
        console.log(request_CEP)
        uf_value.value = request_CEP.uf;
        localidade_value.value = request_CEP.localidade;

        if (uf_value.value === "undefined") {
            uf_value.value = "";
        }
        if (localidade_value.value === "undefined") {
            localidade_value.value = "";
        }
    }
};

function validar_campo() {
    if (nome.value === "") {
        nome.style.borderColor = "red";
        document.getElementById("nome").placeholder = "Campo obrigatório*"
        return false;

    } else if (input_CEP.value === "") {
        input_CEP.style.borderColor = "red";
        document.getElementById("input_CEP").placeholder = "Campo obrigatório*"
        return false;

    } else if (email.value === "") {
        email.style.borderColor = "red";
        document.getElementById("email").placeholder = "Campo obrigatório*"
        return false;

    } else if (senha.value === "") {
        senha.style.borderColor = "red";
        document.getElementById("senha").placeholder = "Campo obrigatório*"
        return false;

    } else if (senha.value.length < 4) {

        let avisoInfo = document.querySelector(".avisoInfo");
        avisoInfo.style.color = "red";
        return false

    } else if (repetir_senha.value === "") {
        repetir_senha.style.borderColor = "red";
        document.getElementById("repetir_senha").placeholder = "Campo obrigatório*"
        return false;
    }
    else {
        return true;
    }
};

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
        senhaInvalida.style.display="none"
        return true;
    } else {
        senhaInvalida.style.display="flex"
        return false;
    }
};

