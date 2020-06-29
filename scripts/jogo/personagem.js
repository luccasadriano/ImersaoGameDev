class Personagem extends Animacao {

    constructor(matriz, imagem, x, variaoY, larguraPerso, alturaPerso, 
        larguraSprite, alturaSprite){
    super(matriz, imagem, x, variaoY, larguraPerso, alturaPerso, 
        larguraSprite, alturaSprite)

        this.variaoY = variaoY
        this.yInicial = height - this.alturaPerso - this.variaoY
        this.y = this.yInicial

        this.velocidadeDoPulo = 0
        this.gravidade = 6
        this.alturaDoPulo = - 50
        this.pulo = 0
        this.invencivel = false
    }
    pula(){
        if(this.pulo < 2){
        this.velocidadeDoPulo = this.alturaDoPulo
        this.pulo++
        }
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){
            this.y = this.yInicial
            this.pulo = 0
        }
    }
    ficaInvencivel(){
        this.invencivel = true
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }
        //Desenhar o retangulo no personagem para verificar a colisão
        // noFill()
        // rect(this.x, this.y, this.larguraPerso, this.alturaPerso)
        // rect(
        //     gotinha.x,
        //     gotinha.y,
        //     gotinha.larguraPerso,
        //     gotinha.alturaPerso)
    colidiu(inimigo){
        if(this.invencivel){
            return false
        }
        const precisao = .7
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.larguraPerso * precisao,
            this.alturaPerso * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.larguraPerso * precisao,
            inimigo.alturaPerso * precisao
        )
    
    return colisao
    }

}
