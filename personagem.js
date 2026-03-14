const personagem = sessionStorage.getItem("personagem")
const mainPersonagem = document.getElementById('mainPersonagem')
const personagemNome = document.getElementById('personagemNome')
const imgPersonagem = document.getElementById('imgPersonagem')
const descPersonagem = document.getElementById('descPersonagem')
const personagemEmoji = document.getElementById('personagemEmoji')
const personagemGenero = document.getElementById('personagemGenero')
const personagemFoto = document.getElementById('personagemFoto')
const txtEspecial = document.getElementById('txtEspecial')
const especiePersonagem = document.getElementById('especiePersonagem')
const dataPersonagem = document.getElementById('dataPersonagem')
const alturaPersonagem = document.getElementById('alturaPersonagem')
const materiasPersonagem = document.getElementById('materiasPersonagem')
const interpretadorPersonagem = document.getElementById('interpretadorPersonagem')
const designPersonagem = document.getElementById('designPersonagem')
const assPersonagem = document.getElementById('assPersonagem')
const cargoPersonagem = document.getElementById('cargoPersonagem')
const donoPersonagem = document.getElementById('donoPersonagem')

const infoData = document.getElementById('infoData')
const infoMateria = document.getElementById('infoMateria')
const infoCargo = document.getElementById('infoCargo')
const infoAss = document.getElementById('infoAss')
const infoDono = document.getElementById('infoDono')

const screenWidth = window.innerWidth;

if(window.width > 600)
{
    document.body.style.overflowY = "hidden"
}

const descBox = document.getElementById('descBox')
const relacionamentoBox = document.getElementById('relacionamentoBox')
const galeriaBox = document.getElementById('galeriaBox')

let nomes = [
    "alexander", "alow", "angela", "bellie", "bleeds", "cristian", "crystal", "daniel", "evelyn", "félix",
    "kate", "leonard", "lorette", "luna", "melissa", "nick", "paulo", "stella", "stephanie", "ambrósio",
    "elisângela", "flarence", "gerônimo", "gertrudes", "gomes", "ludden", "lunaris", "márcio", "sonia",
    "vincent", "cuscolar", "faisca", "mortimer", "nynphx", "starry", "tom", "vivy", "eugênio", "frederick", "jorge", 
    "moldu", "sfx", "srpinheiros", "vanessa", "vfx"
]

let personagemPath = null

let personagemNum = 0


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJsonData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching JSON:", error);
    return null;
  }
}

async function load()
{  
    mainPersonagem.style.opacity = 1
}

fetchJsonData('./personagens.json').then(data => {
    if (data) 
    {
        personagemPath = data[personagem];

        personagemNum = personagemPath.id

        showPersonagem(personagemPath, personagemNum)
    }
});

function showPersonagem(personagemPath, id)
{
    if(personagemPath.categoria === "aluno")
    {
        infoAluno(personagemPath)
    }
    else if(personagemPath.categoria === "funcionario")
    {
        infoFunc(personagemPath)
    }
    else if(personagemPath.categoria === "pet")
    {
        infoPet(personagemPath)
    }
    else if(personagemPath.categoria === "outro")
    {
        infoOutro(personagemPath)
    }

    imgPersonagem.src = "personagens/" + personagemPath.img + ".png";
    personagemNome.textContent = personagemPath.nome;
    descPersonagem.textContent = personagemPath.desc;
    personagemEmoji.src = "emojis/" + personagemPath.emoji + ".png";
    personagemGenero.src = "genero/" + personagemPath.genero + ".png";
    personagemFoto.src = "fotos/" + personagemPath.foto + ".png";
    txtEspecial.textContent = personagemPath.txtespecial;
    especiePersonagem.textContent = personagemPath.especie;
    alturaPersonagem.textContent = personagemPath.altura;
    interpretadorPersonagem.textContent = personagemPath.interpretador;
    designPersonagem.textContent = personagemPath.design;

    for (let i = 0; i < personagemPath.relacionamento.length; i++)
    {
        var newh1 = document.createElement('h1');
        newh1.textContent = personagemPath.relacionamento[i]
        if(screenWidth > 600)
        {
            newh1.style.fontSize = "48px"
        }
        else
        {
            newh1.style.fontSize = "24px"
        }

        var newdiv = document.createElement('div');
        newdiv.style.display = "flex"
        newdiv.style.alignItems = "center"
        var emoji = document.createElement('img');
        emoji.src = "emojis/" + personagemPath.relacionamento_emojis[i] + ".png";
        if(screenWidth > 600)
        {
            emoji.style.height = "150px"
        }
        else
        {
            emoji.style.height = "100px"
        }
        var categoria = document.createElement('img');
        categoria.src = "imagens/cat" + personagemPath.relacionamento_categoria[i] + ".png";
        if(screenWidth > 600)
        {
            categoria.style.height = "75px"
        }
        else
        {
            categoria.style.height = "50px"
        }
        categoria.style.marginRight = "2%"
        var txtdesc = document.createElement('h1');
        txtdesc.textContent = personagemPath.relacionamento_desc[i]
        newdiv.appendChild(emoji)
        newdiv.appendChild(categoria)
        newdiv.appendChild(txtdesc)

        relacionamentoBox.appendChild(newh1);
        relacionamentoBox.appendChild(newdiv);
    }

    for (let i = 0; i < personagemPath.galeria_desc.length; i++)
    {
        var newimg = document.createElement('img');
        newimg.src = "galeria/" + personagemPath.galeria + i + ".png";
        newimg.style.width = "40%"
        var newdescimg = document.createElement('h1');
        newdescimg.textContent = personagemPath.galeria_desc[i];
        newdescimg.style.marginBottom = "5px"

        galeriaBox.appendChild(newimg);
        galeriaBox.appendChild(newdescimg);
    }
}

function infoAluno(personagemPath)
{
    infoData.style.display = "flex"
    infoMateria.style.display = "flex"
    infoAss.style.display = "block"
    assPersonagem.style.display = "block"
    infoCargo.style.display = "none"
    infoDono.style.display = "none"

    dataPersonagem.textContent = personagemPath.data;
    materiasPersonagem.textContent = personagemPath.materias;
    assPersonagem.src = "assinaturas/" + personagemPath.ass + ".png";
}

function infoFunc(personagemPath)
{
    infoData.style.display = "flex"
    infoMateria.style.display = "none"
    infoAss.style.display = "block"
    assPersonagem.style.display = "block"
    infoCargo.style.display = "flex"
    infoDono.style.display = "none"

    dataPersonagem.textContent = personagemPath.data;
    cargoPersonagem.textContent = personagemPath.cargo;
    assPersonagem.src = "assinaturas/" + personagemPath.ass + ".png";
}

function infoPet(personagemPath)
{
    infoData.style.display = "none"
    infoMateria.style.display = "none"
    infoAss.style.display = "none"
    assPersonagem.style.display = "none"
    infoCargo.style.display = "none"
    infoDono.style.display = "flex"

    donoPersonagem.textContent = personagemPath.dono;
}

function infoOutro(personagemPath)
{
    infoData.style.display = "flex"
    infoMateria.style.display = "none"
    infoAss.style.display = "block"
    assPersonagem.style.display = "block"
    infoCargo.style.display = "none"
    infoDono.style.display = "none"

    dataPersonagem.textContent = personagemPath.data;
    assPersonagem.src = "assinaturas/" + personagemPath.ass + ".png";
}

async function btnTodos()
{
    sessionStorage.setItem("botao", "todos");

    mainPersonagem.style.opacity = 1
    await sleep(300)

    window.location.href = "index.html";
}

async function btnAlunos()
{
    sessionStorage.setItem("botao", "alunos");

    mainPersonagem.style.opacity = 1
    await sleep(300)

    window.location.href = "index.html";
}

async function btnFuncionarios()
{
    sessionStorage.setItem("botao", "func");

    mainPersonagem.style.opacity = 1
    await sleep(300)
    
    window.location.href = "index.html";
}

async function btnPets()
{
    sessionStorage.setItem("botao", "pets");

    mainPersonagem.style.opacity = 1
    await sleep(300)
    
    window.location.href = "index.html";
}

async function btnOutros()
{
    sessionStorage.setItem("botao", "outros");

    mainPersonagem.style.opacity = 1
    await sleep(300)
    
    window.location.href = "index.html";
}

async function btnInfo()
{
    relacionamentoBox.style.display = "none"
    galeriaBox.style.display = "none"
    descBox.style.display = "block"
    descBox.style.scale = 1.05
    await sleep(200)
    descBox.style.scale = 1
}

async function btnRelacionamento()
{
    descBox.style.display = "none"
    galeriaBox.style.display = "none"
    relacionamentoBox.style.display = "block"
    relacionamentoBox.style.scale = 1.05
    await sleep(200)
    relacionamentoBox.style.scale = 1
}
async function btnGaleria()
{
    descBox.style.display = "none"
    relacionamentoBox.style.display = "none"
    galeriaBox.style.display = "block"
    galeriaBox.style.scale = 1.05
    await sleep(200)
    galeriaBox.style.scale = 1
}

async function btnAnterior()
{
    fetchJsonData('./personagens.json').then(data => {
        if (data) 
        {
            const srpinheiros = Math.floor(Math.random() * 100);

            if(srpinheiros === 0)
            {
                personagemPath = Object.values(data)[44]

                showPersonagem(personagemPath, 44)
            }
            else
            {
                if(personagemNum === 0)
                {
                    personagemNum = 43
                }
                else
                {
                    personagemNum--
                }

                personagemPath = Object.values(data)[personagemNum]

                btnInfo()
                relacionamentoBox.innerHTML = ''
                galeriaBox.innerHTML = ''
                showPersonagem(personagemPath, personagemNum)
            } 
        }
    });
}

async function btnProximo()
{
    fetchJsonData('./personagens.json').then(data => {
        if (data) 
        {
            const srpinheiros = Math.floor(Math.random() * 100);
            
            if(srpinheiros === 0)
            {
                personagemPath = Object.values(data)[44]

                showPersonagem(personagemPath, 44)
            }
            else
            {
                if(personagemNum === 43)
                {
                    personagemNum = 0
                }
                else
                {
                    personagemNum++
                }

                personagemPath = Object.values(data)[personagemNum]

                btnInfo()
                relacionamentoBox.innerHTML = ''
                galeriaBox.innerHTML = ''
                showPersonagem(personagemPath, personagemNum)
            } 
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        btnAnterior()
    }
    else if (event.key === 'ArrowRight') {
        btnProximo()
    }
});
