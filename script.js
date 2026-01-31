let personagemShow = false
let personagemFront = false

const logoDA = document.getElementById("logoDA")

const mainAlunos = document.getElementById("mainAlunos");
const mainFuncionarios = document.getElementById("mainFuncionarios");
const mainPets = document.getElementById("mainPets");
const mainOutros = document.getElementById("mainOutros");

const main = document.querySelectorAll("main")

const imgPersonagem = document.getElementById("imgPersonagem");
const personagem = document.getElementById("personagem");
const personagemNome = document.getElementById("personagemNome");
const personagemDesc = document.getElementById("personagemDesc");

const foto = document.getElementById("foto")
const emoji = document.getElementById("emoji")
const genero = document.getElementById("genero")

const txtEspecial = document.getElementById("txtEspecial")

const txtEspecie = document.getElementById("txtEspecie");
const txtFamilia = document.getElementById("txtFamilia");
const txtPositivos = document.getElementById("txtPositivos");
const txtNegativos = document.getElementById("txtNegativos");
const txtData = document.getElementById("txtData");
const txtApelidos = document.getElementById("txtApelidos");
const txtMaterias = document.getElementById("txtMaterias");
const txtHab = document.getElementById("txtHab");
const imgAss = document.getElementById("imgAss");
const txtInterpretador = document.getElementById("txtInterpretador");
const txtDesign = document.getElementById("txtDesign");



const txtEspecie2 = document.getElementById("txtEspecie2");
const txtFamilia2 = document.getElementById("txtFamilia2");
const txtPositivos2 = document.getElementById("txtPositivos2");
const txtNegativos2 = document.getElementById("txtNegativos2");
const txtData2 = document.getElementById("txtData2");
const txtApelidos2 = document.getElementById("txtApelidos2");
const txtMaterias2 = document.getElementById("txtMaterias2");
const txtHab2 = document.getElementById("txtHab2");
const imgAss2 = document.getElementById("imgAss2");
const txtInterpretador2 = document.getElementById("txtInterpretador2");
const txtCargo = document.getElementById("txtCargo");
const txtDesign2 = document.getElementById("txtDesign2");

const txtEspecie3 = document.getElementById("txtEspecie3");
const txtDono = document.getElementById("txtDono");
const txtInterpretador3 = document.getElementById("txtInterpretador3");
const txtDesign3 = document.getElementById("txtDesign3");

const personagemInfoAlunos = document.getElementById("personagemInfoAlunos")
const personagemInfoFuncionarios = document.getElementById("personagemInfoFuncionarios")
const personagemInfoPets = document.getElementById("personagemInfoPets")

let funcShow = [
    alexShow, alowShow, angelaShow, bellieShow, bleedsShow, crisShow, crystalShow, danielShow, evelynShow, felixShow,
    kateShow, leoShow, loretteShow, lunaShow, melissaShow, nickShow, pauloShow, stellaShow, stephanieShow, ambrosioShow,
    elisangelaShow, flarenceShow, geronimoShow, gertrudesShow, gomesShow, luddenShow, lunarisShow, marcioShow, soniaShow,
    vincentShow, cuscolarShow, mortimerShow, nynphxShow, starryShow, tomShow, vivyShow, eugenioShow, frederickShow, jorgeShow, 
    molduShow, vanessaShow
]

let personagemNum = 0

const galeriaFull = document.getElementById("galeriaFull")
const galeria = document.getElementById("galeria")
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modalImg")
const modalTxt = document.getElementById("modalTxt")


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function load()
{
    mainAlunos.style.opacity = 1
    mainFuncionarios.style.opacity = 1
    mainPets.style.opacity = 1
    mainOutros.style.opacity = 1
}







async function alexShow()
{
    personagemNum = 0
    showInfoAlunos()

    personagemNome.textContent = "Alexander Jackson";
    personagemDesc.textContent = "Conhecidos na universidade como irmãos Jacksons, uma dupla que se prova sendo o oposto um do outro em várias ocasiões, mas eles têm em comum, o fato de não serem os gêmeos mais amigáveis que você vai conhecer. Kate parece ser alguém exemplar e amigável, mas na verdade ela não se importa com ninguém e gostaria que todos se ferrassem, por isso ela faz algumas pegadinhas quando ninguém está vendo. Alexander, do outro lado, sempre está na sua e tentando ser legal com os demais, buscando orgulhar seu pai e ser como ele, é difícil ver ele expressar o que sente por dentro, mas talvez isso fique um pouco perceptível por conta de suas olheiras. Apesar de suas diferenças e opiniões sobre o outro, são quase inseparáveis, é raro ver os dois separados, e isso também é expressado em sua forma dragão, que é despertada quando a metade de seus colares se juntam, um dragão de duas cabeças com comportamento selvagem que junta todos os sentimentos negativos de ambos, é apenas questão de tempo até aprenderem a controlar essa forma deles, mas não vai acontecer tão cedo já que ambos buscam por objetivos tão divergentes.";
    
    imgPersonagem.src = "personagens/alexander.png"
    emoji.src = "emojis/alexander.png"
    foto.src = "fotos/alexkate.png"
    genero.src = "genero/masc.png"
    
    txtEspecial.textContent = ""

    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "Kate(Irmã Gêmea), Christopher Jackson(Pai), Lake Bourgeoisie(Mãe)"
    txtPositivos.innerHTML = "Nick(Incerto)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "17 de Outubro"
    txtApelidos.textContent = "Alex"
    txtMaterias.textContent = "Artes e Teatro"
    txtHab.textContent = "Forma de dragão, voar e mente colmeia com Kate"
    imgAss.src = "assinaturas/alexander.png"
    txtInterpretador.textContent = "Jack"
    txtDesign.textContent = "Sky e Jack"

    toggleBoxes()
    document.body.style.backgroundColor = "#104912"

    await sleep(1000)
    for (let i = 0; i < 2; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/alexkate" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept dos gêmeos 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept dos gêmeos 2\")")
        }

        galeria.appendChild(newimg);
    }
}

async function alowShow()
{
    personagemNum = 1
    showInfoAlunos()

    personagemNome.textContent = "Alow Noctua";
    personagemDesc.textContent = 'Alow pode parecer diferente e ter um destaque entre todos da universidade, e isso é justamente por causa de sua curiosidade sobre como seres mortais e fracos vivem no centro do universo, o que fez com que ele viesse para a Dreamy Academy, acreditando que seria mais fácil de aprender convivendo. Alow é uma criatura celestial vinda do lugar conhecido como "Mundo Perdido", onde habitam os seres mais poderosos do universo e outras criaturas que tiveram um motivo para mudar de vida; mas algo se diferencia em Alow, ela é extremamente curiosa sobre todas as coisas, diferente de outros seres celestiais que apenas aceitam sua existência. Seus poderes são mais fortes até mesmo que os de Vincent, podendo viajar entre dimensões como deseja, criar objetos e pequenas formas de vida, alterar sua forma como deseja, e outros poderes que ainda hão de ser descobertos quando seu terceiro olho abrir.'
    
    imgPersonagem.src = "personagens/alow.png"
    emoji.src = "emojis/alow.png"
    foto.src = "fotos/alow.png"
    genero.src = "genero/nb.png"

    txtEspecial.textContent = "ABRAM ALAS PARA ESPETACULAR ALOW!"
    
    txtEspecie.textContent = "Criatura Celestial"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "Desconhecido"
    txtApelidos.textContent = "Nenhum"
    txtMaterias.textContent = "Nenhuma"
    txtHab.textContent = "Viajar entre dimensões, criar objetos e pequenas formas de vida, alterar sua forma e outros"
    imgAss.src = "assinaturas/alow.png"
    txtInterpretador.textContent = "Sky"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#0b0b52"

    await sleep(1000)
    for (let i = 0; i < 7; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/alow" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Alow na capa da primeira Temporada\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Silhueta de Alow\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Alow 1\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Alow 2\")")
        }
        else if(i === 4)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Alow 3\")")
        }
        else if(i === 5)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Alow 4\")")
        }
        else if(i === 6)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Alow com tema de Tempos Antigos\")")
        }

        galeria.appendChild(newimg);
    }
}

async function angelaShow()
{
    personagemNum = 2
    showInfoAlunos()

    personagemNome.textContent = "Angela Cheonsa";
    personagemDesc.textContent = "Extremamente doce e amante de música, sempre carrega seu fone consigo para evitar o máximo de contato com outras criaturas e relaxar. Além de amar ouvir música, também é uma excelente cantora com uma voz angelical e sonha em ser uma popstar no futuro. Ela possui poderes psíquicos capazes de criar cópias de objetos ou até mesmo membros extras temporariamente, mesmo que ela não tenha total controle sobre eles, em compensação, ela consegue ler os pensamentos de criaturas próximas a ela e controla muito bem isso; graças a sua espécie e seus cuidados, seu pelo é muito fofo e macio, mas ela apenas deixa encostar nele se for alguém em que ela confie."
    
    imgPersonagem.src = "personagens/angela.png"
    emoji.src = "emojis/angela.png"
    foto.src = "fotos/angela.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = "Deixe seu sorriso mudar o mundo, Mas não deixe o mundo mudar seu sorriso."
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "Angy"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Poderes psíquicos, criar cópias de objetos ou membros extras, ler mentes"
    imgAss.src = "assinaturas/angela.png"
    txtInterpretador.textContent = "Anjel"
    txtDesign.textContent = "Sky"
    
    toggleBoxes()
    document.body.style.backgroundColor = "#7e1c65"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/angela" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Angela 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Angela 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Pé da Angela\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Angela do evento de espaço (Feito por Anjel)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function bellieShow()
{
    personagemNum = 3
    showInfoAlunos()

    personagemNome.textContent = "Bellie Belial";
    personagemDesc.textContent = "Ela é fascinada em todos os tipos de esportes, ou melhor dizendo, assistir os outros praticarem todos os tipos de esportes, principalmente quando seu namorado está participando. É difícil dizer com precisão todos seus poderes, já que é uma híbrida de uma demônio sedutora e um minotauro, mas ela possui uma forma demoníaca e um pouco de controle mental, algo que ela ainda precisa trabalhar para se tornar melhor e também apresenta uma superforça, que ainda não funciona 100% ativamente. É sempre ativa nas redes sociais e deseja ser famosa universalmente, mas isso ainda é um longo caminho a se percorrer. "
    
    imgPersonagem.src = "personagens/bellie.png"
    emoji.src = "emojis/bellie.png"
    foto.src = "fotos/bellie.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Demônio Sedutora"
    txtFamilia.textContent = "Merline Belial(Mãe)"
    txtPositivos.innerHTML = "Leonard(Namorado)"
    txtNegativos.innerHTML = "Flarence"
    txtData.textContent = "7 de Dezembro"
    txtApelidos.textContent = "Bell"
    txtMaterias.textContent = "Educação Física e Dança"
    txtHab.textContent = "Forma demoníaca, controle mental e superforça"
    imgAss.src = "assinaturas/bellie.png"
    txtInterpretador.textContent = "Bellow"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#2f1d1d"

    await sleep(1000)
    for (let i = 0; i < 6; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/bellie" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Bellie 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Bellie 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Bellie 3\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Bellie 4\")")
        }
        else if(i === 4)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Bellie do evento de espaço (Feito por Dandi)\")")
        }
        else if(i === 5)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Bellie do evento de espaço (Feito por Anjel)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function bleedsShow()
{
    personagemNum = 4
    showInfoAlunos()

    personagemNome.textContent = "Bleeds Ooxrot";
    personagemDesc.textContent = "Ela não é muito de socializar com os outros, sempre prefere ficar quieta em seu canto perdida em seus próprios pensamentos e mágoas, ninguém tem certeza do porquê disso, mas a verdade é que ela apenas entrou na universidade para não ter que ficar em casa com seu pai; ela tinha uma boa relação com ele antes de sua mãe morrer, mas depois do acidente, tudo mudou na vida dela. Ela tenta se enturmar algumas vezes quando está cansada de se afogar em suas tristezas, mas é bem raro esses momentos, pois ela prefere ficar tocando a guitarra-machado que foi presente da sua mãe. Como habilidades de sua espécie, ela possui visão noturna e o poder de materializar qualquer coisa que exista com algumas faíscas, essas faíscas também podem ser usadas como ataque, mas ela ainda não sabe bem como controlar isso, então usa apenas para sumonar sua guitarra."
    
    imgPersonagem.src = "personagens/bleeds.png"
    emoji.src = "emojis/bleeds.png"
    foto.src = "fotos/bleeds.png"
    genero.src = "genero/fem.png"
    
    txtEspecial.textContent = "ugh... oi"

    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "13 de Novembro"
    txtApelidos.textContent = "Blee, Bliss"
    txtMaterias.textContent = "Música, Cinema, Biologia"
    txtHab.textContent = "Visão Noturna, materializar qualquer coisa a partir de faíscas"
    imgAss.src = "assinaturas/bleeds.png"
    txtInterpretador.textContent = "Floox"
    txtDesign.textContent = "Sky e Floox"

    toggleBoxes()
    document.body.style.backgroundColor = "#4f1e3f"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/bleeds" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Design da Bleeds (Feito por Floox)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function crisShow()
{
    personagemNum = 5
    showInfoAlunos()

    personagemNome.textContent = "Cristian Alecsant";
    personagemDesc.textContent = "Cristian é o metido a cientista da universidade, sempre que vem alguma ideia de experimento em sua mente, ele vai fazer no mesmo momento, sendo na madrugada ou no banheiro em um caso de emergência. Além disso, é louco por botânica e consegue identificar todos os tipos de plantas existentes, por isso ele já tentou dar consciência para uma, e foi um sucesso, o único problema que sua criação não consegue se comunicar por palavras já que não possui cordas vocais, mas Cristian a carrega por todo lugar que vai. Sua espécie não tem poderes mágicos ou elementais como dos demais da universidade, mas seu crânio é extremamente resistente e ele é capaz de dar super pulos que geram crateras no solo, ele também está treinando seu poder de pisotear no chão e levantar estacas de terra, ele também tem suas poções podem conceder o que ele quiser, e é muito útil, já que ele carrega um laboratório inteiro em sua mochila."
    
    imgPersonagem.src = "personagens/cris.png"
    emoji.src = "emojis/cris.png"
    foto.src = "fotos/cris.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = "Gadzooks!"
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "Gertrudes(Tia), Vanny Alecsant(Mãe), Jason Bush(Pai)"
    txtPositivos.innerHTML = "Vivy<br>Felix(Amigo)"
    txtNegativos.innerHTML = "Daniel"
    txtData.textContent = "30 de Abril"
    txtApelidos.textContent = "Cris"
    txtMaterias.textContent = "Biologia e Astronomia"
    txtHab.textContent = "Super pulo que geram crateras no solo, futuramente poderá levantar estacas de terra do chão"
    imgAss.src = "assinaturas/cristian.png"
    txtInterpretador.textContent = "Canto"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#4f4f1e"

    await sleep(1000)
    for (let i = 0; i < 2; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/cris" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Cristian\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Cristian do evento de espaço (Feito por Anjel)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function crystalShow()
{
    personagemNum = 6
    showInfoAlunos()

    personagemNome.textContent = "Crystal Blosser";
    personagemDesc.textContent = "Uma inventora e tanto, capaz de transformar qualquer ferro velho em uma máquina capaz de fazer qualquer coisa que quiser, uma pena que ela não é uma aluna de verdade e sim uma infiltrada na universidade aguardando o Equinócio. Ela é um demônio temporal, capaz de mudar o tempo de um certo local para o passado ou para futuro, além de poder retroceder ou avançar outras criaturas no tempo, mas é algo que ela ainda treina; apesar desses poderes especiais e poderes normais de demônio, ela possui um arco e flecha capaz de realizar seus poderes a longa distância, seja em objetos, lugares ou criaturas, já que suas flechas somem assim que aplicam o efeito ou realizam o feitiço. Como qualquer criatura nascida originalmente na dimensão do tempo, ela faz parte do departamento temporal, seu cargo lá é construir portais e outras máquinas poderosas, carregar peças foi como um treinamento para ela e sua força inigualável, mas como ainda é uma simples adolescente, não sabe as consequências que podem ocorrer na linha do tempo caso ela faça algo que não deveria. "
    
    imgPersonagem.src = "personagens/crystal.png"
    emoji.src = "emojis/crystal.png"
    foto.src = "fotos/crystal.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Demônio Temporal"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Mudar o tempo de um local, retroceder ou avançar criaturas no tempo e causar estes efeitos a partir de flechas"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Sky"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#561041"

    await sleep(1000)
    for (let i = 0; i < 9; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/crystal" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Crimson\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Crystal sem o casaco\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Crystal 1\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Crystal 2\")")
        }
        else if(i === 4)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept das cores da Crystal 1\")")
        }
        else if(i === 5)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept das cores da Crystal 2\")")
        }
        else if(i === 6)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept das cores da Crystal 3\")")
        }
        else if(i === 7)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept das cores da Crystal 4\")")
        }
        else if(i === 8)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Design final da Crystal sem sombreamento\")")
        }

        galeria.appendChild(newimg);
    }
}

async function danielShow()
{
    personagemNum = 7
    showInfoAlunos()

    personagemNome.textContent = "Daniel Rucsetan";
    personagemDesc.textContent = "Ele é um cara durão que não liga pra nada além de infernizar a vida dos mais fracos por diversão própria, ninguém sabe o motivo dele ser assim, mas teorizam sobre ter alguma relação com seus pais. Como todo demônio, ele possui uma forma demoníaca que eleva seus poderes ao limite, a qual também deixa sua aparência um pouco mais intimidadora, e algo que chama atenção é a sua chama azul, não se sabe se ele passou por algo difícil para atingir esse nível ou se é algo genético. No geral, Daniel deixa claro que apenas está na universidade por causa de sua tia, mas isso não é motivo pra ele se esforçar em se tornar melhor."
    
    imgPersonagem.src = "personagens/daniel.png"
    emoji.src = "emojis/daniel.png"
    foto.src = "fotos/daniel.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Demônio"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "15 de Março"
    txtApelidos.textContent = "Dani"
    txtMaterias.textContent = "Educação Física, Natação, Música"
    txtHab.textContent = "Forma demoníaca"
    imgAss.src = "assinaturas/daniel.png"
    txtInterpretador.textContent = "Dandi"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#4f1e26"
    
}

async function evelynShow()
{
    personagemNum = 8
    showInfoAlunos()

    personagemNome.textContent = "Evelyn Muscann";
    personagemDesc.textContent = 'Ela é a prova viva de que tamanho não é documento... Ou limite para energia, ela é a mais rápida e a mais elétrica da universidade, literalmente. Chamada apenas como "Eve", é uma gamer profissional, independente do jogo que for, ela sempre vai encontrar uma forma de ser a melhor, além de ser conhecida universalmente com seus vídeos de gameplay, mas tudo isso apenas por causa de Stephanie, o motivo de Evelyn ter começado a gravar vídeos, e também o motivo de ela ter entrado na universidade. Como toda sua espécie, seus pelos sempre estão estáticos e podem dar choque em desavisados, mas ela consegue controlar isso caso queira relar em alguém; além disso, ela possui uma super velocidade (maior do que a de Stephanie) e um enorme pulo, e não subestime o tamanho dela, a descarga elétrica que ela solta pode energizar a universidade inteira por 10 minutos.'
    
    imgPersonagem.src = "personagens/evelyn.png"
    emoji.src = "emojis/evelyn.png"
    foto.src = "fotos/evelyn.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "1 de Março"
    txtApelidos.textContent = "Eve"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Pelos que são choque, super velocidade e super pulo"
    imgAss.src = "assinaturas/evelyn.png"
    txtInterpretador.textContent = "Anjel"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#391e4f"

    await sleep(1000)
    for (let i = 0; i < 3; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/evelyn" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Evelyn 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Evelyn 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Evelyn do evento de espaço (Feito por St)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function felixShow()
{
    personagemNum = 9
    showInfoAlunos()

    personagemNome.textContent = "Félix Squashtone";
    personagemDesc.textContent = "Ele pode parecer apenas um gatinho fofinho em uma nave de tecnologia extremamente avançada, mas na realidade ele é um músico profissional, que pode ser notável ao ver os instrumentos presentes na estrutura de sua nave. Na nave tem um sintetizador, cordas, tambores e caixas de som, mas ele pode ajustar para terem o som de qualquer instrumento do estilo em qualquer volume, exceto instrumentos de sopro, isso aí é por conta dele mesmo. Sendo apenas um gato, ele nunca teve uma habilidade realmente excepcional, e isso piorou depois que ele sofreu um acidente que fez com que ele perdesse o movimento de suas pernas traseiras, mas ele não desanimou, com a ajuda de seu pai, ele criou sua nave que inclui o seu passatempo favorito e que o ajuda a fazer qualquer outra tarefa básica."
    
    imgPersonagem.src = "personagens/felix.png"
    emoji.src = "emojis/felix.png"
    foto.src = "fotos/felix.png"
    genero.src = "genero/nb.png"

    txtEspecial.textContent = "esse passarinho tá descontrolado!"
    
    txtEspecie.textContent = "Gato"
    txtFamilia.textContent = "Colt Squashtone(Pai)"
    txtPositivos.innerHTML = "Cristian(Amigo)<br>Lorette(Amiga)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "4 de Novembro"
    txtApelidos.textContent = "Nenhum"
    txtMaterias.textContent = "Música e Artes"
    txtHab.textContent = "Nenhuma"
    imgAss.src = "assinaturas/felix.png"
    txtInterpretador.textContent = "Saucer"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#18483a"

    await sleep(1000)
    for (let i = 0; i < 3; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/felix" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Felix 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Felix 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Felix 3\")")
        }

        galeria.appendChild(newimg);
    }
}

async function kateShow()
{
    personagemNum = 10
    showInfoAlunos()

    personagemNome.textContent = "Kate Jackson";
    personagemDesc.textContent = "Conhecidos na universidade como irmãos Jacksons, uma dupla que se prova sendo o oposto um do outro em várias ocasiões, mas eles têm em comum, o fato de não serem os gêmeos mais amigáveis que você vai conhecer. Kate parece ser alguém exemplar e amigável, mas na verdade ela não se importa com ninguém e gostaria que todos se ferrassem, por isso ela faz algumas pegadinhas quando ninguém está vendo. Alexander, do outro lado, sempre está na sua e tentando ser legal com os demais, buscando orgulhar seu pai e ser como ele, é difícil ver ele expressar o que sente por dentro, mas talvez isso fique um pouco perceptível por conta de suas olheiras. Apesar de suas diferenças e opiniões sobre o outro, são quase inseparáveis, é raro ver os dois separados, e isso também é expressado em sua forma dragão, que é despertada quando a metade de seus colares se juntam, um dragão de duas cabeças com comportamento selvagem que junta todos os sentimentos negativos de ambos, é apenas questão de tempo até aprenderem a controlar essa forma deles, mas não vai acontecer tão cedo já que ambos buscam por objetivos tão divergentes.";
    
    imgPersonagem.src = "personagens/kate.png"
    emoji.src = "emojis/kate.png"
    foto.src = "fotos/alexkate.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "Alexander(Irmão Gêmeo), Christopher Jackson(Pai), Lake Bourgeoisie(Mãe)"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "17 de Outubro"
    txtApelidos.textContent = "Nenhum"
    txtMaterias.textContent = "Música"
    txtHab.textContent = "Forma de dragão, voar e mente colmeia com Alexander"
    imgAss.src = "assinaturas/kate.png"
    txtInterpretador.textContent = "Jack"
    txtDesign.textContent = "Sky e Jack"

    toggleBoxes()
    document.body.style.backgroundColor = "#461049"

    await sleep(1000)
    for (let i = 0; i < 2; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/alexkate" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept dos gêmeos 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept dos gêmeos 2\")")
        }

        galeria.appendChild(newimg);
    }
}

async function leoShow()
{
    personagemNum = 11
    showInfoAlunos()

    personagemNome.textContent = "Leonard Griffin";
    personagemDesc.textContent = 'Conhecido como apenas "Leo", é o mestre das manobras de skate, bike ou patins, qualquer coisa que desafiarem, ele consegue fazer sem temor algum de falhar, e se falhar, ele transforma um erro em um acerto em questão de segundos! Apesar de sua aparência intimidadora e radical, Leo é ótimo na hora de fazer amizades e é amigo de quase todos na universidade, apesar de que ele prefira ficar sempre perto e conversando com sua namorada, ou tentando impressionar ela criando manobras novas. Ele é super fã da banda "Thorns", e deixa isso claro sempre usando sua regata por baixo do uniforme, algumas vezes já até foi visto indo direto da universidade para um show da banda. Não se engane, pois a água não é muito o estilo de Leo, é mais na terra mesmo, afinal sua espécie possibilita respirar na superfície através de suas narinas e respirar na água com suas brânquias, sem mencionar sua mordida, capaz de despedaçar o mais resistente dos metais.'
    
    imgPersonagem.src = "personagens/leo.png"
    emoji.src = "emojis/leo.png"
    foto.src = "fotos/leo.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "Luna Griffin(Irmã Gêmea), Cuscolar(Filho Adotado)"
    txtPositivos.innerHTML = "Bellie(Namorada)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "13 de Julho"
    txtApelidos.textContent = "Leo"
    txtMaterias.textContent = "Educação Física"
    txtHab.textContent = "Mordida muito forte e grande, força e no futuro poderá controlar a água"
    imgAss.src = "assinaturas/leonard.png"
    txtInterpretador.textContent = "Liro"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#11364a"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/leo" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Leo 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Leonard do evento de espaço 1 (Feito por Lorax)\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Leonard do evento de espaço (Feito por Dandi)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Leonard do evento de espaço 2 (Feito por Anjel)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function loretteShow()
{
    personagemNum = 12
    showInfoAlunos()

    personagemNome.textContent = "Lorette Ey Mivida";
    personagemDesc.textContent = 'É de longe a mais mentalmente instável da universidade, mas pode ser um pouco amigável, essa é a definição da Lorette, conhecida como a "Fanfiqueira" da turma; ela sempre encontra uma forma de shippar duplas (ou trios) de amigos, criando a maior ficção em seu caderno, envolvendo ela mesma ou apenas outras criaturas, aliás, ninguém sabe o que tem escrito em seu caderno, pois ela se torna um animal selvagem se alguém encosta a mão nele. Como poderes de sua espécie, ela tem um poder de regeneração extremamente veloz, e é útil para seu cabelo que guarda sua principal habilidade, lançar tufos grudentos de seu cabelo para prender o que, ou quem, ela quiser. Não se sabe exatamente porque ela é desse jeito, mas talvez tenha haver com os desenhos que ela assistiu em sua infância e a falta de supervisão de seus pais.'
    
    imgPersonagem.src = "personagens/lorette.png"
    emoji.src = "emojis/lorette.png"
    foto.src = "fotos/lorette.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = "You can't get away from me! Ever! hihihihihi"
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "Julian Otolive(Pai), Lucia Ey Mivida(Mãe)"
    txtPositivos.innerHTML = "Luna (Melhor amigo)<br>Nick(Incerto)"
    txtNegativos.innerHTML = "Daniel<br>Alexander"
    txtData.textContent = "10 de Abril"
    txtApelidos.textContent = "Lory"
    txtMaterias.textContent = "Artes e Escrita"
    txtHab.textContent = "Regeneração veloz, tufos de cabelo grudentos"
    imgAss.src = "assinaturas/lorette.png"
    txtInterpretador.textContent = "Lorax"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#62124f"

    await sleep(1000)
    for (let i = 0; i < 2; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/lorette" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lorette (Feito por Canto)\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lorette do evento de espaço (Feito por St)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function lunaShow()
{
    personagemNum = 13
    showInfoAlunos()

    personagemNome.textContent = "Luna Gutterson";
    personagemDesc.textContent = 'Luna é um pouco tímida e misteriosa, algo que todo mundo percebe à primeira vista, porém, todos aqueles que conseguem ser próximos dela, dizem que ela é alguém doce e empática, sendo divertida quando se sente em uma área de conforto. Apesar da aparência de sua espécie, na verdade é uma planta aquática e não uma serpente; conforme sua idade aumenta, mais "cobras" surgem em seu cabelo, atualmente ela possui 3, que às vezes são a única companhia dela, mas ela não se importa e diz que é melhor assim. Seus poderes são para paralisar alguém que olha em seus olhos quando ela quiser, ela também pode paralisar objetos com suas cobras e controlar algumas vinhas, mas ainda está treinando essas habilidades.'
    
    imgPersonagem.src = "personagens/luna.png"
    emoji.src = "emojis/luna.png"
    foto.src = "fotos/luna.png"
    genero.src = "genero/nb.png"

    txtEspecial.textContent = "AH!"
    
    txtEspecie.textContent = "Planta Aquática"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "20 de Julho"
    txtApelidos.textContent = "Nenhum"
    txtMaterias.textContent = "Biologia, Astronomia e Música"
    txtHab.textContent = "Paralisar quem olha em seus olhos e controle de vinhas"
    imgAss.src = "assinaturas/luna.png"
    txtInterpretador.textContent = "Guto"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#0a3644"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/luna" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Luna 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Luna 2 (Feito por Canto)\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept de Luna 3 (Feito por Canto)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do emoji de Luna (Feito por Canto)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function melissaShow()
{
    personagemNum = 14
    showInfoAlunos()

    personagemNome.textContent = "Melissa Luciole";
    personagemDesc.textContent = 'É a festeira e mais animada da universidade, sempre encontra alguma maneira de transformar qualquer coisa em festa, desde a aula mais chata até a hora do recreio. Ela veio de outro planeta, por isso sua aparência pode se diferenciar de qualquer outra criatura do nosso planeta; ela é uma híbrida de duas espécies diferentes, por isso seus poderes ainda não são tão claros assim, mas ela pode emitir vibrações de suas antenas e asas que lembram músicas eletrônicas, além de poder se comunicar com vibrações entre sua espécie e outras criaturas como morcegos, suas antenas também a impedem de ter seus pensamentos lidos ou sua mente controlada. Além de sua incrível habilidade de DJ, a sua "lanterna" também pode mudar para a cor que ela desejar para fazer uma festa, ou apenas muda de cor dependendo de sua emoção. '
    
    imgPersonagem.src = "personagens/melissa.png"
    emoji.src = "emojis/melissa.png"
    foto.src = "fotos/melissa.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "Stella(Namorada)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "Mel"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Emitir vibrações que lembram música eletrônica com suas antenas, além delas impedirem que sua mente seja lida ou controlada."
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Miguelito"
    txtDesign.textContent = "Canto"

    toggleBoxes()
    document.body.style.backgroundColor = "#220a44"

    await sleep(1000)
    for (let i = 0; i < 6; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/melissa" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Melissa 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Melissa 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Melissa 3 (Feito por Canto)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Melissa 4 (Feito por Canto)\")")
        }
        else if(i === 4)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept das cores da Melissa (Feito por Canto)\")")
        }
        else if(i === 5)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Melissa 5 (Feito por Canto)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function nickShow()
{
    personagemNum = 15
    showInfoAlunos()

    personagemNome.textContent = "Nick Eldridge";
    personagemDesc.textContent = 'Ele é basicamente o "palhaço" da turma, pode não parecer gentil, mas eu garanto que é por um bom motivo, junto com suas piadas de humor ácido e zoação com outros alunos, não é o mais amado da universidade. Ninguém da universidade sabe de seu real paradeiro, afinal ele chegou durante uma madrugada na universidade, não se sabe por onde ele entrou e nem como, ele parecia já estar registrado na universidade e conhecia todos como se conhecessem desde a infância. Mas parte da verdade, é que nunca sequer existiu uma família "Eldridge" e não existem registros de um "Nick Eldridge" fora da universidade; além de que ele adora ler, isso talvez tenha ajudado ele com algo algum dia.'
    
    imgPersonagem.src = "personagens/nick.png"
    emoji.src = "emojis/nick.png"
    foto.src = "fotos/nick.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = "Willkommen, bienvenue, welcome!"
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "Mãe, pai e irmão mais velho(Nomes desconhecidos)"
    txtPositivos.innerHTML = "Alexander(Incerto)<br>Lorette(Incerto)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "3 de Setembro"
    txtApelidos.textContent = "… Você realmente quer saber?"
    txtMaterias.textContent = "Teatro, Artes, Literatura, Música, Escrita"
    txtHab.textContent = "Ver a alma de outros seres"
    imgAss.src = "assinaturas/nick.png"
    txtInterpretador.textContent = "Jack"
    txtDesign.textContent = "Jack"

    toggleBoxes()
    document.body.style.backgroundColor = "#44330a"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/nick" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Nick 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Nick 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Nick do evento de espaço 1 (Feito por Lorax)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Nick do evento de espaço 2 (Feito por St)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function pauloShow()
{
    personagemNum = 16
    showInfoAlunos()

    personagemNome.textContent = "Paulo Santiago";
    personagemDesc.textContent = 'Paulo é uma estrela dos esportes, mas exagera às vezes, sempre tenta pagar como o melhor e mais popular na universidade, só que acaba sendo apenas um bobão e uma espécie de "alívio cômico". Seus poderes até que lhe dão destaque, como sua capacidade de se camuflar, soltar tinta, membros extremamente elásticos e sendo mais excepcional na água, sendo um ótimo nadador e conseguindo ver extremamente bem. Apesar de sempre querer aparecer e se mostrar, ele é um ótimo amigo para te fazer rir e animar em momentos de tristeza.'
    
    imgPersonagem.src = "personagens/paulo.png"
    emoji.src = "emojis/paulo.png"
    foto.src = "fotos/paulo.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Camuflagem, soltar tinta, boa visão e membros elásticos"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Pablito"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#0a4428"

    await sleep(1000)
    for (let i = 0; i < 3; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/paulo" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Paulo 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Paulo 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Paulo do evento de espaço (Feito por St)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function stellaShow()
{
    personagemNum = 17
    showInfoAlunos()

    personagemNome.textContent = "Stella Nightsky";
    personagemDesc.textContent = 'A aluna mais altruísta de toda a universidade, odeia ver os outros sofrendo e sempre tenta fazer com que todos se sintam confortáveis com sua presença, além disso ela é super doce e fofa. Ela sempre é vista colocando glitter e adesivos fofinhos nas coisas, também tem uma pelúcia de dragão que não consegue dormir sem, mas ela não se importa com o que os outros pensam, ela é feliz desse jeito e sempre será. Suas habilidades não condizem muito com sua personalidade, mas ela usa disso em aulas de educação física, como sua aderência nas mãos e nos pés que a permite andar nas paredes, sua camuflagem que deixa ela praticamente invisível e... O seu veneno que pode ser letal para alguns, sem mencionar a força que ela possui em sua cauda, o que faz ela preferir usar mais sua cauda do que seus braços. '
    
    imgPersonagem.src = "personagens/stella.png"
    emoji.src = "emojis/stella.png"
    foto.src = "fotos/stella.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "Rayanne Nightsky e Scarlett Nightsky(Mães)"
    txtPositivos.innerHTML = "Melissa(Namorada)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "28 de Agosto"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "Literatura, Astronomia e Artes"
    txtHab.textContent = "Andar nas paredes, camuflagem e veneno."
    imgAss.src = "assinaturas/stella.png"
    txtInterpretador.textContent = "Sky"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#0c4c1a"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/stella" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Stella\")")
        }

        galeria.appendChild(newimg);
    }
}

async function stephanieShow()
{
    personagemNum = 18
    showInfoAlunos()

    personagemNome.textContent = "Stephanie Valinskez";
    personagemDesc.textContent = 'Uma influencer digital famosa em todas as redes sociais, muitos se perguntam o que levou ela a estudar junto de alguns de seus fãs, mas nem ela mesma sabe responder isso; ela não se importa em ser conhecida mundialmente, sempre fará de tudo para tratar todos igualmente bem. Desde sua infância, ela vive com a companhia de sua estrela de estimação, que a segue para todo lugar e tenta salvar a Stephanie das encrencas que ela se mete. Diferente de todo o resto de sua espécie e sua família, Stephanie é extremamente alta, tudo isso por conta de alguns problemas genéticos que a fizeram crescer mais do que devia, além de fazer com que suas patas fossem extremamente sensíveis a areia quente do deserto e também afetar no poder principal da espécie, que é controlar areia, mas ela consegue apenas criar um pequeno monte de areia com suas mãos; porém isso não é problema, pois ela é extremamente veloz e pode se transformar em uma simples raposa para ser mais sorrateira, e como qualquer outra raposa, é extremamente esperta e perspicaz, podendo ouvir o menor dos barulhos ou identificar qualquer movimento.'
    
    imgPersonagem.src = "personagens/stephanie.png"
    emoji.src = "emojis/stephanie.png"
    foto.src = "fotos/stephanie.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "1 de Março"
    txtApelidos.textContent = "Steph"
    txtMaterias.textContent = "Nenhuma"
    txtHab.textContent = "Controlar areia, veloz e pode se transformar em raposa"
    imgAss.src = "assinaturas/stephanie.png"
    txtInterpretador.textContent = "Sky"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#126a64"

    await sleep(1000)
    for (let i = 0; i < 6; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/stephanie" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Stephanie 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Stephanie 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Stephanie do evento de espaço com roupas (Feito por Anjel)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Stephanie do evento de espaço (Feito por St)\")")
        }
        else if(i === 4)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Stephanie do evento de espaço (Feito por Anjel)\")")
        }
        else if(i === 5)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Stephanie com tema de Mundo de Doces\")")
        }

        galeria.appendChild(newimg);
    }
}

async function ambrosioShow()
{
    personagemNum = 19
    showInfoFuncionarios()

    personagemNome.textContent = "Ambrósio Becker";
    personagemDesc.textContent = "É o bibliotecário, sempre sendo muito misterioso e parecendo alguém bravo e sério, mas no fundo ele é um amor, dedicado a tirar dúvidas de qualquer um sobre literatura, a única coisa que ele deseja em troca é silêncio dentro de sua biblioteca. Ele veio para a universidade após conselhos de seu irmão mais novo, Márcio, e o que era para ser apenas um emprego temporário, se tornou a paixão de sua vida."
    
    imgPersonagem.src = "personagens/ambrosio.png"
    emoji.src = "emojis/ambrosio.png"
    foto.src = "fotos/ambrosio.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "Márcio(Irmão)"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Bibliotecário"
    txtHab2.textContent = "TBA"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Jack"
    txtDesign2.textContent = "Jack"

    toggleBoxes()
    document.body.style.backgroundColor = "#361707"

    await sleep(1000)
    for (let i = 0; i < 2; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/ambrosio" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Ambrósio 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Ambrósio 2\")")
        }

        galeria.appendChild(newimg);
    }
}

async function elisangelaShow()
{
    personagemNum = 20
    showInfoFuncionarios()

    personagemNome.textContent = "Elisângela Luckwee";
    personagemDesc.textContent = 'É a enfermeira legal da universidade, sempre sabe muito bem de como ajudar cada aluno, sendo com ferimentos físicos ou ouvindo os problemas deles e dando conselhos, o que acontece com facilidade pelo fato de ela também ser uma adolescente. Ela já foi uma aluna da Dreamy Academy, e quis trabalhar por aqui pois não estava pronta para se despedir do local, por isso ela já possui até uma certa intimidade com os outros funcionários. Ela também é a aprendiz de Gerônimo, Elisângela já aprendeu diversos feitiços com ele, como feitiços de cura e invocação de objetos, mas ainda está longe de ser uma "maga" como ele.'
    
    imgPersonagem.src = "personagens/elisangela.png"
    emoji.src = "emojis/elisangela.png"
    foto.src = "fotos/elisangela.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "Gerônimo(Mentor)"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Enfermeira"
    txtHab2.textContent = "Feitiços de cura e invocação de objetos"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Dandi"
    txtDesign2.textContent = "Dandi"

    toggleBoxes()
    document.body.style.backgroundColor = "#4a0b0a"

    await sleep(1000)
    for (let i = 0; i < 3; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/elisangela" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Elisângela 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Elisângela 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Elisângela 3\")")
        }

        galeria.appendChild(newimg);
    }
}

async function geronimoShow()
{
    personagemNum = 21
    showInfoFuncionarios()

    personagemNome.textContent = "Gerônimo Abigale";
    personagemDesc.textContent = 'O zelador, uma criatura doce que ama contar história de suas aventuras para os jovens, além de que sempre saberá ajudar com conselhos e tudo mais. Mas poucos sabem de algo do seu passado, ele era de uma ordem de magos que tinham poderes dos 4 elementos da natureza, porém na noite de sua confirmação para tomar o lugar de seu pai, Gerônimo sabia que aquilo não era o que ele queria, e fugiu em busca de aventuras, até que um dia ele se feriu gravemente e começou a trabalhar como o braço direito de Augustus. Apesar de tudo, ele sabe diversas magias relacionadas à água e outras, ele também ainda guarda o seu livro de feitiços e aceitou ser o mentor de Elisângela. '
    
    imgPersonagem.src = "personagens/geronimo.png"
    emoji.src = "emojis/geronimo.png"
    foto.src = "fotos/geronimo.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "Elisângela(Aprendiz)"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Zelador"
    txtHab2.textContent = "Diversas magias com água"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Saucer"
    txtDesign2.textContent = "Anjel"

    toggleBoxes()
    document.body.style.backgroundColor = "#0a214a"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/geronimo" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Gerônimo do evento de espaço (Feito por Dandi)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function flarenceShow()
{
    personagemNum = 22
    showInfoFuncionarios()

    personagemNome.textContent = "Flarence Mysteriuss";
    personagemDesc.textContent = 'É o professor auxiliar, mas ele esconde um passado sombrio, um ex-líder de uma gangue de ladrões que roubavam o mundo inteiro, porém ele e sua gangue se afastaram após o incidente que afetou o universo todo. Depois de muitos meses de estar desabrigado, ele veio atrás de seu primo, Vincent, em busca de redenção; não dá para se dizer com certeza se ele realmente busca se redimir ou ainda possui uma carta na manga, isso é algo que apenas o tempo pode dizer. Ele sabia exatamente onde encontrar seu primo, pois Vincent nunca deixou o lugar de seu pai, onde cresceram juntos e com a "filha adotiva" de Gerônimo.'
    
    imgPersonagem.src = "personagens/flarence.png"
    emoji.src = "emojis/flarence.png"
    foto.src = "fotos/flarence.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "Criatura das Sombras"
    txtFamilia2.textContent = "Vincent(Primo)"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Professor Auxiliar"
    txtHab2.textContent = "Vagar sobre e manipular sombras"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Sky"
    txtDesign2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#3a0c0c"

    await sleep(1000)
    for (let i = 0; i < 2; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/flarence" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Flarence 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Flarence 2\")")
        }

        galeria.appendChild(newimg);
    }
}

async function gertrudesShow()
{
    personagemNum = 23
    showInfoFuncionarios()

    personagemNome.textContent = "Gertrudes Sierra";
    personagemDesc.textContent = 'A tia da Cantina que é o total oposto de Sonia, sempre busca fazer a melhor refeição para que todos os alunos estejam saudáveis e bem alimentados, caso esteja com fome fora do horário do lanche, apenas fale com Gertrudes para ter o banquete de sua vida. Todos adoram sua comida, e sempre se surpreendem com o seu próximo prato; quem se dá bem com isso é Cristian, seu sobrinho, já que ela quer garantir que ele sempre esteja bem alimentado. '
    
    imgPersonagem.src = "personagens/gertrudes.png"
    emoji.src = "emojis/gertrudes.png"
    foto.src = "fotos/gertrudes.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "Cristian(Sobrinho), Jason Bush(Irmão)"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Cozinheira"
    txtHab2.textContent = "TBA"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Canto"
    txtDesign2.textContent = "Canto"

    toggleBoxes()
    document.body.style.backgroundColor = "#0c5840"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/gertrudes" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Gertrudes 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"O mesmo com a mão levemente diferente\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Gertrudes 2\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Gertrudes sem o avental\")")
        }

        galeria.appendChild(newimg);
    }
}

async function gomesShow()
{
    personagemNum = 24
    showInfoFuncionarios()

    personagemNome.textContent = "Gomes Rex";
    personagemDesc.textContent = 'Ele é o inspetor dos alunos e também mordomo de Vincent, apesar de sua aparência durona e uma espécie comumente agressiva, Gomes é a alma mais caridosa que você pode conhecer. Gomes foi encontrado nas ruas por Vincent depois de ter sido abandonado por sua família, uma família nobre diga-se de passagem, por conta de Vincent, Gomes encontrou um lar, emprego, família e amigos. Ele possui diversas habilidades culinárias, sendo a principal, suas toarradas; seus poderes são de transformar completamente seu corpo em uma forma muito mais poderosa, e ele combina isso com os poderes do amuleto de sua gravata, nunca exatamente foi visto sua forma suprema, mas dizem que ele usa ela para defender aqueles que ama. '
    
    imgPersonagem.src = "personagens/gomes.png"
    emoji.src = "emojis/gomes.png"
    foto.src = "fotos/gomes.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Inspetor de Alunos"
    txtHab2.textContent = "Tranformação poderosa"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Sky"
    txtDesign2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#110c58"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/gomes" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Gomes 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Gomes 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Gomes 3\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Gomes do evento de espaço (Feito por St)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function luddenShow()
{
    personagemNum = 25
    showInfoFuncionarios()

    personagemNome.textContent = "Ludden Nichols";
    personagemDesc.textContent = 'É o astrônomo da universidade, algo um pouco comum de se ter em uma universidade, mas ele é quem cuida do observatório localizado no Campus, da mesma forma que Ambrósio cuida da biblioteca. Ele trabalha na universidade por conta de sua amizade de anos com Vincent, desde os tempos de escola. Sua aparência pode parecer incomum e única no universo, mas é por conta de que ele usou um cristal para abandonar sua forma verdadeira e se tornar uma criatura que remete ao que ele ama, o espaço. '
    
    imgPersonagem.src = "personagens/ludden.png"
    emoji.src = "emojis/ludden.png"
    foto.src = "fotos/ludden.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "Vincent(Amigo)"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Astrônomo"
    txtHab2.textContent = "TBA"
    imgAss2.src = "assinaturas/ludden.png"
    txtInterpretador2.textContent = "Floox"
    txtDesign2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#140c3a"

    await sleep(1000)
    for (let i = 0; i < 3; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/ludden" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Ludden 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Ludden 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Rosto do Ludden\")")
        }

        galeria.appendChild(newimg);
    }
}

async function lunarisShow()
{
    personagemNum = 26
    showInfoFuncionarios()

    personagemNome.textContent = "Lunaris Supernova";
    personagemDesc.textContent = 'Ela é conhecida como a "Superior de Vincent", por ser ela quem toma conta das universidades da área, e ser a representante da Dreamy Academy. Lunaris observa tudo que acontece na universidade através de sua bola de cristal, porém ela só intervém quando é realmente necessário; no geral, ela é extremamente misteriosa para todos os alunos e para alguns funcionários, justamente pelo fato de que ela raramente visita a universidade, alguns dizem que é por conta de ela morar na dimensão dos sonhos, mas não é certeza disso por conta do nível de poder dela. Além de Vincent, apenas Márcio, Ludden e Gerônimo conhecem um pouco mais sobre ela. '
    
    imgPersonagem.src = "personagens/lunaris.png"
    emoji.src = "emojis/lunaris.png"
    foto.src = "fotos/lunaris.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Supervisora"
    txtHab2.textContent = "TBA"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Sky"
    txtDesign2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#230c3a"

    await sleep(1000)
    for (let i = 0; i < 6; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/lunaris" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lunaris 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lunaris 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lunaris 3\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lunaris 4\")")
        }
        else if(i === 4)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lunaris 5\")")
        }
        else if(i === 5)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Lunaris 6\")")
        }

        galeria.appendChild(newimg);
    }
}

async function marcioShow()
{
    personagemNum = 27
    showInfoFuncionarios()

    personagemNome.textContent = "Márcio Alaan";
    personagemDesc.textContent = 'Conhecido como "Prof. M.", Márcio é o único professor da Dreamy Academy, mas ele faz isso não ser problema para ele, pois ele consegue muito bem adaptar suas aulas para o gosto de (quase) todos seus alunos. À primeira vista, ele pode parecer um professor bravo, mas na verdade ele é descontraído e divertido, sendo amado por muitos e odiado por poucos. É um velho amigo de Vincent, por isso aceitou o emprego na universidade, e não se arrepende, cada aula é uma nova aventura misturada com educação. Seus poderes também facilitam seu trabalho, podendo teleportar qualquer coisa ou criatura, ou criar qualquer objeto que deseje e ele pode levitar como quiser, mas não é algo que ele utilize muito; um poder de Márcio que chama atenção, é a sua capacidade de invocar pequenas criaturinhas chamadas "Menes" que obedecem seus comandos para quaisquer funções que sejam.'
    
    imgPersonagem.src = "personagens/marcio.png"
    emoji.src = "emojis/marcio.png"
    foto.src = "fotos/marcio.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "Ambrósio(Irmão)"
    txtPositivos2.innerHTML = "Vincent(Amigo)"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "Prof.M, Prof"
    txtCargo.textContent = "Professor"
    txtHab2.textContent = "Teleportar coisas ou criaturas (menes) e levitação"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Bellow/Liro"
    txtDesign2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#613075"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/marcio" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Márcio do evento de espaço (Feito por Anjel)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function soniaShow()
{
    personagemNum = 28
    showInfoFuncionarios()

    personagemNome.textContent = "Sonia Bullspade";
    personagemDesc.textContent = 'A tia da cantina não tão amigável, ela serve literalmente qualquer coisa para os alunos, o que importa é se ela consegue comer aquilo, não os outros, e ela deixa claro que só está ali por falta de opção de trabalho para ela. Mas não considere isso culpa dela... Talvez seja apenas pelo fato de ela ter crescido nos fundos de um pântano, mas talvez ela só realmente não se esforce para isso.'
    
    imgPersonagem.src = "personagens/sonia.png"
    emoji.src = "emojis/sonia.png"
    foto.src = "fotos/sonia.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Cozinheira"
    txtHab2.textContent = "TBA"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Liro"
    txtDesign2.textContent = "Dandi"

    toggleBoxes()
    document.body.style.backgroundColor = "#27410f"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/sonia" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Sonia\")")
        }

        galeria.appendChild(newimg);
    }
}

async function vincentShow()
{
    personagemNum = 29
    showInfoFuncionarios()

    personagemNome.textContent = "Vincent Mysteriuss";
    personagemDesc.textContent = 'Vincent, ou Sr. Mysteriuss, é o diretor da Dreamy Academy, ele herdou a universidade de seu pai para continuar com o legado dele, a única diferença é que ele criou a universidade, pois antes era apenas uma escola normal, também sendo onde ele estudou e cresceu. Apesar de não parecer com sua aparência intimidadora, ele é muito amigável e sempre disposto a ajudar quem precisa, ele decidiu transformar a escola na Dreamy Academy para ajudar jovens de todo o universo "a realizarem os maiores de seus sonhos", como ele mesmo disse. Ele, como sua espécie no geral, é uma criatura das sombras, que pode vagar por elas ou até mesmo manipulá-las ao seu favor; como todos de sua espécie, sua sombra possui uma cor própria e diferente dos demais de sua espécie.'
    
    imgPersonagem.src = "personagens/vincent.png"
    emoji.src = "emojis/vincent.png"
    foto.src = "fotos/vincent.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "Criatura das Sombras"
    txtFamilia2.textContent = "Flarence(Primo)"
    txtPositivos2.innerHTML = "Gomes(Mordomo)<br>Márcio(Amigo)<br>Ludden(Amigo)"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Diretor"
    txtHab2.textContent = "Vagar sobre e manipular sombras"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Sky"
    txtDesign2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#19231c"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/vincent" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Vincent 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Vincent 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Vincent do evento de espaço (Feito por St)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Vincent com tema de Seres das Trevas\")")
        }

        galeria.appendChild(newimg);
    }
}

async function cuscolarShow()
{
    personagemNum = 30
    showInfoPets()

    personagemNome.textContent = "Cuscolar";
    personagemDesc.textContent = 'Cuscolar foi encontrado por Leo perto de uma saída de esgoto, totalmente sujo e faminto, então Leo decidiu adotar ele, mesmo sem saber a exata origem e espécie dele. Mas por trás dessa aparência fofa, existe um plano para salvar todos seus amigos do esgoto, mas talvez nem todos estejam preparados para o impacto Cuscolar. '
    
    imgPersonagem.src = "personagens/cuscolar.png"
    emoji.src = "emojis/cuscolar.png"
    foto.src = "fotos/cuscolar.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Leonard"
    txtInterpretador3.textContent = "Liro"
    txtDesign3.textContent = "St"

    toggleBoxes()
    document.body.style.backgroundColor = "#374d4c"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/cuscolar" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Cuscolar do evento de espaço (Feito por Anjel)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function mortimerShow()
{
    personagemNum = 31
    showInfoPets()

    personagemNome.textContent = "Mortimer";
    personagemDesc.textContent = 'O amigo de todo momento de Frederick, foi assim desde que Frederick encontrou Mortimer ferido e passou a viver com ele nos dutos de ventilação da universidade após Frederick ficar preso na universidade. Diferente de Frederick, Mortimer está sempre andando pela universidade fora dos dutos, explorando as coisas e... Roubando algumas coisinhas dos outros.'
    
    imgPersonagem.src = "personagens/mortimer.png"
    emoji.src = "emojis/mortimer.png"
    foto.src = "fotos/mortimer.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Frederick"
    txtInterpretador3.textContent = "Canto"
    txtDesign3.textContent = "Canto"

    toggleBoxes()
    document.body.style.backgroundColor = "#454343"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/mortimer" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da foto do Mortimer\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Mortimer 1\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Mortimer 2 (Feito por Canto)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do emoji do Mortimer (Feito por Canto)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function nynphxShow()
{
    personagemNum = 32
    showInfoPets()

    personagemNome.textContent = "Nynphx";
    personagemDesc.textContent = 'Uma simples fadinha de estimação de Elisângela, porém com um emprego na universidade também, ela é o "pet de apoio" do local, sempre ajuda a acalmar os alunos que estão muito ansiosos ou nervosos na hora de falar com Elisângela sobre seus problemas. Sua aparência não é nada igual a de uma fada dessa dimensão, pois ela veio diretamente de um planeta da dimensão dos sonhos, já que foi encontrada pelo pai de Elisângela quando era apenas um ovo.'
    
    imgPersonagem.src = "personagens/nynphx.png"
    emoji.src = "emojis/nynphx.png"
    foto.src = "fotos/nynphx.png"
    genero.src = "genero/tba.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Elisângela"
    txtInterpretador3.textContent = "Dandi"
    txtDesign3.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#257266"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/nynphx" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concepts do design da Nynphx\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Nynphx 1\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da Nynphx 2\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Ideia do emoji da Nynphx (Feito por Canto)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function starryShow()
{
    personagemNum = 33
    showInfoPets()

    personagemNome.textContent = "Starry";
    personagemDesc.textContent = 'Ela é a amiga de toda a vida de Stephanie, desde pequenas elas vivem juntas e é extremamente raro ver uma sem a outra. Starry não gosta de ver criaturas desconhecidas se aproximando de Stephanie, mas com seu tamanho, não é realmente possível defender sua dona, então ela faz o que consegue, como cegar aumentando seu brilho, ou apenas jogar um pouco de sua poeira nos olhos da criatura.'
    
    imgPersonagem.src = "personagens/starry.png"
    emoji.src = "emojis/starry.png"
    foto.src = "fotos/starry.png"
    genero.src = "genero/tba.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Stephanie"
    txtInterpretador3.textContent = "Sky"
    txtDesign3.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#6f6022"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/starry" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"bro\")")
        }

        galeria.appendChild(newimg);
    }
}

async function tomShow()
{
    personagemNum = 34
    showInfoPets()

    personagemNome.textContent = "Tom";
    personagemDesc.textContent = 'Ele é apenas um pequeno polvo, que por obra do destino, foi encontrado por Paulo perdido no meio da rua e com um tentáculo ferido, que o decidiu adotar como seu mascote. Tom não gosta muito de ir para a universidade com paulo e por isso tenta escapar sempre que possível, mas nunca consegue, mas, por conta de sua espécie ter um ancestral em comum com a espécie de Paulo, eles conseguem se comunicar perfeitamente, enquanto as outras criaturas não entendem nada que Tom "fala".'
    
    imgPersonagem.src = "personagens/tom.png"
    emoji.src = "emojis/tom.png"
    foto.src = "fotos/tom.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Paulo"
    txtInterpretador3.textContent = "Pablito"
    txtDesign3.textContent = "Pablito"

    toggleBoxes()
    document.body.style.backgroundColor = "#33440f"
}

async function vivyShow()
{
    personagemNum = 35
    showInfoPets()

    personagemNome.textContent = "Vivy";
    personagemDesc.textContent = 'Ela é a planta de estimação do Cristian, ela ganhou uma "consciência" devido aos experimentos que Cristian fazia com ela desde sua semente. Cristian estava decepcionado que sua criação havia sido falha, até que um dia, ele saiu com pressa de seu laboratório e sem querer derramou uma substância na planta; quando ele retornou, se encontrou com metade do vaso "devorada" e uma planta meio serpentuosa, sendo assim, o "nascimento verdadeiro" de Vivy. Ela não consegue exatamente falar, mas se comunica por meio de mímicas, e de alguma forma, Cristian consegue entender ela perfeitamente.'
    
    imgPersonagem.src = "personagens/vivy.png"
    emoji.src = "emojis/vivy.png"
    foto.src = "fotos/vivy.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Cristian"
    txtInterpretador3.textContent = "Canto"
    txtDesign3.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#257266"
}

async function eugenioShow()
{
    personagemNum = 36
    showInfoAlunos()

    personagemNome.textContent = "Eugênio Willems";
    personagemDesc.textContent = 'Apesar de ser dedicado, Eugênio sempre foi extremamente inteligente desde sua infância, horas de estudos servem apenas para aprimorar suas habilidades e seu conhecimento. Além de ser um gamer qualificado por saber o que fazer independente do estilo de jogo que seja, mas não se engane, ele adora filmes e jogos de ação, e por isso criou um relógio robô capaz de dar qualquer coisa que ele deseje, desde uma armadura mecha até uma simples caneta. Ele não possui outros poderes, mas ser um prodígio desde o nascimento compensa todos seus pontos fracos.'
    
    imgPersonagem.src = "personagens/eugenio.png"
    emoji.src = "emojis/eugenio.png"
    foto.src = "fotos/eugenio.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Alta inteligência"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Will"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#621c4c"

    await sleep(1000)
    for (let i = 0; i < 4; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/eugenio" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Eugênio do evento de espaço (Feito por St)\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Eugênio\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Eugênio do evento de espaço (Feito por St)\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do emoji do Eugênio (Feito por Canto)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function frederickShow()
{
    personagemNum = 37
    showInfoAlunos()

    personagemNome.textContent = "Frederick Markus";
    personagemDesc.textContent = 'Um ex-estudante da universidade que ficou preso na universidade e por isso perdeu toda sua sanidade, esse é Frederick, um estudante da última turma da universidade que teve um destino fatídico após a formatura. O baile de formatura foi realizado na universidade como todos os outros, porém, um pouco antes de Vincent finalizar a festa e fechar a universidade até que a próxima turma chegasse, Frederick foi ao banheiro e escutou um barulho estranho vindo dos dutos, então ele decidiu entrar nos dutos e ver o que era; um ratinho extremamente ferido, sorte por parte dele de ter encontrado Frederick antes de morrer, azar por parte de Frederick que ficou preso na universidade até perder suas esperanças de encontrar uma saída. Frederick apenas sai dos dutos de ventilação de noite em busca de comida, nenhum funcionário sabe que Frederick ainda está na universidade e ele se comunica apenas com alguns alunos por dentro dos dutos. É triste que um aluno como esse teve este destino e que ninguém sentiu sua falta.'
    
    imgPersonagem.src = "personagens/frederick.png"
    emoji.src = "emojis/frederick.png"
    foto.src = "fotos/frederick.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "TBA"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Freddy Fazbear"
    txtDesign.textContent = "Canto"

    toggleBoxes()
    document.body.style.backgroundColor = "#2e241a"

    await sleep(1000)
    for (let i = 0; i < 9; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/frederick" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Frederick 1\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Frederick 2\")")
        }
        else if(i === 2)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Frederick 3\")")
        }
        else if(i === 3)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Frederick 4 (Feito por Canto)\")")
        }
        else if(i === 4)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Frederick 5 (Feito por Canto)\")")
        }
        else if(i === 5)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Frederick 6 (Feito por Canto)\")")
        }
        else if(i === 6)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept das cores do Frederick (Feito por Canto)\")")
        }
        else if(i === 7)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da foto do Frederick (Feito por Canto)\")")
        }
        else if(i === 8)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do emoji do Frederick (Feito por Canto)\")")
        }

        galeria.appendChild(newimg);
    }
}

async function jorgeShow()
{
    personagemNum = 38
    showInfoPets()

    personagemNome.textContent = "J.O.R.G.E.";
    personagemDesc.textContent = 'É o relógio do Eugênio, mas também é seu pet, ele faz companhia para Eugênio nos momentos de solidão e ajuda nas poucas dúvidas que Eugênio tem. Também é o seu primeiro robô, mas o significado de sua sigla é desconhecido para todos. '
    
    imgPersonagem.src = "personagens/jorge.png"
    emoji.src = "emojis/jorge.png"
    foto.src = "fotos/jorge.png"
    genero.src = "genero/tba.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Eugênio"
    txtInterpretador3.textContent = "Will"
    txtDesign3.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#1a5340"
}

async function molduShow()
{
    personagemNum = 39
    showInfoAlunos()

    personagemNome.textContent = "Moldu Dulivan";
    personagemDesc.textContent = 'Moldu é o aluno mais desleixado que você pode conhecer, não se importa com entregar tarefas atrasadas ou nem mesmo fazer elas, quem olha para ele atualmente, nem pensa que antes do ensino médio ele era o aluno exemplar de sua sala, mas aconteceu algo que afetou totalmente seu esforço escolar e fez com que ele até mesmo reprovasse no último ano do ensino médio e agora, ir para a universidade é mais como uma obrigação para ele do que algo que ele realmente quer fazer. Moldu pode ser alguém extremamente gentil se você for próximo dele, porém ele tem alguns problemas de confiança e ninguém sabe exatamente o motivo disso, talvez em outro universo isso seja diferente? Sua visão é seu melhor sentido, podendo identificar coisas de longe ou até mesmo identificar coisas invisíveis com sua visão de calor e visão noturna, além de também ter uma audição que chega até 5 km de alcance.'
    
    imgPersonagem.src = "personagens/moldu.png"
    emoji.src = "emojis/moldu.png"
    foto.src = "fotos/moldu.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Visão de calor e visão noturna e boa audição"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Dudubodu"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#292d2e"

    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/moldu" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept do Moldu\")")
        }

        galeria.appendChild(newimg);
    }
}

async function vanessaShow()
{
    personagemNum = 40
    showInfoAlunos()

    personagemNome.textContent = "Vanessa Steffan";
    personagemDesc.textContent = 'A patricinha famosa da universidade, conhecida universalmente por sua riqueza, é o que ela faz parecer, mas isso é apenas de seus pais, que honestamente, não se importam muito com ela. Conhecida popularmente como Vanny, vive se gabando na universidade com seus vestidos caros e canetinhas de 700 cores diferentes, ela pode não ser adorada por muitos, mas ela realmente não liga, o mínimo que ela vai fazer é gritar para irritar quem ela não gosta, mas se ela gostar de alguém, sua voz vai sair como a de uma sereia. Quando ela falta na aula, pode apostar que ela foi arrastada por seus pais para um show universal em outro planeta; ela é comumente chamada de rude, mas ela realmente quer ser assim ou é só uma máscara para esconder sua tristeza pela negligência de seus pais? Realmente não dá para ter certeza.'
    
    imgPersonagem.src = "personagens/vanessa.png"
    emoji.src = "emojis/vanessa.png"
    foto.src = "fotos/vanessa.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "TBA"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "St"
    txtDesign.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#533160"

    await sleep(1000)
    for (let i = 0; i < 2; i++) {
        var newimg = document.createElement('img');
        newimg.src = "galeria/vanessa" + i + ".png";
        newimg.setAttribute("class", "imgGallery")

        if(i === 0)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Vanessa do evento de espaço (Feito por St)\")")
        }
        else if(i === 1)
        {
            newimg.setAttribute("onclick", "clickGaleria(this, \"Concept da pose da Vanessa (Feito por Canto)\")")
        }

        galeria.appendChild(newimg);
    }
}















async function toggleBoxes()
{
    mainAlunos.style.opacity = 0
    mainFuncionarios.style.opacity = 0 
    mainPets.style.opacity = 0 
    mainOutros.style.opacity = 0

    await sleep(300)

    mainAlunos.style.display = "none"
    mainFuncionarios.style.display = "none"
    mainPets.style.display = "none"
    mainOutros.style.display = "none"

    await sleep(300)
    personagem.style.display = "flex"
    galeriaFull.style.display = "block"
    await sleep(100)
    if (window.screen.width <= 600)
    {
        imgPersonagem.style.marginLeft = "-125%"
    }
    else
    {
        imgPersonagem.style.marginLeft = "-25%"
    }
    personagemShow = true

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









async function hidePersonagem()
{
    if(personagemShow === true)
    {
        document.body.style.backgroundColor = "#1e1e1e"
        personagemShow = false
        if (window.screen.width <= 600)
        {
            imgPersonagem.style.marginLeft = "-200%"
        }
        else
        {
            imgPersonagem.style.marginLeft = "-100%"
        }
        await sleep(300)
        personagem.style.display = "none"
        imgPersonagem.style.zIndex = "1"
        personagemFront = false

        galeriaFull.style.display = "none"

        while (galeria.firstChild)
        {
            galeria.firstChild.remove()
        }
    }
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
    hidePersonagem()

    mainAlunos.style.display = "grid"
    mainFuncionarios.style.display = "grid"
    mainPets.style.display = "grid"
    mainOutros.style.display = "grid"

    await sleep(100)

    mainAlunos.style.opacity = 1
    mainFuncionarios.style.opacity = 1
    mainPets.style.opacity = 1
    mainOutros.style.opacity = 1
}

async function btnAlunos()
{
    hidePersonagem()
    hideFuncionarios()
    hidePets()
    hideOutros()

    mainAlunos.style.display = "grid"
    await sleep(100)
    mainAlunos.style.opacity = 1
}

async function btnFuncionarios()
{
    hidePersonagem()
    hideAlunos()
    hidePets()
    hideOutros()

    mainFuncionarios.style.display = "grid"
    await sleep(100)
    mainFuncionarios.style.opacity = 1
}

async function btnPets()
{
    hidePersonagem()
    hideAlunos()
    hideFuncionarios()
    hideOutros()

    mainPets.style.display = "grid"
    await sleep(100)
    mainPets.style.opacity = 1
}

async function btnOutros()
{
    hidePersonagem()
    hideAlunos()
    hideFuncionarios()
    hidePets()

    mainOutros.style.display = "grid"
    await sleep(100)
    mainOutros.style.opacity = 1
}

function clickPersonagem()
{
    if(personagemFront === false)
    {
        imgPersonagem.style.zIndex = "4"
        personagemFront = true
        console.log("click")
    }
    else
    {
         imgPersonagem.style.zIndex = "1"
         personagemFront = false
    }

}

async function btnAnterior()
{
    hidePersonagem()
    await sleep(300)
    if(personagemNum === 0)
    {
       funcShow[40](); 
    }
    else
    {
        funcShow[personagemNum - 1]();
    }
}

async function btnProximo()
{
    hidePersonagem()
    await sleep(300)
    if(personagemNum === 40)
    {
       funcShow[0](); 
    }
    else
    {
        funcShow[personagemNum + 1]();
    }
}

async function changeLogo()
{
    logoDA.style.rotate = "360deg"
    logoDA.src = "MU/logoMU.png"

    mainAlunos.style.opacity = 0
    mainFuncionarios.style.opacity = 0 
    mainPets.style.opacity = 0 
    mainOutros.style.opacity = 0
    personagem.style.opacity = 0

    document.body.style.backgroundColor = "#3b6de1"
    await sleep(500)
    window.location.href = "mu.html";
}

function clickGaleria(img, txt)
{
    if (window.screen.width > 600)
    {
        modalTxt.textContent = txt
        modalImg.src = img.src
        modal.style.display = "block"
        document.body.style.overflowY = "hidden" 
    }
}

function fechaModal()
{
    modal.style.display = "none"
    document.body.style.overflowY = "scroll"
}
