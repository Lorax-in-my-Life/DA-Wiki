const title = document.getElementById("title")
let textotitulo = "BEM VINDO AO SITE NADA SUSPEITO\""

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function load()
{
    textoTitulo()
}

async function textoTitulo()
{
    for(const i of textotitulo)
    {
        title.textContent += i
        await sleep(50)
    }
}