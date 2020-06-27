class Inimigo extends Animacao{
    constructor(matriz, imagem, x, variaoY, larguraPerso, alturaPerso, 
        larguraSprite, alturaSprite, velocidae){
    super(matriz, imagem, x, variaoY, larguraPerso, alturaPerso, 
        larguraSprite, alturaSprite)

        this.velocidade = velocidae
        this.x = width 
    }

    
    move(){
        this.x = this.x - this.velocidade
    }

    aparece(){
        this.x = width
    }
}