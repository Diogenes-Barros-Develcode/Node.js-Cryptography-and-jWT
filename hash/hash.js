import { createHash } from 'crypto'

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("Olá"))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if(nome === this.nome && criaHash(senha) === this.hash) {
            console.log("Usuário cadastrado com sucesso!");
            return true;
        }
        console.log("Usuário ou senha incorreta.");
        return false;
    }
}

const usuario = new Usuario('Diógenes', 'minhaSenha');

console.log(usuario)

usuario.autentica('Diógenes', 'minhaSenha')