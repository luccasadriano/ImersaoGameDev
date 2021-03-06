function preload() {

    //imagem
    imagemCenario = loadImage('imagens/cenario/floresta.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    imagemGotinha = loadImage('imagens/inimigos/gotinha.png')
    imagemInimigoTrol = loadImage('imagens/inimigos/troll.png')
    imagemGotinhaVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png')
    imagemVida = loadImage('imagens/assets/coracao.png')
    fonte = loadFont('imagens/assets/fonteTelaInicial.otf')
    fita = loadJSON('fita/fita.json')

    //sons
    somDoJogo = loadSound('sons/trilha_jogo.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3')
    somDeDano = loadSound('sons/somDeDano.mp3')

}