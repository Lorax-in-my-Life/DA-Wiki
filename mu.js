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

const btnFormas = document.getElementById("btnFormas");
const btnformaNormal = document.getElementById("btnformaNormal");
const btnformaDemonio = document.getElementById("btnformaDemonio");
const btnformaNatal = document.getElementById("btnformaNatal");
const btnformaShenanigans = document.getElementById("btnformaShenanigans");

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

const txtEspecie3 = document.getElementById("txtEspecie3");
const txtDono = document.getElementById("txtDono");
const txtInterpretador3 = document.getElementById("txtInterpretador3");

const personagemInfoAlunos = document.getElementById("personagemInfoAlunos")
const personagemInfoFuncionarios = document.getElementById("personagemInfoFuncionarios")
const personagemInfoPets = document.getElementById("personagemInfoPets")

let funcShow = [
    alexShow, angelaShow, bellieShow, crisShow, danielShow, eugenioShow, evelynShow, felixShow, hankShow, kateShow,
    leoShow, loretteShow, molduShow, nickShow, pattyShow, pauloShow, stephanieShow, vanessaShow, ambrosioShow,
    elisangelaShow, geronimoShow, gertrudesShow, gomesShow, marcioShow, soniaShow, vincentShow, cuscolarShow,
    jorgeShow, starryShow, vivyShow, markShow, melissaShow, stellaShow, timotheyShow, zugShow
]

let personagemNum = 0


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




function alexShow()
{
    personagemNum = 0
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "none"

    personagemNome.textContent = "Alexander Jackson";
    personagemDesc.textContent = "Eles são conhecidos como Irmãos Jacksons,para simplificar;Alexander é sempre caótico e encrenqueiro que vive tentando causar caos e destruição,mas muitas vezes tem seus planos arruinados por sua irmã gêmea,Kate,que também gosta um pouco de caos,mas ela sabe os limites que não devem ser ultrapassados e também sabe se comportar quando deve,muito pelo contrário de seu irmão...Algumas pegadinhas deles já levaram várias criaturas para o hospital com ferimentos,isso fez com que Kate mudasse suas atitudes,mas para Alexander,isso foi apenas um gatilho para continuar com isso.Apesar de parecerem infantis,eles já são Dragões adolescentes,o espírito da Ira de sua forma dragão está aprisionado em seus colares,que pode ser despertado ao juntar as duas peças,os transformando em um terrível e enorme dragão de 2 cabeças descontrolado,mas enquanto os dois estiverem cada um com sua parte do colar,não apresentam nenhum risco...acredito eu...";
    
    imgPersonagem.src = "MU/personagens/alexander.png"
    emoji.src = "MU/emojis/alexander.png"
    genero.src = "genero/masc.png"
    
    txtEspecial.textContent = ""

    txtEspecie.textContent = "Dragão Flamejante"
    txtFamilia.textContent = "Kate(Irmã Gêmea), Christopher Jackson(Pai), Lake Bourgeoisie(Mãe)"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "17 de Outubro"
    txtApelidos.textContent = "Alex"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Forma de dragão, voar e mente colmeia com Kate"
    imgAss.src = "assinaturas/alexander.png"
    txtInterpretador.textContent = "Jack"

    toggleBoxes()
    document.body.style.backgroundColor = "#23a35d"
}

function angelaShow()
{
    personagemNum = 1
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Angela Cheonsa";
    personagemDesc.textContent = "Uma das garotas mais doces que você pode conhecer,é uma amante de música em geral,sempre carrega seu fone consigo para o melhor momento para relaxar enquanto escuta sua playlist.Além de adorar ouvir música,ela também é uma ótima cantora com sua voz angelical,que agrada até os mais duros corações,também sabe tocar alguns instrumentos simples e sonha em se tornar uma Popstar algum dia.Seu pelo é super macio e sedoso,mas ela só deixa tocar nele se for alguém que ela goste muito;além disso ela tem poderes psíquicos,capaz de conjurar objetos ou até mesmo membros extras temporariamente,mesmo que ela não saiba usar muito ele ainda,em contrapartida,ela tem a habilidade de ler mentes e sabe usá-la muito bem,mas por enquanto ela só pode ler a mente de uma criatura por vez."
    
    imgPersonagem.src = "MU/personagens/angela.png"
    emoji.src = "MU/emojis/angela.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = "Deixe seu sorriso mudar o mundo, Mas não deixe o mundo mudar seu sorriso."
    
    txtEspecie.textContent = "Karista Psíquica"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "Angy"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Poderes psíquicos, criar cópias de objetos ou membros extras, ler mentes"
    imgAss.src = "assinaturas/angela.png"
    txtInterpretador.textContent = "Anjel"
    
    toggleBoxes()
    document.body.style.backgroundColor = "#cb5fb5"
}

function bellieShow()
{
    personagemNum = 2
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "block"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Bellie Belial";
    personagemDesc.textContent = "Sempre assistindo esportes masculinos de olho no músculo dos atletas...Essa é Bellie...a líder de torcida das ocasiões especiais da Universidade,considerada uma das mais bonitas daqui,mas talvez seja por sua aparência natural de Demônio Sedutora.Ela ainda é quase que uma demônio criança para a sua espécie,mas já possui a habilidade de forma demoníaca e a sedução,mesmo que ela ainda não saiba usar muito esses poderes.É sempre ativa nas redes sociais e deseja ser famosa e conhecida,ela é um pouco burrinha em algumas atividades,mas é uma ótima atleta e incrivelmente se dá bem com a maioria de seus colegas!"
    
    imgPersonagem.src = "MU/personagens/bellie.png"
    emoji.src = "MU/emojis/bellie.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Demônio Sedutora"
    txtFamilia.textContent = "Merline Belial(Mãe)"
    txtPositivos.innerHTML = "Leonard(Namorado)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "7 de Dezembro"
    txtApelidos.textContent = "Bell"
    txtMaterias.textContent = "Educação Física e Dança"
    txtHab.textContent = "Forma demoníaca e sedução"
    imgAss.src = "assinaturas/bellie.png"
    txtInterpretador.textContent = "Bellow"

    toggleBoxes()
    document.body.style.backgroundColor = "#6b3651"
}

function crisShow()
{
    personagemNum = 3
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Cristian Alecsant";
    personagemDesc.textContent = 'O cientista que fica todo o tempo livre no laboratório fazendo algum experimento,já fez diversos remédios para sua família e amigos,apenas usando sua intuição.Ele é fissurado em estudar todos os tipos de plantas,tanto que já tentou dar consciência para uma,mas digamos que não funcionou 100%,mas com frequência ele tenta fazer novas poções que possam mudar isso e frequentemente falha...Sua espécie não apresenta poderes mágicos,então ele mesmo fez um estoque de poções que podem dar habilidades para ele,como força,proteção,regeneração e etc,mas ele ainda está trabalhando em tentar fazer uma poção dessas com efeito permanente;também sempre anda com seu equipamento de laboratório pois diz que "nunca se sabe quando é hora de um experimento",um completo nerd,né?'
    
    imgPersonagem.src = "MU/personagens/cris.png"
    emoji.src = "MU/emojis/cris.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = "Gadzooks!"
    
    txtEspecie.textContent = "Trincerontos"
    txtFamilia.textContent = "Gertrudes(Tia), Vanny Alecsant(Mãe), Jason Bush(Pai)"
    txtPositivos.innerHTML = "Vivy<br>Felix(Amigo)"
    txtNegativos.innerHTML = "Daniel"
    txtData.textContent = "30 de Abril"
    txtApelidos.textContent = "Cris"
    txtMaterias.textContent = "Biologia e Astronomia"
    txtHab.textContent = "Poções"
    imgAss.src = "assinaturas/cristian.png"
    txtInterpretador.textContent = "Canto"

    toggleBoxes()
    document.body.style.backgroundColor = "#baba2f"
}

function danielShow()
{
    personagemNum = 4
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "block"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Daniel Rucsetan";
    personagemDesc.textContent = "Ele é um cara durão que não liga para absolutamente nada e sempre está pegando no pé dos alunos mais fracos só por puro entretenimento próprio,talvez seja porque ele cresceu e viveu com sua tia sem saber o que realmente aconteceu com seus pais.Ele tem uma forma demoníaca como qualquer demônio adulto e a habilidade de virar uma criatura de chamas que todo demônio consegue após passar por uma batalha difícil;ele chama atenção pois ele não tem uma cauda como todos de sua espécie,mas em sua forma demoníaca aparece uma cauda de fogo para substituir a original,alguns dizem que ele mesmo a arrancou para mostrar o quão durão ele é,o que também chama a atenção é que sua chama é azul,a chama mais ardente de todos,poucos demônios simples consegue atingir esse nível;tudo sobre ele é um mistério,talvez seja um segredo doloroso escondido dentro de si mesmo e das correntes que aparecem em seu corpo quando assume sua forma demoníaca,talvez isso seja revelado com o tempo,ou com ajuda de alguém que amoleça seu coração..."
    
    imgPersonagem.src = "MU/personagens/daniel.png"
    emoji.src = "MU/emojis/daniel.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Demônio Tradicional"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "15 de Março"
    txtApelidos.textContent = "Dani"
    txtMaterias.textContent = "Educação Física, Natação, Música"
    txtHab.textContent = "Forma demoníaca"
    imgAss.src = "assinaturas/daniel.png"
    txtInterpretador.textContent = "Dandi"

    toggleBoxes()
    document.body.style.backgroundColor = "#dd1662"
}

function eugenioShow()
{
    personagemNum = 5
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Eugênio Willems";
    personagemDesc.textContent = 'ALERTA DE NERD!Esse é Eugênio,viciado em quadrinhos,animes e jogos;ele é profissional em qualquer matéria que não seja algo físico,pois vive estudando mais o que já sabe e pesquisando novos assuntos para saber mais.Ele também não fica atrás em aulas que envolvem algo físico tipo educação física,pois ele construiu um relógio capaz de transformar ele em qualquer criatura existente e sumonar objetos em forma de polígonos;esse relógio também é seu primeiro robô,que foi feito quando ele tinha apenas 14 anos,mas ele decidiu transferir a memória toda para seu relógio para tê-lo como companheiro para toda hora,mesmo que eles não se dêem completamente bem.Como uma forma rara de sua espécie,ele não tem poderes elementais nem transformações fortes sem seu relógio,mas ele até que aguenta isso bem,se mostrando sempre o destaque da sala de aula.'
    
    imgPersonagem.src = "MU/personagens/eugenio.png"
    emoji.src = "MU/emojis/eugenio.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Alormoletl Rosado"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Se transformar ele em qualquer criatura existente e sumonar objetos em forma de polígonos com seu relógio"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Will"

    toggleBoxes()
    document.body.style.backgroundColor = "#ed60c0"
}

function evelynShow()
{
    personagemNum = 6
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "none"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Evelyn Muscann";
    personagemDesc.textContent = 'Ela é a prova viva de que tamanho não é documento...ou limite para energia,ela é de longe a mais rápida de toda a universidade e também a mais elétrica,literalmente.Seu poderes são todos baseados em eletricidade,quando está correndo é visível apenas como uma espécie de raio,o seu pelo é um ótimo condutor de energia,mas ela também deixa tocá-lo sem te eletrocutar;é melhor se afastar quando ela estiver com algum sentimento no ápice,pois ela solta uma descarga elétrica em uma pequena área ao redor dela,que pode te machucar um pouco.Ela apenas chegou na universidade por causa da Stephanie,que é sua maior ídolo,também é totalmente submissa à ela e a quem mais ela gostar,pena que é ingênua...'
    
    imgPersonagem.src = "MU/personagens/evelyn.png"
    emoji.src = "MU/emojis/evelyn.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Chinchila das Montanhas"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "1 de Março"
    txtApelidos.textContent = "Eve"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Conduzir energia com o pelo e soltar descargas elétricas ao seu redor"
    imgAss.src = "assinaturas/evelyn.png"
    txtInterpretador.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#e69437"
}

function felixShow()
{
    btnFormas.style.display = "none"

    personagemNum = 7
    showInfoAlunos()

    personagemNome.textContent = "Félix Squashtone";
    personagemDesc.textContent = "Ele pode parecer apenas um gatinho fofinho em uma nave de tecnologia extremamente avançada,mas na verdade ele é um músico profissional,mas aí você se pergunta o que ele toca?A resposta é simples,sua nave!Ela tem todos os instrumentos existentes dentro de si,e ele sabe exatamente como fazer para soltar cada som,já que ele ajudou seu pai à construir sua nave que também pode criar braços mecânicos para ajudar ele em outras tarefas;ele precisou usar essa nave pois ele perdeu o movimento de suas pernas traseiras após sofrer um acidente,mas isso não desanimou ele.Ele queria ser adorado por sua habilidade musical,e não por sua aparência,mas mesmo assim,fica feliz quando alguém pede para ele tocar uma música!"
    
    imgPersonagem.src = "MU/personagens/felix.png"
    emoji.src = "MU/emojis/felix.png"
    genero.src = "genero/nb.png"

    txtEspecial.textContent = "esse passarinho tá descontrolado!"
    
    txtEspecie.textContent = "Gato Cinzento"
    txtFamilia.textContent = "Colt Squashtone(Pai)"
    txtPositivos.innerHTML = "Cristian(Amigo)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "4 de Novembro"
    txtApelidos.textContent = "Nenhum"
    txtMaterias.textContent = "Música e Artes"
    txtHab.textContent = "Nenhuma"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Saucer"

    toggleBoxes()
    document.body.style.backgroundColor = "#528f7e"
}

function hankShow()
{
    personagemNum = 8
    showInfoAlunos()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Hank Miller";
    personagemDesc.textContent = 'Um Hippie?Um Hipster?As duas Coisas!Hank é o aluno mais calmo e amigável de toda a universo,ele não liga pra nada,mas de um jeito bom,sempre na paz e amor.Apesar de ser um pé grande e morar em uma floresta,seu pelo é extremamente fofo por causa de um condicionador especial de sua família,seu pai é a pessoa que ele mais ama...pelo menos era antes de sua mãe ser morta por caçadores,que foi o mesmo motivo que fez ele entrar na universidade para se distrair mentalmente,esse colar em seu pescoço foi um presente de sua mãe;mesmo que ele seja pacífico,ele jura que não terá piedade se descobrir quem são os caçadores.Como todos de sua espécie,sua força física é inigualável e possui um ótimo senso de localização,conseguindo identificar o lugar que está sem nunca ter passado por lá antes.'
    
    imgPersonagem.src = "MU/personagens/hank.png"
    emoji.src = "MU/emojis/hank.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Pé Grande Taigano"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Força física e senso de localização"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Hotekal"

    toggleBoxes()
    document.body.style.backgroundColor = "#d23d56"
}

function kateShow()
{
    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "none"

    personagemNum = 9
    showInfoAlunos()

    personagemNome.textContent = "Kate Jackson";
    personagemDesc.textContent = "Eles são conhecidos como Irmãos Jacksons,para simplificar;Alexander é sempre caótico e encrenqueiro que vive tentando causar caos e destruição,mas muitas vezes tem seus planos arruinados por sua irmã gêmea,Kate,que também gosta um pouco de caos,mas ela sabe os limites que não devem ser ultrapassados e também sabe se comportar quando deve,muito pelo contrário de seu irmão...Algumas pegadinhas deles já levaram várias criaturas para o hospital com ferimentos,isso fez com que Kate mudasse suas atitudes,mas para Alexander,isso foi apenas um gatilho para continuar com isso.Apesar de parecerem infantis,eles já são Dragões adolescentes,o espírito da Ira de sua forma dragão está aprisionado em seus colares,que pode ser despertado ao juntar as duas peças,os transformando em um terrível e enorme dragão de 2 cabeças descontrolado,mas enquanto os dois estiverem cada um com sua parte do colar,não apresentam nenhum risco...acredito eu...";
    
    imgPersonagem.src = "MU/personagens/kate.png"
    emoji.src = "MU/emojis/kate.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Dragão Flamejante"
    txtFamilia.textContent = "Alexander(Irmão Gêmeo), Christopher Jackson(Pai), Lake Bourgeoisie(Mãe)"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "17 de Outubro"
    txtApelidos.textContent = "Nenhum"
    txtMaterias.textContent = "Música"
    txtHab.textContent = "Forma de dragão, voar e mente colmeia com Alexander"
    imgAss.src = "assinaturas/kate.png"
    txtInterpretador.textContent = "Jack"

    toggleBoxes()
    document.body.style.backgroundColor = "#c91ed2"
}

function leoShow()
{
    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNum = 10
    showInfoAlunos()

    personagemNome.textContent = "Leo Griffin";
    personagemDesc.textContent = "Manobras de Skate e Bike?É com ele mesmo!Leo é o radical da universidade,mas não deixe sua aparência fazer você pensar que ele é durão e malvado,na verdade ele é alguém muito amigável,amigo de quase todos da universidade.Apesar de ser um tubarão,ele é um péssimo nadador,por isso escolheu ir para meios mais terrestres,mas ainda consegue respirar embaixo da água;seu dentes são completamente afiados e sua mordida é forte a ponto de cortar o mais resistente metal.Uma vez ele já tentou postar vídeos na internet de suas manobras,mas infelizmente não tinha muitas visualizações,e ele esconde esse seu canal até de seus amigos mais próximos,a única que sabe disso é sua irmã;ele também é um grande fã da banda \"Taiga's Rock\",mesmo que eles pararam de lançar música há anos,ele ainda espera que algum dia tenha algum novo hit deles."
    
    imgPersonagem.src = "MU/personagens/leo.png"
    emoji.src = "MU/emojis/leo.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Tubarino"
    txtFamilia.textContent = "Luna Griffin(Irmã Gêmea), Cuscolar(Filho Adotado)"
    txtPositivos.innerHTML = "Bellie(Namorada)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "13 de Julho"
    txtApelidos.textContent = "Nenhum"
    txtMaterias.textContent = "Educação Física"
    txtHab.textContent = "Mordida muito forte e grande, força e no futuro poderá controlar a água"
    imgAss.src = "assinaturas/leonard.png"
    txtInterpretador.textContent = "Liro"

    toggleBoxes()
    document.body.style.backgroundColor = "#3d66e3"
}

function loretteShow()
{

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "none"
    btnformaShenanigans.style.display = "block"

    personagemNum = 11
    showInfoAlunos()

    personagemNome.textContent = "Lorette Ey Mivida";
    personagemDesc.textContent = 'Um pouco maluquinha...mas bem amigável,essa é Lorette,conhecida como a "Fanfiqueira" da turma,são só amigos?Não importa,ela vai shippar,criar todo tipo de ficção em seu livro,envolvendo ela mesma ou apenas outras pessoas,e por sinal,ninguém nem sabe o que se esconde nesse livro dela,pois ela se torna um animal selvagem quando encostam a mão nele.Ela possui um incrível poder de regeneração,que é questão de minutos,isso é extremamente útil para seu cabelo que guarda sua habilidade principal,lançar tufos grudentos de seu cabelo para...melhor não saber para o que exatamente ela usa isso...Ninguém sabe o porquê dela ser assim,mas teorizam que é por conta das coisas que ela assistia quando era pequena,um pequeno detalhe de sua loucura é que ela está sempre de pijama,mas é bom para dormir em qualquer lugar né?'
    
    imgPersonagem.src = "MU/personagens/lorette.png"
    emoji.src = "MU/emojis/lorette.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = "You can't get away from me! Ever! hihihihihi"
    
    txtEspecie.textContent = "Caella Grudenta"
    txtFamilia.textContent = "Julian Otolive(Pai), Lucia Ey Mivida(Mãe)"
    txtPositivos.innerHTML = "Nick(Amigo)"
    txtNegativos.innerHTML = ""
    txtData.textContent = "10 de Abril"
    txtApelidos.textContent = "Lory"
    txtMaterias.textContent = "Artes e Escrita"
    txtHab.textContent = "Regeneração veloz, tufos de cabelo grudentos"
    imgAss.src = "assinaturas/lorette.png"
    txtInterpretador.textContent = "Lorax"

    toggleBoxes()
    document.body.style.backgroundColor = "#e27ab7"
}

function molduShow()
{
    personagemNum = 12
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "block"
    btnformaDemonio.style.backgroundImage = "linear-gradient(to bottom, rgb(20, 204, 23) 80%, rgb(10, 153, 79))"
    btnformaDemonio.textContent = "PASTNO"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "none"

    personagemNome.textContent = "Moldu Dulivan";
    personagemDesc.textContent = 'Ele é o aluno exemplar,sempre dá seu melhor para dar orgulho aos seus professores,mas além disso,ele também se dá muito bem com a maioria dos alunos,quando não é odiado por querer cuidar da sala quando o professor sai ou lembrar das tarefas...Apesar de ser uma espécie de morcego,ele apenas consegue planar,mas em compensação,ele tem uma audição que escuta até 2 km de distância,e uma visão extremamente aguçada,podendo adaptar ela para enxergar no escuro ou ter uma visão de calor.Ele é alguém muito fácil de se manipular e isso já trouxe diversos problemas para ele uma vez...espero que não aconteça novamente.'
    
    imgPersonagem.src = "MU/personagens/moldu.png"
    emoji.src = "MU/emojis/moldu.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Morcegário das Planícies"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Planar, visão de calor e visão noturna e boa audição"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Dudubodu"

    toggleBoxes()
    document.body.style.backgroundColor = "#3f484a"
}

function nickShow()
{
    personagemNum = 13
    showInfoAlunos()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Nick Eldridge";
    personagemDesc.textContent = 'Ele é praticamente o "palhaço" da turma,mas não de um jeito bom.Ele faz piadas de humor ácido e zomba de todos os alunos sem exceção,e de alguma forma ele sabe dos pontos fracos de cada um.Ele é bem misterioso,ninguém sabe de onde veio,nem mesmo sua jaqueta parece ser oficial da universidade.Apesar de ter chego do nada,ele conhece os funcionários e alunos tão bem quanto os outros,até mesmo seus segredos,apesar de sua espécie ser uma das mais simples.Ele é uma caixa de surpresas com seu conhecimento avançado e habilidade de atrapalhar as aulas,acho que só o tempo mostrará mais sobre ele.'
    
    imgPersonagem.src = "MU/personagens/nick.png"
    emoji.src = "MU/emojis/nick.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = "Willkommen, bienvenue, welcome!"
    
    txtEspecie.textContent = "Bode das Montanhas"
    txtFamilia.textContent = "Mãe, pai e irmão mais velho(Nomes desconhecidos)"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "3 de Setembro"
    txtApelidos.textContent = "… Você realmente quer saber?"
    txtMaterias.textContent = "Teatro, Artes, Literatura, Música, Escrita"
    txtHab.textContent = "TBA"
    imgAss.src = "assinaturas/nick.png"
    txtInterpretador.textContent = "Jack"

    toggleBoxes()
    document.body.style.backgroundColor = "#b58f36"
}

function pattyShow()
{
    personagemNum = 14
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Patty Liniker";
    personagemDesc.textContent = 'Uma completa durona que adora coisas mais escuras e o estilo punk no geral,sempre pronta para brigar,com essas faixas amarradas em braços e pernas para ter alguns golpes mais fortes.Apesar de não parecer,ela é muito forte,sendo capaz de quebrar alguns metais com um simples soco ou chute,e também possuí o controle sobre uma energia presente em apenas sua espécie,podendo usar isso para materializar coisas de seu desejo,como sua Guitarra-Machado,que foi herdada de seu pai.'
    
    imgPersonagem.src = "MU/personagens/patty.png"
    emoji.src = "MU/emojis/patty.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Troll das Trevas"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Força e materializar coisas"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Floox"

    toggleBoxes()
    document.body.style.backgroundColor = "#994283"
}

function pauloShow()
{
    personagemNum = 15
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "none"

    personagemNome.textContent = "Paulo Santiago";
    personagemDesc.textContent = 'Quem é o melhor aluno nos esportes e pior nas notas?Ele mesmo,Paulo!Apesar de ser horrível de uma forma imensurável nas notas de sala de aula,ele se acha o melhor da Universidade,algo que já mostra que sua inteligência não é a das melhores...Além de ser bom em qualquer tipo de esporte terrestre e que envolva bolas,ele é também um ótimo nadador e tem uma ótima visão embaixo da água,seus tentáculos são completamente elásticos,que se estivam até 250 metros e possui uma regeneração bem rápida até.'
    
    imgPersonagem.src = "MU/personagens/paulo.png"
    emoji.src = "MU/emojis/paulo.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "Lula Subterrânea"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Boa visão embaixo d'água, membros elásticos e regeneração consideravelmente rápida"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Pablito"

    toggleBoxes()
    document.body.style.backgroundColor = "#137747"
}

function stephanieShow()
{
    personagemNum = 16
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Stephanie Valinskez";
    personagemDesc.textContent = 'Famosa em todas as redes sociais e admirada por muitos,principalmente na universidade,ela é alguém sempre muito energética e sempre disposta a interagir com todos;ela tem uma estrela de estimação desde quando ela era uma raposinha,que acompanha ela em todas as encrencas que se mete,ela pode ser alguém bem calma,mas você não vai querer ver sua reação quando alguém pegar seu celular.Ela teve um problema em sua genética que fez com que ela crescesse muito mais do que o padrão de sua espécie,tanto que seu pai teve que aumentar a casa deles por conta dela,isso também dificulta ela na hora de comprar roupas e sapatos,mas uma parte desse problema facilmente foi resolvido por sua tia costureira;esse problema na genética também afetou um dos poderes principal da espécie,que era gerar uma ventania de areia com as mãos,mas ela só consegue gerar uma quantidade aceitável de areia com os pés e cauda mas por outra parte,seu poder de super velocidade pode ser visto como um teleporte por alguns,ela também pode se transformar em uma simples raposa e possui uma audição extremamente aguçada.Ela sempre cuida muito bem de seu pelo,sendo o mais macio e fofo possível,sorte dela que ninguém descobriu ainda que sua fraqueza é carinho no queixo...'
    
    imgPersonagem.src = "MU/personagens/stephanie.png"
    emoji.src = "MU/emojis/stephanie.png"
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

    toggleBoxes()
    document.body.style.backgroundColor = "#d3a259"
}

function vanessaShow()
{
    personagemNum = 17
    showInfoAlunos()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "none"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Vanessa Steffan";
    personagemDesc.textContent = 'A maior patricinha que você pode conhecer,sempre se gabando por sua riqueza (que na verdade é só de seus pais),ela sempre quer fazer questão de que saibam que ela está no ambiente,seja sendo extravagante ou apenas gritando por atenção mesmo,ela não se dá muito bem com a maioria dos garotos,mas com as garotas é totalmente diferente.Ela vive se exibindo por aí com sua beleza (mesmo que na realidade não seja tão bela assim),seu poder é uma cantoria que pode manipular os outros,mas ela ainda não sabe como fazer isso sem que os outros sem libertem facilmente,sua voz também pode ser doce como o canto de uma sereia,ou estridente como uma cabra.'
    
    imgPersonagem.src = "MU/personagens/vanessa.png"
    emoji.src = "MU/emojis/vanessa.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtFamilia.textContent = "Axolote do Pântano"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Manipular os outros com seu canto"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "St"

    toggleBoxes()
    document.body.style.backgroundColor = "#719999"
}


function ambrosioShow()
{
    personagemNum = 18
    showInfoFuncionarios()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Ambrósio";
    personagemDesc.textContent = "O bibliotecário,sempre muito misterioso,mesmo que ele pareça estar sempre bravo e sério,ele é um amor,sempre dedicado a tirar dúvidas dos outros sobre literatura,ele apenas quer silêncio na sua biblioteca.Ele veio trabalhar aqui para ficar mais perto de seu querido irmão mais novo,Márcio,e também guarda uma pedra com olhos como um peso de papel,que foi um presente de seu irmão de quando eles ainda eram jovens."
    
    imgPersonagem.src = "MU/personagens/ambrosio.png"
    emoji.src = "MU/emojis/ambrosio.png"
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
    txtInterpretador2.textContent = "TBA"

    toggleBoxes()
    document.body.style.backgroundColor = "#3b270d"
}

function elisangelaShow()
{
    personagemNum = 19
    showInfoFuncionarios()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Elisângela";
    personagemDesc.textContent = 'Uma enfermeira descolada,sempre sabe exatamente do que os alunos precisam,mas não se engane,ela não é apenas uma enfermeira,ela também sabe dar conselhos muito bons para resolver problemas.Ela já estudou na Mystic University,e logo que terminou os estudos,já aceitou a vaga de emprego para poder ajudar os próximos alunos.'
    
    imgPersonagem.src = "personagens/elisangela.png"
    emoji.src = "emojis/elisangela.png"
    foto.src = "fotos/elisangela.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Enfermeira"
    txtHab2.textContent = "TBA"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "TBA"

    toggleBoxes()
    document.body.style.backgroundColor = "#d11b1b"
}

function geronimoShow()
{
    personagemNum = 20
    showInfoFuncionarios()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Gerônimo";
    personagemDesc.textContent = 'Um zelador amigável e calmo,adora todos os estudantes e ama contar as histórias de sua juventude para eles,ele sempre poderá te ajudar com conselhos e outras coisas.Ele mora e trabalha na escola há anos,desde quando ela foi fundada,sua blusa é da época que ele era coordenador e braço direito do pai de Vincent,por isso tem a logo diferente,ele decidiu se tornar zelador por conta própria,pois de acordo com ele,é melhor para essa sua idade,mesmo que Vincent tenha insistido para ele continuar no cargo de coordenador.'
    
    imgPersonagem.src = "MU/personagens/geronimo.png"
    emoji.src = "MU/emojis/geronimo.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Zelador"
    txtHab2.textContent = "TBA"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "TBA"

    toggleBoxes()
    document.body.style.backgroundColor = "#4366ab"
}

function gertrudesShow()
{
    personagemNum = 21
    showInfoFuncionarios()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Gertrudes";
    personagemDesc.textContent = 'Uma tia da cantina que é o contrário da outra,sempre quer o melhor para os alunos, principalmente para seu sobrinho e os amigos dele,se quiser comer algo diferente fora do horário do lanche,é só falar com ela,que ela irá te oferecer um banquete.Todos adoram sua comida,que na maioria das vezes serve de um banquete inteiro com o tanto de coisa que ela faz,seja doce ou salgado,quem mais se dá bem é Cristian,já que ela sempre quer que ele esteja bem alimentado...'
    
    imgPersonagem.src = "MU/personagens/gertrudes.png"
    emoji.src = "MU/emojis/gertrudes.png"
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
    txtInterpretador2.textContent = "TBA"

    toggleBoxes()
    document.body.style.backgroundColor = "#38c89a"
}

function gomesShow()
{
    personagemNum = 22
    showInfoFuncionarios()

    btnFormas.style.display = "none"

    personagemNome.textContent = "King Gomes";
    personagemDesc.textContent = 'O inspetor de alunos,por mais que ele possa parecer extremamente durão e nada amigável,ele é a criatura mais doce e pacífica que você vai conhecer em toda sua vida.Gomes foi encontrado nas ruas por Vincent depois de ter sido abandonado por sua família,que decidiu dar um lar e um emprego para ele,que também possui muitas habilidades culinárias,sendo sua mais especial,suas torradas,ele sempre está disposto a ajudar qualquer um,ele é extremamente forte,mas NUNCA usa essa sua força.'
    
    imgPersonagem.src = "MU/personagens/gomes.png"
    emoji.src = "MU/emojis/gomes.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "TBA"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Inspetor de Alunos"
    txtHab2.textContent = "Força"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#487cca"
}

function marcioShow()
{
    personagemNum = 23
    showInfoFuncionarios()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Márcio";
    personagemDesc.textContent = 'O Professor,ele é um tanto quanto misterioso,bem,atualmente,já que ele é novo para todos os alunos,mas apesar de parecer alguém bravo,ele é o melhor professor que você poderá ter em toda sua vida,consegue transformar qualquer aula em diversão,alguns alunos antigos dizem que ele já fez até uma espécie de Battle Royale na aula de educação física.Ele é o segundo mais importante de toda a universidade,por ser considerado incrível,é o único professor da Mystic University,ele tem poderes simples,como teleportar e criar objetos,porém ele não se importa com seus poderes,ele apenas se importa com a educação de todos os estudantes.'
    
    imgPersonagem.src = "MU/personagens/marcio.png"
    emoji.src = "MU/emojis/marcio.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "TBA"
    txtFamilia2.textContent = "Ambrósio(Irmão)"
    txtPositivos2.innerHTML = "Vincent(Amigo)"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "Prof.M, Prof"
    txtCargo.textContent = "Professor"
    txtHab2.textContent = "Teleportar e criar objetos"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Bellow"

    toggleBoxes()
    document.body.style.backgroundColor = "#aac3e1"
}

function soniaShow()
{
    personagemNum = 24
    showInfoFuncionarios()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Sonia";
    personagemDesc.textContent = 'Uma tia da cantina rabugenta,ela não se importa com os alunos e sempre serve qualquer coisa para eles,ela apenas está ali por falta de opção de trabalho.Sua comida é sempre deixada de lado por não parecer comestível...apenas Timothey consegue comer suas comidas,mas não é culpa dela,talvez seja o que ela aprendeu crescendo em um pântano...'
    
    imgPersonagem.src = "MU/personagens/sonia.png"
    emoji.src = "MU/emojis/sonia.png"
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
    txtInterpretador2.textContent = "TBA"

    toggleBoxes()
    document.body.style.backgroundColor = "#638246"
}

function vincentShow()
{
    personagemNum = 25
    showInfoFuncionarios()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "none"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Vincent Mysteriuss";
    personagemDesc.textContent = 'O Diretor,é alguém bem amigável e sempre disponibilizado a ajudar os outros,por mais que sua aparência não demonstre isso.Ele herdou a universidade de seu tio,mas decidiu realmente transformá-la em uma universidade,já que antes era apenas uma escola normal,onde ele mesmo estudou,junto de seu primo que também morava com ele.Os poderes de sua espécie se resumem em sombras,podendo vagar facilmente e criar tentáculos puramente feitos de sombra,ele também possui uma forma monstruosa extremamente poderosa,que ele usa apenas com alunos extremamente levados,e sua sombra tem uma cor por conta de características familiares,onde cada um de sua família tem uma cor de sombra.'
    
    imgPersonagem.src = "MU/personagens/vincent.png"
    emoji.src = "MU/emojis/vincent.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie2.textContent = "Criatura das Sombras"
    txtFamilia2.textContent = "TBA"
    txtPositivos2.innerHTML = "Gomes(Mordomo)<br>Márcio(Amigo)"
    txtNegativos2.innerHTML = "TBA"
    txtData2.textContent = "TBA"
    txtApelidos2.textContent = "TBA"
    txtCargo.textContent = "Diretor"
    txtHab2.textContent = "Vagar sobre, manipular sombras e forma monstruosa"
    imgAss2.src = "assinaturas/TBA.png"
    txtInterpretador2.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#1f492c"
}

function cuscolarShow()
{
    personagemNum = 26
    showInfoPets()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "none"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Cuscolar";
    personagemDesc.textContent = 'Ele não tem um dono ou dona em específico,mas é considerado como o mascote da universidade inteira desde que ele saiu do esgoto,mas como ninguém viu isso acontecer,ninguém sabe disso,mas ele é amado por muitos.Apesar de parecer inocente e fofo,ele frequentemente tem sonhos onde seus amigos do esgoto escapam para fora e às vezes até imagina planos para ajudá-los a escapar de lá,mas não se sabe ao certo se o universo está pronto para o impacto de Cuscolar...'
    
    imgPersonagem.src = "MU/personagens/cuscolar.png"
    emoji.src = "MU/emojis/cuscolar.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "Desconhecido"
    txtDono.textContent = "Ninguém"
    txtInterpretador3.textContent = "Liro"

    toggleBoxes()
    document.body.style.backgroundColor = "#616f94"
}

function jorgeShow()
{
    personagemNum = 27
    showInfoPets()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "none"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "J.O.R.G.E.";
    personagemDesc.textContent = 'Ele é o relógio de Eugênio,mas é como se fosse um pet,Eugênio conversa com ele às vezes,e também pode ser considerado como seu primeiro robô,mas o que significa essa sigla?ninguém sabe...'
    
    imgPersonagem.src = "MU/personagens/jorge.png"
    emoji.src = "MU/emojis/jorge.png"
    genero.src = "genero/tba.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Eugênio"
    txtInterpretador3.textContent = "Will"

    toggleBoxes()
    document.body.style.backgroundColor = "#36d8d5"
}

function starryShow()
{
    personagemNum = 28
    showInfoPets()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Starry";
    personagemDesc.textContent = 'Ela é a estrela de estimação da Stephanie,Starry sempre tenta cuidar de Stephanie e não gosta que os outros cheguem perto dela,mas não é como se ela pudesse fazer algo de verdade,mas ela se acha amedrontadora...'
    
    imgPersonagem.src = "MU/personagens/starry.png"
    emoji.src = "MU/emojis/starry.png"
    genero.src = "genero/tba.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Stephanie"
    txtInterpretador3.textContent = "Sky"

    toggleBoxes()
    document.body.style.backgroundColor = "#ddc92e"
}

function vivyShow()
{
    personagemNum = 29
    showInfoPets()

    btnFormas.style.display = "grid"
    btnformaNormal.style.display = "block"
    btnformaDemonio.style.display = "none"
    btnformaNatal.style.display = "block"
    btnformaShenanigans.style.display = "block"

    personagemNome.textContent = "Vivy";
    personagemDesc.textContent = 'Ela é a planta de estimação de Cristian,ela nasceu quando ele estava tentando dar consciência a uma planta,não foi exatamente o que ele queria,mas ele cuida dela como se fosse sua filha.'
    
    imgPersonagem.src = "MU/personagens/vivy.png"
    emoji.src = "MU/emojis/vivy.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie3.textContent = "TBA"
    txtDono.textContent = "Cristian"
    txtInterpretador3.textContent = "Canto"

    toggleBoxes()
    document.body.style.backgroundColor = "#25cf19"
}

function markShow()
{
    personagemNum = 30
    showInfoAlunos()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Mark";
    personagemDesc.textContent = 'O desenhista,não importa a hora,toda hora é hora de desenhar com qualquer tipo de material,impressiona todos com seus desenhos,ás vezes ele tem que fazer retratos para os outros estudantes,mas para ele não é problema,sempre está pronto para criar uma obra nova.Seus poderes são um dos mais impressionantes da universidade,podendo variar de formas,entrando em sua forma Lobo total,onde ele vira um quadrúpede extremamente veloz, enquanto durante luas cheias,ele vira uma besta que pode estraçalhar tudo que vê pela frente,também possuí uma voz suave e uma visão muito aguçada,e claro,você não vai querer estragar algum desenho dele,se fizer isso,ele automaticamente entra em sua forma besta.'
    
    imgPersonagem.src = "MU/personagens/mark.png"
    emoji.src = "MU/emojis/mark.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Forma de lobo total"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Nicky"

    toggleBoxes()
    document.body.style.backgroundColor = "#0931ab"
}

function melissaShow()
{
    personagemNum = 31
    showInfoAlunos()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Melissa Maclov";
    personagemDesc.textContent = 'A festeira,sempre encontra alguma maneira de transformar qualquer coisa em uma festa,a maioria dos estudantes adoram ela por essa sua vibe descolada.Vinda de outro planeta,seus poderes não tem muita força aqui,mas mesmo assim ela consegue flutuar calmamente como se controlasse a gravidade,com suas antenas menores e maiores,ela pode emitir alguns sons que lembram músicas eletrônicas,por isso muitas vezes ela mesma é a DJ de sua própria festa,então,topa participar da festa?'
    
    imgPersonagem.src = "MU/personagens/melissa.png"
    emoji.src = "MU/emojis/melissa.png"
    genero.src = "genero/fem.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "Stella(Namorada)"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "Mel"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Emitir vibrações que lembram música eletrônica com suas antenas e flutuar"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Miguelito"

    toggleBoxes()
    document.body.style.backgroundColor = "#9d4cb1"
}

function stellaShow()
{
    personagemNum = 32
    showInfoAlunos()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Stella Nightsky";
    personagemDesc.textContent = 'A carinhosa,sempre tenta ajudar todos,não gosta de ver ninguém se machucando,ela é super doce e fofa,sempre cheia de glitter e esperta,ela tem uma pelúcia de dragão que não consegue dormir sem ela.Ela tem diversas habilidades como uma aderência inimaginável em suas mãos e pés,uma camuflagem sem igual,é uma ótima nadadora e tem um veneno letal para alguns,de fato são algumas habilidades meio inútil para alguém tão inofensiva como ela...Ela sempre prefere usar sua cauda ao invés dos braços para fazer algumas tarefas,por conta da maior força em sua cauda.'
    
    imgPersonagem.src = "MU/personagens/stella.png"
    emoji.src = "MU/emojis/stella.png"
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

    toggleBoxes()
    document.body.style.backgroundColor = "#20a73d"
}

function timotheyShow()
{
    personagemNum = 33
    showInfoAlunos()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Timothey Buhzeye Emsem";
    personagemDesc.textContent = 'O preguiçoso,esse é o claro exemplo de quem apenas vai para a escola pelo lanche,ele dorme na maior parte do tempo,exceto nas aulas de culinária e intervalos,às vezes ele tenta fazer um trabalho para a aula,mas ele só tenta mesmo...Sempre carrega qualquer tipo de comida consigo.Ele não possui tantos poderes,mas tem uma aderência imensa em sua cauda e sua boca da barriga que pode engolir qualquer coisa e logo depois,cuspir com a potência de até 10 snipers,quando ele está com fome,pode confundir qualquer coisa com comida,e se você atrapalhar a soneca dele,vai ser a última vez que você fez isso.'
    
    imgPersonagem.src = "MU/personagens/timothey.png"
    emoji.src = "MU/emojis/timothey.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Aderência na cauda"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Toey"

    toggleBoxes()
    document.body.style.backgroundColor = "#e7786e"
}

function zugShow()
{
    personagemNum = 34
    showInfoAlunos()

    btnFormas.style.display = "none"

    personagemNome.textContent = "Zug";
    personagemDesc.textContent = 'O atleta,sempre leva todos os troféus e medalhas de qualquer esporte para a universidade,durante as aulas de educação física ele pode ser um pouco competitivo demais,mas talvez seja de família.Ele pode facilmente mudar de forma por ser uma espécie de criatura espiritual,pode aumentar ou diminuir de tamanho quando quiser,sua cor também pode mudar dependendo do que ele estiver sentindo,ele é o mais poderoso de toda a universidade...bem...no caso,ainda não,ele apenas tem que esperar sua noite de ascensão para ganhar seus poderes espirituais.'
    
    imgPersonagem.src = "MU/personagens/zug.png"
    emoji.src = "MU/emojis/zug.png"
    genero.src = "genero/masc.png"

    txtEspecial.textContent = ""
    
    txtEspecie.textContent = "TBA"
    txtFamilia.textContent = "TBA"
    txtPositivos.innerHTML = "TBA"
    txtNegativos.innerHTML = "TBA"
    txtData.textContent = "TBA"
    txtApelidos.textContent = "TBA"
    txtMaterias.textContent = "TBA"
    txtHab.textContent = "Mudar de forma e tamanho"
    imgAss.src = "assinaturas/TBA.png"
    txtInterpretador.textContent = "Guto"

    toggleBoxes()
    document.body.style.backgroundColor = "#4de4ec"
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
    btnformaDemonio.style.backgroundImage = "linear-gradient(to bottom, rgb(221, 15, 15) 80%, rgb(172, 11, 56))"
    btnformaDemonio.textContent = "DEMÔNIO"

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
        document.body.style.backgroundColor = "#3b6de1"
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
       funcShow[34](); 
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
    if(personagemNum === 34)
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
    logoDA.src = "logo.png"

    mainAlunos.style.opacity = 0
    mainFuncionarios.style.opacity = 0 
    mainPets.style.opacity = 0 
    mainOutros.style.opacity = 0
    personagem.style.opacity = 0

    document.body.style.backgroundColor = "#1e1e1e"
    await sleep(500)
    window.location.href = "index.html";
}

function btnNormal()
{
    if  (personagemNum === 0)
    {
        imgPersonagem.src = "MU/personagens/alexander.png"
        document.body.style.backgroundColor = "#23a35d"
    }
    else if (personagemNum === 1)
    {
        imgPersonagem.src = "MU/personagens/angela.png"
        document.body.style.backgroundColor = "#cb5fb5"
    }
    else if (personagemNum === 2)
    {
        imgPersonagem.src = "MU/personagens/bellie.png"
        document.body.style.backgroundColor = "#6b3651"
    }
    else if (personagemNum === 3)
    {
        imgPersonagem.src = "MU/personagens/cris.png"
        document.body.style.backgroundColor = "#baba2f"
    }
    else if (personagemNum === 4)
    {
        imgPersonagem.src = "MU/personagens/daniel.png"
        document.body.style.backgroundColor = "#dd1662"
    }
    else if (personagemNum === 5)
    {
        imgPersonagem.src = "MU/personagens/eugenio.png"
        document.body.style.backgroundColor = "#ed60c0"
    }
    else if (personagemNum === 6)
    {
        imgPersonagem.src = "MU/personagens/evelyn.png"
    }
    else if (personagemNum === 9)
    {
        imgPersonagem.src = "MU/personagens/kate.png"
        document.body.style.backgroundColor = "#c91ed2"
    }
    else if (personagemNum === 10)
    {
        imgPersonagem.src = "MU/personagens/leo.png"
        document.body.style.backgroundColor = "#3d66e3"
    }
    else if (personagemNum === 11)
    {
        imgPersonagem.src = "MU/personagens/lorette.png"
        document.body.style.backgroundColor = "#e27ab7"
    }
    else if (personagemNum === 12)
    {
        imgPersonagem.src = "MU/personagens/moldu.png"
        document.body.style.backgroundColor = "#3f484a"
        personagemNome.textContent = "Moldu Dulivan";
        personagemDesc.textContent = 'Ele é o aluno exemplar,sempre dá seu melhor para dar orgulho aos seus professores,mas além disso,ele também se dá muito bem com a maioria dos alunos,quando não é odiado por querer cuidar da sala quando o professor sai ou lembrar das tarefas...Apesar de ser uma espécie de morcego,ele apenas consegue planar,mas em compensação,ele tem uma audição que escuta até 2 km de distância,e uma visão extremamente aguçada,podendo adaptar ela para enxergar no escuro ou ter uma visão de calor.Ele é alguém muito fácil de se manipular e isso já trouxe diversos problemas para ele uma vez...espero que não aconteça novamente.'
        emoji.src = "MU/emojis/moldu.png"
        txtEspecie.textContent = "Morcegário das Planícies"
    }
    else if (personagemNum === 14)
    {
        imgPersonagem.src = "MU/personagens/patty.png"
        document.body.style.backgroundColor = "#994283"
    }
    else if (personagemNum === 15)
    {
        imgPersonagem.src = "MU/personagens/paulo.png"
        document.body.style.backgroundColor = "#137747"
    }
    else if (personagemNum === 16)
    {
        imgPersonagem.src = "MU/personagens/stephanie.png"
        document.body.style.backgroundColor = "#d3a259"
    }
    else if (personagemNum === 23)
    {
        imgPersonagem.src = "MU/personagens/marcio.png"
        document.body.style.backgroundColor = "#aac3e1"
    }
    else if (personagemNum === 25)
    {
        imgPersonagem.src = "MU/personagens/vincent.png"
    }
    else if (personagemNum === 26)
    {
        imgPersonagem.src = "MU/personagens/cuscolar.png"
    }
    else if (personagemNum === 27)
    {
        imgPersonagem.src = "MU/personagens/jorge.png"
        document.body.style.backgroundColor = "#36d8d5"
    }
    else if (personagemNum === 28)
    {
        imgPersonagem.src = "MU/personagens/starry.png"
        document.body.style.backgroundColor = "#ddc92e"
    }
    else if (personagemNum === 29)
    {
        imgPersonagem.src = "MU/personagens/vivy.png"
        document.body.style.backgroundColor = "#25cf19"
    }
}

function btnDemonio()
{
    if (personagemNum === 2)
    {
        imgPersonagem.src = "MU/formas/bellieD.png"
        document.body.style.backgroundColor = "#63173e"
    }
    else if (personagemNum === 4)
    {
        imgPersonagem.src = "MU/formas/danielD.png"
        document.body.style.backgroundColor = "#1196dd"
    }
    else if (personagemNum === 12)
    {
        imgPersonagem.src = "MU/formas/molduD.png"
        document.body.style.backgroundColor = "#171717"
        emoji.src = "MU/emojis/m0ldu.png"
        personagemNome.textContent = "M0ldu Dulivan";
        personagemDesc.textContent = 'M0ldu foi o apelido dado quando Pastno usou Moldu como seu hospedeiro,enquanto sugava suas energias espirituais para se tornar mais poderoso.Ele usou Moldu para tentar roubar a energia dos demais e matar Vincent,mas para nossa felicidade,ele falhou completamente em seu plano de sugar a energia de todos da universidade e depois dominar o mundo.Pastno foi liberado por Vincent acidentalmente em sua infância,durante anos ele viveu na mata da Mystic University atraindo alunos para lá e sugando suas energias.Sua forma original é intangível e completamente distorcida,por isso ele sempre tenta encontrar um hospedeiro.'
        txtEspecie.textContent = "Espírito Parasita"
    }
}

function btnNatal()
{
    if  (personagemNum === 0)
    {
        imgPersonagem.src = "MU/formas/alexanderN.png"
        document.body.style.backgroundColor = "#36badb"
    }
    else if (personagemNum === 1)
    {
        imgPersonagem.src = "MU/formas/angelaN.png"
        document.body.style.backgroundColor = "#1bb8df"
    }
    else if (personagemNum === 2)
    {
        imgPersonagem.src = "MU/formas/bellieN.png"
        document.body.style.backgroundColor = "#8221ae"
    }
    else if (personagemNum === 3)
    {
        imgPersonagem.src = "MU/formas/crisN.png"
        document.body.style.backgroundColor = "#2a4cc5"
    }
    else if (personagemNum === 4)
    {
        imgPersonagem.src = "MU/formas/danielN.png"
        document.body.style.backgroundColor = "#9311c7"
    }
    else if (personagemNum === 5)
    {
        imgPersonagem.src = "MU/formas/eugenioN.png"
        document.body.style.backgroundColor = "#41b9e8"
    }
    else if (personagemNum === 9)
    {
        imgPersonagem.src = "MU/formas/kateN.png"
        document.body.style.backgroundColor = "#a98edc"
    }
    else if (personagemNum === 10)
    {
        imgPersonagem.src = "MU/formas/leoN.png"
        document.body.style.backgroundColor = "#7a3c1a"
    }
    else if (personagemNum === 12)
    {
        imgPersonagem.src = "MU/formas/molduN.png"
        document.body.style.backgroundColor = "#0b9c2a"
        personagemNome.textContent = "Moldu Dulivan";
        personagemDesc.textContent = 'Ele é o aluno exemplar,sempre dá seu melhor para dar orgulho aos seus professores,mas além disso,ele também se dá muito bem com a maioria dos alunos,quando não é odiado por querer cuidar da sala quando o professor sai ou lembrar das tarefas...Apesar de ser uma espécie de morcego,ele apenas consegue planar,mas em compensação,ele tem uma audição que escuta até 2 km de distância,e uma visão extremamente aguçada,podendo adaptar ela para enxergar no escuro ou ter uma visão de calor.Ele é alguém muito fácil de se manipular e isso já trouxe diversos problemas para ele uma vez...espero que não aconteça novamente.'
        emoji.src = "MU/emojis/moldu.png"
        txtEspecie.textContent = "Morcegário das Planícies"
    }
    else if (personagemNum === 14)
    {
        imgPersonagem.src = "MU/formas/pattyN.png"
        document.body.style.backgroundColor = "#1ac745"
    }
    else if (personagemNum === 15)
    {
        imgPersonagem.src = "MU/formas/pauloN.png"
        document.body.style.backgroundColor = "#4ad4a4"
    }
    else if (personagemNum === 16)
    {
        imgPersonagem.src = "MU/formas/stephanieN.png"
        document.body.style.backgroundColor = "#2d27ce"
    }
    else if (personagemNum === 23)
    {
        imgPersonagem.src = "MU/formas/marcioN.png"
        document.body.style.backgroundColor = "#cb9230"
    }
    else if (personagemNum === 28)
    {
        imgPersonagem.src = "MU/formas/starryN.png"
        document.body.style.backgroundColor = "#7ac6e2"
    }
    else if (personagemNum === 29)
    {
        imgPersonagem.src = "MU/formas/vivyN.png"
        document.body.style.backgroundColor = "#d90d0d"
    }

}

function btnShenanigans()
{
    if (personagemNum === 1)
    {
        imgPersonagem.src = "MU/formas/angelaA.png"
        document.body.style.backgroundColor = "#cb5fb5"
    }
    else if (personagemNum === 2)
    {
        imgPersonagem.src = "MU/formas/bellieA.png"
        document.body.style.backgroundColor = "#add24e"
    }
    else if (personagemNum === 3)
    {
        imgPersonagem.src = "MU/formas/crisA.png"
        document.body.style.backgroundColor = "#baba2f"
    }
    else if (personagemNum === 4)
    {
        imgPersonagem.src = "MU/formas/danielA.png"
        document.body.style.backgroundColor = "#dd1662"
    }
    else if (personagemNum === 5)
    {
        imgPersonagem.src = "MU/formas/eugenioA.png"
        document.body.style.backgroundColor = "#ed60c0"
    }
    else if (personagemNum === 6)
    {
        imgPersonagem.src = "MU/formas/evelynA.png"
    }
    else if (personagemNum === 10)
    {
        imgPersonagem.src = "MU/formas/leoA.png"
        document.body.style.backgroundColor = "#1196dd"
    }
    else if (personagemNum === 11)
    {
        imgPersonagem.src = "MU/formas/loretteA.png"
        document.body.style.backgroundColor = "#aeaeae"
    }
    else if (personagemNum === 14)
    {
        imgPersonagem.src = "MU/formas/pattyA.png"
        document.body.style.backgroundColor = "#994283"
    }
    else if (personagemNum === 16)
    {
        imgPersonagem.src = "MU/formas/stephanieA.png"
        document.body.style.backgroundColor = "#d3a259"
    }
    else if (personagemNum === 23)
    {
        imgPersonagem.src = "MU/formas/marcioA.png"
        document.body.style.backgroundColor = "#2179e4"
    }
    else if (personagemNum === 25)
    {
        imgPersonagem.src = "MU/formas/vincentA.png"
    }
    else if (personagemNum === 26)
    {
        imgPersonagem.src = "MU/formas/cuscolarA.png"
    }
    else if (personagemNum === 27)
    {
        imgPersonagem.src = "MU/formas/jorgeA.png"
        document.body.style.backgroundColor = "#5bc817"
    }
    else if (personagemNum === 28)
    {
        imgPersonagem.src = "MU/formas/starryA.png"
        document.body.style.backgroundColor = "#ddc92e"
    }
    else if (personagemNum === 29)
    {
        imgPersonagem.src = "MU/formas/vivyA.png"
        document.body.style.backgroundColor = "#25cf19"
    }
}