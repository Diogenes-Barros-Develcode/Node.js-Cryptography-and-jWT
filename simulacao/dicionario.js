import { createHash } from 'crypto'

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha) {
        if(nome === this.nome && this.criaHash(senha) === this.hash) {
            console.log("Usuário cadastrado com sucesso!");
            return true;
        }
        return false;
    }
}

const usuario = new Usuario('Diógenes', 'senha123');

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182", "meuAniversario", "senha123456", "brasil", "102030"]

senhasComuns.map(senha => {
    if(usuario.autentica("Diógenes", senha)){
        console.log(`A senha do usuário é ${senha}`)
    }
})

usuario.autentica('Diógenes', 'minhaSenha');