class Animacao {
    constructor(matriz, imagem, x, variaoY, larguraPerso, alturaPerso, 
        larguraSprite, alturaSprite){
            
        this.matriz = matriz
        this.imagem = imagem
        this.larguraPerso = larguraPerso
        this.alturaPerso = alturaPerso
        this.x = x
        this.variaoY = variaoY
        this.y = height - this.alturaPerso - this.variaoY
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite

        this.frameAtual = 0
    }

    exibe(){
        image(this.imagem, 
            this.x, 
            this.y, 
            this.larguraPerso, 
            this.alturaPerso, 
            this.matriz[this.frameAtual][0], 
            this.matriz[this.frameAtual][1],
            this.larguraSprite, 
            this.alturaSprite)
            
        this.anima()
    }
    
    anima(){

        this.frameAtual++

        if(this.frameAtual >= this.matriz.length - 1){
            this.frameAtual = 0
        }
    }
}