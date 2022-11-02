//Executa o codigo quando a pagina for carregada
window.addEventListener("load", () => {
    alert("Bem Vindo Usuario!")
    //document.querySelector("form") -> Permite acessar o nó do formulario
    //.addEventListener("submit",) ->Ele espera um evento
    document.querySelector("form").addEventListener("submit", (event) => {
        //Previte o comando default
        event.preventDefault()
    })

    // const texto = document.querySelector("#name");
    // texto.addEventListener("mouseover", () => {
    //     texto.style.backgroundColor = "black"
    // })

    // texto.addEventListener("mouseout", () => {
    //     texto.style.backgroundColor = "transparent"
    // })

    const inputs = document.querySelectorAll("input[type=text],input[type=number]")

    for (const input of inputs) {
        input.addEventListener("mouseover", () => {
            input.style.backgroundColor = "rgb(172, 214, 252)"
        })

        input.addEventListener("mouseout", () => {
            input.style.backgroundColor = "transparent"
        })
    }

    const nome = document.querySelector("#name")

    nome.addEventListener("keyup",(event)=>{
        document.querySelector("#dadosTecla").innerText = event.target.value
        document.querySelector("#qtdTecla").innerText = event.target.value.length;
    })

    document.querySelector("input[type=reset]").addEventListener("click",()=>{
        document.querySelector("#dadosTecla").innerText = "";
        document.querySelector("#qtdTecla").innerText = "";
    })

    
})