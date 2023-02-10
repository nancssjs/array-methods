const object = {
    nome: "ilan",
    idade: 20,
    cpf: "11122233345",
    saldo: 500,
    pagamento: function (valor) {
        if(valor > this.saldo) {
            console.log('Saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log(`Pagamento realizado, saldo atual: ${this.saldo}`)
        }
    }
}

const chaves = Object.keys(object)

console.log(chaves) 


if(!chaves.includes("endereco")) {
    console.error('Endereço não cadastrado')
}
