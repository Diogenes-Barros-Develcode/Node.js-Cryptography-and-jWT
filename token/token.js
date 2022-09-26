import jwt from 'jsonwebtoken';

const chaveSecreta = 'chaveSuperSecreta';

const token = jwt.sign(
    {
        apelido: "dió",
        curso: 'segurança e node.js'
    },
    chaveSecreta
);

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);