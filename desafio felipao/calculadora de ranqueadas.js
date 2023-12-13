calcularRanqueadas(1000, 28)


function calcularRanqueadas(vitorias, derrotas){
    let saldoRanqueadas = vitorias - derrotas
    let nivelRanqueadas

    if(saldoRanqueadas < 10){
        nivelRanqueadas = " Ferro "
    }else if(saldoRanqueadas >= 11 && saldoRanqueadas <= 20){
        nivelRanqueadas = " Bronze "
    }else if(saldoRanqueadas >= 21 && saldoRanqueadas <= 50){
        nivelRanqueadas = " Prata "
    }else if(saldoRanqueadas >= 51 && saldoRanqueadas <= 80){
        nivelRanqueadas = " Ouro "
    }else if(saldoRanqueadas >= 81 && saldoRanqueadas <= 90){
        nivelRanqueadas = " Diamante "
    }else if(saldoRanqueadas >= 91 && saldoRanqueadas <= 100){
        nivelRanqueadas = " Lendário "
    }else {
        nivelRanqueadas = " Imortal "
    }

    console.log(" O heroi tem saldo de " + saldoRanqueadas + " vitórias e está no nível " + nivelRanqueadas)


}