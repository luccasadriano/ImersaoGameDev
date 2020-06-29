class Jogo {
    constructor(){
        this.indice = 0

        this.mapa = fita.mapa

    }
    setup(){
        cenario = new Cenario(imagemCenario, 2)

        // if(cenaAtual === 'jogo'){
        //     somDoJogo.loop()
        //     }

        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

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
            10
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
            15
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
            10
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

       const linhaAtual = this.mapa[this.indice]

       const inimigo = inimigos [linhaAtual.inimigo]
       const inimigoVisivel = inimigo.x < - inimigo.larguraPerso

       inimigo.velocidade = linhaAtual.velocidade

       inimigo.exibe()
       inimigo.move()

       if(inimigoVisivel){
           this.indice++
           inimigo.aparece()
           if(this.indice > this.mapa.length - 1){
               this.indice = 0
            }
        }

        if(personagem.colidiu(inimigo)){
            console.log('colidiu')
            
            vida.perdeVida()
            personagem.ficaInvencivel()
            somDeDano.play()

            if(vida.vidas === 0){
            image(imagemGameOver, width / 2 - 200, height / 2)
            somDoJogo.stop()
            noLoop()
            }
        }
    }
}