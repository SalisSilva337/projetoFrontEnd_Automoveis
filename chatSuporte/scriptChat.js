const socket = io('http://localhost:3000')

const loginContainer = document.querySelector("#loginContainer")
const mensagemContainer = document.querySelector("#mensagemContainer")
const mensagemForm = document.querySelector("#mensagemForm")
const mensagemInput = document.querySelector("#mensagemInput")

const botaoIngressar = document.querySelector("#botaoIngressar")
const botaoEnviar = document.querySelector("#botaoEnviar")
const alertaNome = document.querySelector("#alertaNome")




botaoIngressar.addEventListener("click", function fodase() {
    const name = usuarioLogado.textContent

    if (name === "") {

        alertaNome.style.display = "flex"
        alertaNome.style.animation = "alertaAnim 1s"
        setTimeout(() => {
            alertaNome.style.display = "none"
            alertaNome.style.animation = ""
        }, 2000);
       
    }

    if (name !== "") {
        loginContainer.style.display = "none"
        mensagemInput.disabled = false
        appendMessage(name + " (Você) Ingressou")
        socket.emit("new-user", name)

        setTimeout(() => {
            appendMessage("Olá " + name + "!")
        }, 500);
        
        setTimeout(() => {
            appendMessage("Por qual motivo você acionou o suporte da Ford?")

            appendMessage("1. Problemas com o seu veiculo Ford \n 2. Problemas com a aba veiculos \n 3. Problemas com a assistência 24hs \n 4. Problemas com a tabela fipe ")
        }, 1200);
    }
    

   


    
    
})
    

  
    

mensagemInput.addEventListener("input", e => {
    botaoEnviar.hidden = false
})


socket.on('chat-message', data => {
    appendMessage(data.name + ": " + data.message)
})

socket.on('user-connected', name => {
    appendConnectedMessage(name + " conectou")
    
})


socket.on('user-disconnected', name => {
    appendDisconnectedMessage(name + " desconectou")
})

botaoEnviar.addEventListener("click", e => {
    botaoEnviar.hidden = true
    const message = mensagemInput.value
    const name = usuarioLogado.textContent
    selfAppendMessage(name + " (Você): " + message)
    socket.emit("send-chat-message", message)
    mensagemInput.value = ""
    mensagemContainer.scrollTo(0, mensagemContainer.scrollHeight)

    if (message === "1") {
        setTimeout(() => {
            appendMessage("Digite qual a sua problemática com relação ao seu veiculo Ford?") 
        }, 1200);

        botaoEnviar.addEventListener("click", () => {
                if (message !== "") {
                    setTimeout(() => {
                        appendMessage("Ok, enviaremos o seu relato para a equipe de suporte")
                    }, 1200);
                    setTimeout(() => {
                        appendMessage("Obrigado por fazer parte da família Ford")
                    }, 2200);
                }
    
        })
        
        

    }

    if (message === "2") {
        setTimeout(() => {
            appendMessage("Digite qual a sua problemática com relação a aba Veiculos?") 
        }, 1200);

        botaoEnviar.addEventListener("click", () => {
            if (message !== "") {
                setTimeout(() => {
                    appendMessage("Ok, enviaremos o seu relato para a equipe de suporte")
                }, 1200);
                setTimeout(() => {
                    appendMessage("Obrigado por fazer parte da família Ford")
                }, 2200);
            }

        })

    }

    if (message === "3") {
        setTimeout(() => {
            appendMessage("Digite qual a sua problemática com relação a assistência 24hs?") 
        }, 1200);

        
        botaoEnviar.addEventListener("click", () => {
            if (message !== "") {
                setTimeout(() => {
                    appendMessage("Ok, enviaremos o seu relato para a equipe de suporte")
                }, 1200);
                setTimeout(() => {
                    appendMessage("Obrigado por fazer parte da família Ford")
                }, 2200);
            }

        })

    }


    if (message === "4") {
        setTimeout(() => {
            appendMessage("Digite qual a sua problemática com relação a tabela fipe?") 
        }, 1200);

        botaoEnviar.addEventListener("click", () => {
            if (message !== "") {
                setTimeout(() => {
                    appendMessage("Ok, enviaremos o seu relato para a equipe de suporte")
                }, 1200);
                setTimeout(() => {
                    appendMessage("Obrigado por fazer parte da família Ford")
                }, 2200);
            }

        })
    }
})



function appendMessage(message) {
    const messageElement = document.createElement("div")
    messageElement.id = "messageElement"
    messageElement.innerText = message
    mensagemContainer.append(messageElement)
}

function appendConnectedMessage(message) {
    const messageConnectedElement = document.createElement("div")
    messageConnectedElement.id = "messageConnectedElement"
    messageConnectedElement.innerText = message
    mensagemContainer.append(messageConnectedElement)
}

function appendDisconnectedMessage(message) {
    const messageDisconnectedElement = document.createElement("div")
    messageDisconnectedElement.id = "messageDisconnectedElement"
    messageDisconnectedElement.innerText = message
    mensagemContainer.append(messageDisconnectedElement)
}

function selfAppendMessage(message) {
    const messageSelfElement = document.createElement("div")
    messageSelfElement.id = "messageSelfElement"
    messageSelfElement.innerText = message
    mensagemContainer.append(messageSelfElement)
}
