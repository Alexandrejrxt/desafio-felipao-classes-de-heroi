class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`um delicioso bolo de ${this.saborDaMassa} com ${this.saborRecheio}`)
}



}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")

boloFesta.escrever()

