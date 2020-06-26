class Jogo {
    constructor(){
        this.inimigoAtual = 0

    }
    setup(){
        cenario = new Cenario(imagemCenario, 1)

        pontuacao = new Pontuacao()

        vida = new Vida()

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
            100
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
            100
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
            15,
            100
        )

        inimigos.push(inimigoGotinha)
        inimigos.push(inimigoGotinhaVoador)
        inimigos.push(inimigoTroll)
   }

   pularComEspaco(){
       if(keyCode === 32){
           personagem.pula()
           somDoPulo.play()
    }

    }

   draw(){
       cenario.exibe()
       cenario.move()

       vida.draw()

       pontuacao.exibe()
       pontuacao.adicionarPontos()
       
       personagem.exibe()
       personagem.aplicaGravidade()

       const inimigo = inimigos [this.inimigoAtual]
       const inimigoVisivel = inimigo.x < - inimigo.larguraPerso

       inimigo.exibe()
       inimigo.move()


       if(inimigoVisivel){
           this.inimigoAtual++
        if(this.inimigoAtual > 2){
            this.inimigoAtual = 0
        }
        inimigo.velocidade = parseInt(random(10, 20))
        }

        if(personagem.colidiu(inimigo)){
            console.log('colidiu')
            image(imagemGameOver, width / 2 - 200, height / 2)
            noLoop()
        }
    }



}