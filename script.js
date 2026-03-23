let personagemFront = false
const botaoClicado = sessionStorage.getItem("botao")

const logoDA = document.getElementById("logoDA")

const mainAlunos = document.getElementById("mainAlunos");
const mainFuncionarios = document.getElementById("mainFuncionarios");
const mainPets = document.getElementById("mainPets");
const mainOutros = document.getElementById("mainOutros");
const mainMU = document.getElementById("mainMU");

const boxGridAlunos = document.getElementById("boxGridAlunos");
const boxGridFuncionarios = document.getElementById("boxGridFuncionarios");
const boxGridPets = document.getElementById("boxGridPets");
const boxGridOutros = document.getElementById("boxGridOutros");
const boxGridMU = document.getElementById("boxGridMU");

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
    mainMU.style.opacity = 1

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
    else if (botaoClicado === "mu")
    {
        btnMU()
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
    mainMU.style.opacity = 0

    await sleep(300)

    mainAlunos.style.display = "none"
    mainFuncionarios.style.display = "none"
    mainPets.style.display = "none"
    mainOutros.style.display = "none"
    mainMU.style.display = "none"
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

async function hideMU()
{
    mainMU.style.opacity = 0
    await sleep(100)
    mainMU.style.display = "none"
}

async function btnTodos()
{
    mainAlunos.style.display = "block"
    mainFuncionarios.style.display = "block"
    mainFuncionarios.style.marginTop = "0%"
    mainPets.style.display = "block"
    mainPets.style.marginTop = "0%"
    mainOutros.style.display = "block"
    mainOutros.style.marginTop = "0%"
    mainMU.style.display = "block"
    mainMU.style.marginTop = "0%"

    await sleep(100)

    mainAlunos.style.opacity = 1
    mainFuncionarios.style.opacity = 1
    mainPets.style.opacity = 1
    mainOutros.style.opacity = 1
    mainMU.style.opacity = 1
}

async function btnAlunos()
{
    hideFuncionarios()
    hidePets()
    hideOutros()
    hideMU()

    mainAlunos.style.display = "block"
    await sleep(100)
    mainAlunos.style.opacity = 1
}

async function btnFuncionarios()
{
    hideAlunos()
    hidePets()
    hideOutros()
    hideMU()

    mainFuncionarios.style.display = "block"
    if(screenWidth > 800)
    {
        mainFuncionarios.style.marginTop = "15%"
    }
    else
    {
        mainFuncionarios.style.marginTop = "25%"
    }
    await sleep(100)
    mainFuncionarios.style.opacity = 1
}

async function btnPets()
{
    hideAlunos()
    hideFuncionarios()
    hideOutros()
    hideMU()

    mainPets.style.display = "block"
    if(screenWidth > 800)
    {
        mainPets.style.marginTop = "15%"
    }
    else
    {
        mainPets.style.marginTop = "25%"
    }
    await sleep(100)
    mainPets.style.opacity = 1
}

async function btnOutros()
{
    hideAlunos()
    hideFuncionarios()
    hidePets()
    hideMU()

    mainOutros.style.display = "block"
    if(screenWidth > 800)
    {
        mainOutros.style.marginTop = "15%"
    }
    else
    {
        mainOutros.style.marginTop = "25%"
    }
    await sleep(100)
    mainOutros.style.opacity = 1
}

async function btnMU()
{
    hideAlunos()
    hideFuncionarios()
    hidePets()
    hideOutros()

    mainMU.style.display = "block"
    if(screenWidth > 800)
    {
        mainMU.style.marginTop = "15%"
    }
    else
    {
        mainMU.style.marginTop = "25%"
    }
    await sleep(100)
    mainMU.style.opacity = 1
}

function anuncioClick()
{
    window.location.href = "sitesuperhipermegasecretodada.html";
}