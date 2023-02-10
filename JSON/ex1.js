const object = {
    nome: "ilan",
    idade: 20,
    cpf: "11122233345",
}

object.enderecos = [
    {
        rua: "rua2",
        numero: 420,
        apartamento: true,
        complemento: 934,
    },
    {
        rua: "rua3560",
        numero: 1,
        apartamento: false,
    }
]

const aps = object.enderecos.filter(endereco => endereco.apartamento === true)


console.log(aps)