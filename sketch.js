//imagens
let imagemCenario
let imagemPersonagem
let imagemGotinha
let imagemInimigoTrol
let imagemGotinhaVoador
let imagemGameOver

//sons
let somDoJogo
let somDoPulo

//variaveis
let cenario
let personagem
let inimigoGotinha
let inimigoTroll
let inimigoGotinhaVoador
let pontuacao

//matriz gotinha
const matrizGotinha = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
]

const matrizPersonagem = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
]

const matrizInimigoTroll = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
]

const matrizGotinhaVoador = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ]

const inimigos = []


function preload() {

    //imagem
    imagemCenario = loadImage('imagens/cenario/floresta.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    imagemGotinha = loadImage('imagens/inimigos/gotinha.png')
    imagemInimigoTrol = loadImage('imagens/inimigos/troll.png')
    imagemGotinhaVoador = loadImage('imagens/inimigos/gotinha-voadora.png')


    //sons
    somDoJogo = loadSound('sons/trilha_jogo.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3')

}

function setup() {//setup é executado uma vez antes do jogo ser iniciado (passar variaveis, valores etc)
    createCanvas(windowWidth, windowHeight);

    cenario = new Cenario(imagemCenario, 1)

    pontuacao = new Pontuacao()

    personagem = new Personagem(
        matrizPersonagem,
        imagemPersonagem,
        0,
        30,
        110,
        135,
        220,
        270
    )

   const inimigoGotinha = new Inimigo(
        matrizGotinha,
        imagemGotinha,
        width - 52,
        30,
        52,
        52,
        104,
        104,
        10, 
        200
    )

   const inimigoGotinhaVoador = new Inimigo(
        matrizGotinhaVoador,
        imagemGotinhaVoador,
        width - 52,
        200,
        100,
        75,
        200,
        150,
        10, 
        1500
    )

   const inimigoTroll = new Inimigo(
        matrizInimigoTroll,
        imagemInimigoTrol,
        width, 
        0,
        200,
        200,
        400,
        400,
        10,
        2500
    )

    inimigos.push(inimigoGotinha)
    inimigos.push(inimigoGotinhaVoador)
    inimigos.push(inimigoTroll)

    // somDoJogo.loop()
    frameRate(40)
}

// function keyPressed() {//função que fica observando se teve alguma ação para pular
//     if(key === 'ArrowUp'){
//         personagem.pula()
//         somDoPulo.play()
//     }
// }

function keyPressed() {//função que fica observando se teve alguma ação para pular
    if(keyCode === 32){
        personagem.pula()
        somDoPulo.play()
    }
}

function draw() {// draw é para desenhar alguma coisa na tela (para ver animação acontecendo)

    cenario.exibe()
    cenario.move()

    pontuacao.exibe()
    pontuacao.adicionarPontos()

    personagem.exibe()
    personagem.aplicaGravidade()

    inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()

    if(personagem.colidiu(inimigo)){//passando o inimigo do forEach
        console.log('colidiu')
        image(imagemGameOver, width / 2 - 200, height / 2)
        noLoop()
    }

    })

}