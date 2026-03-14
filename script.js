let personagemFront = false
const botaoClicado = sessionStorage.getItem("botao")

const logoDA = document.getElementById("logoDA")

const mainAlunos = document.getElementById("mainAlunos");
const mainFuncionarios = document.getElementById("mainFuncionarios");
const mainPets = document.getElementById("mainPets");
const mainOutros = document.getElementById("mainOutros");

const boxGridAlunos = document.getElementById("boxGridAlunos");
const boxGridFuncionarios = document.getElementById("boxGridFuncionarios");
const boxGridPets = document.getElementById("boxGridPets");
const boxGridOutros = document.getElementById("boxGridOutros");

const main = document.querySelectorAll("main")

const screenWidth = screen.width;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function load()
{
    mainAlunos.style.opacity = 1
    mainFuncionarios.style.opacity = 1
    mainPets.style.opacity = 1
    mainOutros.style.opacity = 1

    if (botaoClicado === "todos")
    {
        btnTodos()
    }
    else if (botaoClicado === "alunos")
    {
        btnAlunos()
    }
    else if (botaoClicado === "func")
    {
        btnFuncionarios()
    }
    else if (botaoClicado === "pets")
    {
        btnPets()
    }
    else if (botaoClicado === "outros")
    {
        btnOutros()
    }
}

async function personagemShow(personagem)
{
    sessionStorage.setItem("personagem", personagem);

    mainAlunos.style.opacity = 0
    mainFuncionarios.style.opacity = 0 
    mainPets.style.opacity = 0 
    mainOutros.style.opacity = 0

    await sleep(300)
    
    window.location.href = "personagem.html";
}

const allpersonagensBox = document.getElementsByClassName("characterbox")

async function toggleBoxes()
{
    mainAlunos.style.opacity = 0
    mainFuncionarios.style.opacity = 0 
    mainPets.style.opacity = 0 
    mainOutros.style.opacity = 0
    searchBar.style.opacity = 0
    searchBar.disabled = true

    await sleep(300)

    mainAlunos.style.display = "none"
    mainFuncionarios.style.display = "none"
    mainPets.style.display = "none"
    mainOutros.style.display = "none"
}


function showInfoAlunos()
{
    personagemInfoAlunos.style.display = "block"
    personagemInfoFuncionarios.style.display = "none"
    personagemInfoPets.style.display = "none"
}

function showInfoFuncionarios()
{
    personagemInfoFuncionarios.style.display = "block"
    personagemInfoAlunos.style.display = "none"
    personagemInfoPets.style.display = "none"
}

function showInfoPets()
{
    personagemInfoPets.style.display = "block"
    personagemInfoFuncionarios.style.display = "none"
    personagemInfoAlunos.style.display = "none"
}

async function hideAlunos()
{
    mainAlunos.style.opacity = 0
    await sleep(100)
    mainAlunos.style.display = "none"
}

async function hideFuncionarios()
{
    mainFuncionarios.style.opacity = 0
    await sleep(100)
    mainFuncionarios.style.display = "none"
}

async function hidePets()
{
    mainPets.style.opacity = 0
    await sleep(100)
    mainPets.style.display = "none"
}

async function hideOutros()
{
    mainOutros.style.opacity = 0
    await sleep(100)
    mainOutros.style.display = "none"
}

async function btnTodos()
{
    mainAlunos.style.display = "block"
    mainFuncionarios.style.display = "block"
    mainFuncionarios.style.marginTop = "25%"
    mainPets.style.display = "block"
    mainPets.style.marginTop = "5%"
    mainOutros.style.display = "block"
    if(screenWidth > 600)
    {
        mainOutros.style.marginTop = "-15%"
    }
    else
    {
        mainOutros.style.marginTop = "-85%"
    }

    await sleep(100)

    mainAlunos.style.opacity = 1
    mainFuncionarios.style.opacity = 1
    mainPets.style.opacity = 1
    mainOutros.style.opacity = 1
}

async function btnAlunos()
{
    hideFuncionarios()
    hidePets()
    hideOutros()

    mainAlunos.style.display = "block"
    await sleep(100)
    mainAlunos.style.opacity = 1
}

async function btnFuncionarios()
{
    hideAlunos()
    hidePets()
    hideOutros()

    mainFuncionarios.style.display = "block"
    mainFuncionarios.style.marginTop = "25%"
    await sleep(100)
    mainFuncionarios.style.opacity = 1
}

async function btnPets()
{
    hideAlunos()
    hideFuncionarios()
    hideOutros()

    mainPets.style.display = "block"
    mainPets.style.marginTop = "5%"
    await sleep(100)
    mainPets.style.opacity = 1
}

async function btnOutros()
{
    hideAlunos()
    hideFuncionarios()
    hidePets()

    mainOutros.style.display = "block"
    if(screenWidth > 600)
    {
        mainOutros.style.marginTop = "-15%"
    }
    else
    {
        mainOutros.style.marginTop = "-85%"
    }
    await sleep(100)
    mainOutros.style.opacity = 1
}