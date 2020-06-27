function setup() {//setup é executado uma vez antes do jogo ser iniciado (passar variaveis, valores etc)
    createCanvas(windowWidth, windowHeight);

    jogo = new Jogo()
    jogo.setup()

    telaInicial = new TelaInicial()

    cenas = {
        jogo,
        telaInicial
    }

    // if(cenaAtual == 'jogo'){
    //     somDoJogo.loop()
    // }


    frameRate(40)

    botaoGerenciar = new BotaoGerenciar('Iniciar', width / 2, height / 2)


}

// function keyPressed() {//função que fica observando se teve alguma ação para pular
//     if(key === 'ArrowUp'){
//         personagem.pula()
//         somDoPulo.play()
//     }
// }

function keyPressed() {//função que fica observando se teve alguma ação para pular
    jogo.pularComEspaco(keyCode)
}

function draw() {// draw é para desenhar alguma coisa na tela (para ver animação acontecendo)

    cenas[cenaAtual].draw()
}
