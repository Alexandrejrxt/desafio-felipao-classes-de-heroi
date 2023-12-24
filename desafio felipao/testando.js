class automovel{
    constructor(nomeCarro, corCarro){
        this.nomeCarro = nomeCarro
        this.corCarro = corCarro
    }
    
    escrever(){
        console.log(`Meu carro atual é um ${this.nomeCarro} na cor ${this.corCarro}`)
    }
}

let offroad = new automovel("Jeep", "Amarelo")
let asfalto = new automovel("Honda Civic", "Preto")

offroad.escrever()
asfalto.escrever()