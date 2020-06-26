class Vida {
    constructor(vidaTotal, vidaInicial){
        this.vidaTotal = vidaTotal
        this.vidaInicial = vidaInicial

        this.vidas = this.vidaInicial
        this.larguraVida = 50
        this.alturaVida = 50

        this.xInicial = 20
        this.y = 20
    }

    draw(){
        // for(let i = 0; i < this.vidas; i++){
        //     const margem = i * 10
        //     const posicao = this.xInicial * (i + 1)

            image(imagemVida, 0,0, this.larguraVida, this.alturaVida)

        //} 16:35
        
    }
}
