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
        console.log("Usuário ou senha incorreta.");
        return false;
    }
}

const usuario = new Usuario('Diógenes', 'minhaSenha');

usuario.autentica('Diógenes', 'minhaSenha');

for (let senhaTeste=0; senhaTeste < 10000; senhaTeste++){
    if(jm.autentica("Diógenes Barros", senhaTeste.toString())){
        console.log(senhaTeste)
    }
}