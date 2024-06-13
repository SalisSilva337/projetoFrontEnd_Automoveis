const login_nome = document.querySelector("#login_nome");
const login_senha = document.querySelector("#login_senha");
const botaoEntrar = document.querySelector("#botaoEntrar");
const avisoLoginNome = document.querySelector("#avisoLoginNome");
const avisoLoginSenha = document.querySelector("#avisoLoginSenha");

let request_infoUsuario = JSON.parse(sessionStorage.usuarioSessionStorage);
console.log(request_infoUsuario);

botaoEntrar.addEventListener("click", (event)=>{
    
    if(login_nome.value!==request_infoUsuario.infoNome){
        login_nome.style.borderColor="red"
        avisoLoginNome.style.display="flex"
    }else if (login_senha.value!==request_infoUsuario.infoSenha){
        login_senha.style.borderColor="red"
        avisoLoginSenha.style.display="flex"
    } else {
        login_nome.style.borderColor="black";
        avisoLoginNome.style.display="none";

        login_senha.style.borderColor="black";
        avisoLoginSenha.style.display="none";

        let infoUsuarioLogin = {
            "infoNome": login_nome.value,
            "infoSenha": login_senha.value
        }

        sessionStorage.usuarioSessionStorage = JSON.stringify(infoUsuarioLogin);
        window.location.href = "../home.html";
        
    }
   

})