const divConteudo = document.querySelector("#divConteudo");
const ecosport = document.querySelector("#ecosport");
const botaoVoltar = document.querySelector("#botaoVoltar");
const fecharModal = document.querySelector("#fecharModal");
const divConteudoCarros = document.querySelector("#divConteudoCarros");
const divCadaVeiculo = document.querySelectorAll(".divCadaVeiculo");
const divConteudoCaminhoes = document.querySelector("#divConteudoCaminhoes");
const desativado = document.querySelectorAll(".desativado")
const setas = document.querySelectorAll(".setas")
const botoesFipeInfo = document.querySelectorAll(".botoesFipeInfo")
const imgVeiculos = document.querySelectorAll(".imgVeiculos");

for (let index = 0; index < desativado.length; index++) {

    botoesFipeInfo[index].addEventListener("click", () => {

        if (index === 0) {
            desativado[0].classList.toggle("ativado")
            setas[0].classList.toggle("rodar")
        }

        if (index === 1) {
            desativado[1].classList.toggle("ativado")
            setas[1].classList.toggle("rodar")
        }

        if (index === 2) {
            desativado[2].classList.toggle("ativado")
            setas[2].classList.toggle("rodar")
        }
        

    })

}

botaoVoltar.addEventListener("click", function () {
    window.location.href = "";
});

fecharModal.addEventListener("click", function () {
    modal.style.display = "none";
    fecharModal.style.display = "none";
    modalAnos.style.display= "none";
    window.location.href = "";
});


function tabelaFipeCaminhoes(escolhaVeiculo) {

    divConteudo.innerHTML="";

    let url = "https://parallelum.com.br/fipe/api/v1/"+ escolhaVeiculo.value +"/marcas/105/modelos"
    divConteudoCaminhoes.style.display = "flex";

    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send();

    let listaVeiculos = JSON.parse(request.response).modelos;
    console.log(listaVeiculos);

    for (let index = 0; index < divCadaVeiculo.length; index++) {
        divCadaVeiculo[index].addEventListener("click", function () {
            modalConteudo.innerHTML="";
            modal.style.display= "flex";
            fecharModal.style.display = "flex";
            let filtrarVeiculo = listaVeiculos.filter((item) => item.nome.startsWith(this.value));
            console.log(this.value);
            console.log(filtrarVeiculo);
            
            let divModelosVeiculo = document.createElement("div");
            let divModelosNomeclaturaModal = document.createElement("div");
            let divImgModal = document.createElement("div");
            let nomeVeiculoModal = document.createElement("h2");
            let modelosNomeclaturaModal = document.createElement("h1");
            let divDescricaoModal = document.createElement("div");
            divDescricaoModal.id = "divDescricaoModal";

            nomeVeiculoModal.textContent = this.value;
            modelosNomeclaturaModal.textContent = "MODELOS:"

            divModelosNomeclaturaModal.appendChild(modelosNomeclaturaModal);
            modalConteudo.appendChild(divModelosNomeclaturaModal);

            divImgModal.appendChild(imgVeiculos[index]);
            divImgModal.appendChild(nomeVeiculoModal);
            divImgModal.id = "divImgModal";
            divModelosVeiculo.id = "divModelosVeiculo";
            divModelosNomeclaturaModal.id = "divModelosNomeclaturaModal"
            
        
            modalConteudo.appendChild(divImgModal);
            modal.appendChild(fecharModal);

            
        
            for (let cont = 0; cont < filtrarVeiculo.length; cont++) {
                let modelosVeiculo = document.createElement("h2");
                modelosVeiculo.textContent = filtrarVeiculo[cont].nome;
                modelosVeiculo.value = filtrarVeiculo[cont].codigo;
                
                divModelosVeiculo.appendChild(modelosVeiculo);
                modalConteudo.appendChild(divModelosVeiculo);

                modelosVeiculo.addEventListener("click", function () {
                    divDescricaoModal.innerHTML="";
                    modalAnosConteudo.innerHTML= "";
                    modalAnos.style.display= "flex";
                    nomeVeiculoModal.textContent = this.textContent;
                    let urlModeloAno = "";
                    urlModeloAno = "https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/105/modelos/"+ this.value +"/anos";

                    let requestAnos = new XMLHttpRequest;
                    requestAnos.open("GET", urlModeloAno, false);
                    requestAnos.send();

                    let listaAnos = JSON.parse(requestAnos.response);
                    console.log(listaAnos)

                    let anoModeloNomeclatura = document.createElement("h1");
                    let divAnoModeloNomeclatura = document.createElement("div");
                    let divAnoModelo = document.createElement("div");

                    anoModeloNomeclatura.textContent = "ANOS:";


                    for (let index = 0; index < listaAnos.length; index++) {
                        let anoModelo = document.createElement("h2");
                        anoModelo.id = "anoModelo";
                        anoModelo.textContent = listaAnos[index].nome;
                        anoModelo.value = listaAnos[index].codigo;
                        divAnoModeloNomeclatura.appendChild(anoModeloNomeclatura);
                        divAnoModelo.appendChild(anoModelo);
                        modalAnosConteudo.appendChild(divAnoModeloNomeclatura);
                        modalAnosConteudo.appendChild(divAnoModelo);  
                        
                        anoModelo.addEventListener("click", function () {
                            divDescricaoModal.innerHTML="";
                            let urlValor = "";
                            urlValor = "https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/105/modelos/"+ modelosVeiculo.value +"/anos/"+ this.value;
                            let requestValor = new XMLHttpRequest;
                            requestValor.open("GET", urlValor, false);
                            requestValor.send();
        
                            let listaValor = JSON.parse(requestValor.response);
                            console.log(listaValor);

                            
                            let descricaoCombustivel = document.createElement("h2");
                            let descricaoAno = document.createElement("h2");
                            let descricaoCodigoFipe = document.createElement("h2");
                            let descricaoValor = document.createElement("h2");

                            descricaoCombustivel.textContent = "Combustível: " + listaValor.Combustivel;
                            descricaoAno.textContent = "Ano do Modelo: " + listaValor.AnoModelo;
                            descricaoCodigoFipe.textContent = "Codigo FIPE: " + listaValor.CodigoFipe;
                            descricaoValor.textContent = "Valor: " + listaValor.Valor;

                            divDescricaoModal.appendChild(descricaoCombustivel);
                            divDescricaoModal.appendChild(descricaoAno);
                            divDescricaoModal.appendChild(descricaoCodigoFipe);
                            divDescricaoModal.appendChild(descricaoValor);
                            
                            modalConteudo.appendChild(divDescricaoModal);
                            
                            
                        });
                    }

                });

            }
           
            

        });
    
    }

}



function tabelaFipe(escolhaVeiculo) {

    divConteudo.innerHTML="";

    let url = "https://parallelum.com.br/fipe/api/v1/"+ escolhaVeiculo.value +"/marcas/22/modelos"
    divConteudoCarros.style.display = "flex";

    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send();

    let listaVeiculos = JSON.parse(request.response).modelos;
    console.log(listaVeiculos);

    for (let index = 0; index < divCadaVeiculo.length; index++) {
        divCadaVeiculo[index].addEventListener("click", function () {
            modalConteudo.innerHTML="";
            modal.style.display= "flex";
            fecharModal.style.display = "flex";
            let filtrarVeiculo = listaVeiculos.filter((item) => item.nome.startsWith(this.value));
            console.log(this.value);
            console.log(filtrarVeiculo);
            
            let divModelosVeiculo = document.createElement("div");
            let divModelosNomeclaturaModal = document.createElement("div");
            let divImgModal = document.createElement("div");
            let nomeVeiculoModal = document.createElement("h2");
            let modelosNomeclaturaModal = document.createElement("h1");
            let divDescricaoModal = document.createElement("div");
            divDescricaoModal.id = "divDescricaoModal";

            nomeVeiculoModal.textContent = this.value;
            modelosNomeclaturaModal.textContent = "MODELOS:"

            divModelosNomeclaturaModal.appendChild(modelosNomeclaturaModal);
            modalConteudo.appendChild(divModelosNomeclaturaModal);

            divImgModal.appendChild(imgVeiculos[index]);
            divImgModal.appendChild(nomeVeiculoModal);
            divImgModal.id = "divImgModal";
            divModelosVeiculo.id = "divModelosVeiculo";
            divModelosNomeclaturaModal.id = "divModelosNomeclaturaModal"
            
        
            modalConteudo.appendChild(divImgModal);
            modal.appendChild(fecharModal);

            
        
            for (let cont = 0; cont < filtrarVeiculo.length; cont++) {
                let modelosVeiculo = document.createElement("h2");
                modelosVeiculo.textContent = filtrarVeiculo[cont].nome;
                modelosVeiculo.value = filtrarVeiculo[cont].codigo;
                
                divModelosVeiculo.appendChild(modelosVeiculo);
                modalConteudo.appendChild(divModelosVeiculo);

                modelosVeiculo.addEventListener("click", function () {
                    divDescricaoModal.innerHTML="";
                    modalAnosConteudo.innerHTML= "";
                    modalAnos.style.display= "flex";
                    nomeVeiculoModal.textContent = this.textContent;
                    let urlModeloAno = "";
                    urlModeloAno = "https://parallelum.com.br/fipe/api/v1/carros/marcas/22/modelos/"+ this.value +"/anos";

                    let requestAnos = new XMLHttpRequest;
                    requestAnos.open("GET", urlModeloAno, false);
                    requestAnos.send();

                    let listaAnos = JSON.parse(requestAnos.response);
                    console.log(listaAnos)

                    let anoModeloNomeclatura = document.createElement("h1");
                    let divAnoModeloNomeclatura = document.createElement("div");
                    let divAnoModelo = document.createElement("div");

                    anoModeloNomeclatura.textContent = "ANOS:";


                    for (let index = 0; index < listaAnos.length; index++) {
                        let anoModelo = document.createElement("h2");
                        anoModelo.id = "anoModelo";
                        anoModelo.textContent = listaAnos[index].nome;
                        anoModelo.value = listaAnos[index].codigo;
                        divAnoModeloNomeclatura.appendChild(anoModeloNomeclatura);
                        divAnoModelo.appendChild(anoModelo);
                        modalAnosConteudo.appendChild(divAnoModeloNomeclatura);
                        modalAnosConteudo.appendChild(divAnoModelo);  
                        
                        anoModelo.addEventListener("click", function () {
                            divDescricaoModal.innerHTML="";
                            let urlValor = "";
                            urlValor = "https://parallelum.com.br/fipe/api/v1/carros/marcas/22/modelos/"+ modelosVeiculo.value +"/anos/"+ this.value;
                            let requestValor = new XMLHttpRequest;
                            requestValor.open("GET", urlValor, false);
                            requestValor.send();
        
                            let listaValor = JSON.parse(requestValor.response);
                            console.log(listaValor);

                            
                            let descricaoCombustivel = document.createElement("h2");
                            let descricaoAno = document.createElement("h2");
                            let descricaoCodigoFipe = document.createElement("h2");
                            let descricaoValor = document.createElement("h2");

                            descricaoCombustivel.textContent = "Combustível: " + listaValor.Combustivel;
                            descricaoAno.textContent = "Ano do Modelo: " + listaValor.AnoModelo;
                            descricaoCodigoFipe.textContent = "Codigo FIPE: " + listaValor.CodigoFipe;
                            descricaoValor.textContent = "Valor: " + listaValor.Valor;

                            divDescricaoModal.appendChild(descricaoCombustivel);
                            divDescricaoModal.appendChild(descricaoAno);
                            divDescricaoModal.appendChild(descricaoCodigoFipe);
                            divDescricaoModal.appendChild(descricaoValor);
                            
                            modalConteudo.appendChild(divDescricaoModal);
                            
                            
                        });
                    }

                });

            }
           
            

        });
    
    }

}