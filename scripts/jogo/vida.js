class Vida {
    constructor(vidaTotal, vidaInicial){
        this.vidaTotal = vidaTotal
        this.vidaInicial = vidaInicial
        this.vidas = this.vidaInicial

        this.larguraVida = 25
        this.alturaVida = 25

        this.xInicial = 20
        this.y = 20
    }

    draw(){
        for(let i = 0; i < this.vidas; i++){
            const margem = i * 10
            const posicao = this.xInicial * (i + 1)

            image(imagemVida,
                 posicao + margem,
                  this.y,
                   this.larguraVida,
                    this.alturaVida
                    )    
        }
    }
    ganhaVida(){
        if(this.vidas <= this.vidaTotal){
            this.vidas++
        }
    }
    perdeVida(){
        this.vidas--
    }
}
