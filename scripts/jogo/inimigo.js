class Inimigo extends Animacao{
    constructor(matriz, imagem, x, variaoY, larguraPerso, alturaPerso, 
        larguraSprite, alturaSprite, velocidae, delay){
    super(matriz, imagem, x, variaoY, larguraPerso, alturaPerso, 
        larguraSprite, alturaSprite)

        this.velocidade = velocidae
        this.delay = delay
        this.x = width + this.delay
    }

    
    move(){
        this.x = this.x - this.velocidade

        if(this.x < - this.larguraPerso - this.delay){
            this.x = width
        }
    }
}