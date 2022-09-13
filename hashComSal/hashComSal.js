import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`;
}

class Usuario{
    constructor(nome,senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    }

    autentica(nome, senha){
        if(nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hasReal = Buffer.from(this.hash, 'hex');
            const hashesCorrespondem = timingSafeEqual(testeHash, hasReal)

            if(hashesCorrespondem){
                console.log("Usuário atenticado com sucesso!")
                return true;
            }
        }
        console.log("Usuário ou senha incorreta.")
        return false;
    }
}

const usuario = new Usuario('Diógenes', 'minhaSenha');

console.log(usuario);

usuario.autentica('Diógenes', 'minhaSenha');