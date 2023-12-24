class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }

    attack(){

        if(this.tipoHeroi === "Mago"){
            console.log(`O ${this.tipoHeroi} atacou usando magia.`)
        }else if(this.tipoHeroi === "Guerreiro"){
            console.log(`O ${this.tipoHeroi} atacou usando uma espada`)
        }else if(this.tipoHeroi === "Monge"){
            console.log(`O ${this.tipoHeroi} atacou usando artes marciais`)
        }else if(this.tipoHeroi === "Ninja"){
            console.log(`O ${this.tipoHeroi} atacou usando shuriken`)
        }
      
    }
}

let meuHeroi = new heroi("Kratos", 32, "Guerreiro")
meuHeroi.attack()