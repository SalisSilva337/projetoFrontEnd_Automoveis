const socket = io('http://localhost:3000')

const loginContainer = document.querySelector("#loginContainer")
const mensagemContainer = document.querySelector("#mensagemContainer")
const mensagemForm = document.querySelector("#mensagemForm")
const mensagemInput = document.querySelector("#mensagemInput")
const usuarioLogado = document.querySelector("#usuarioLogado")
const botaoIngressar = document.querySelector("#botaoIngressar")
const botaoEnviar = document.querySelector("#botaoEnviar")





botaoIngressar.addEventListener("click", () => {
    loginContainer.style.display = "none"
    mensagemInput.disabled = false
    const name = usuarioLogado.textContent
    appendMessage(name + " (Você) Ingressou")
    socket.emit("new-user", name)
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
