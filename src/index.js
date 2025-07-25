<<<<<<< HEAD
import "dotenv/config"

import express from "express"; // codigos necessarios 
import cors from "cors"; 
import produtosRouter from "./routers/produtosRouter.js"; // paro o index e mando rodar a partir do Router
import usuariosRouter from "./routers/usuariosRouter.js";

const server = express(); // cria o obj no servidor 
server.use(cors({origin:"*"})); //cria uma permissão p que qualquer origem pode acessar a minha API 
server.use(express.json()); //converte o que recebemos em json

const port = process.env.PORT||  3000; // a porta que eu estou usando, se ela não for achada no .env ela vai usar a porta 3000 

server.use(produtosRouter); // chama o produtosRouter, conecta ao servidor 
server.use(usuariosRouter);

server.listen(port, () => { // Inicia o servidor na porta definida e executa a função de callback assim que ele estiver rodando, se chamarem corretamente, com o metodo correto, ele responde conforme foi configurado 
    console.log(`Servidor executando na porta ${port}.`); // Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta
    console.log(`Acesse em: http://localhost:${port}.`); // Exibe a URL local que pode ser usada para acessar o servidor no navegador
});


//

// HTTP (GET, POST, PUT, DELETE)
// HTTP status
// - 200 Sucesso
// - 201 Salvo com sucesso
// - 400 Requisição Inválido
// - 401 Não autorizado 
// - 404 Não encontrado
=======
import "dotenv/config"

import express from "express"; // codigos necessarios 
import cors from "cors"; 
import produtosRouter from "./routers/produtosRouter.js"; // paro o index e mando rodar a partir do Router
import usuariosRouter from "./routers/usuariosRouter.js";

const server = express(); // cria o obj no servidor 
server.use(cors({origin:"*"})); //cria uma permissão p que qualquer origem pode acessar a minha API 
server.use(express.json()); //converte o que recebemos em json

const port = process.env.PORT||  3000; // a porta que eu estou usando, se ela não for achada no .env ela vai usar a porta 3000 

server.use(produtosRouter); // chama o produtosRouter, conecta ao servidor 
server.use(usuariosRouter);

server.listen(port, () => { // Inicia o servidor na porta definida e executa a função de callback assim que ele estiver rodando, se chamarem corretamente, com o metodo correto, ele responde conforme foi configurado 
    console.log(`Servidor executando na porta ${port}.`); // Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta
    console.log(`Acesse em: http://localhost:${port}.`); // Exibe a URL local que pode ser usada para acessar o servidor no navegador
});



// HTTP (GET, POST, PUT, DELETE)
// HTTP status
// - 200 Sucesso
// - 201 Salvo com sucesso
// - 400 Requisição Inválido
// - 401 Não autorizado 
// - 404 Não encontrado
>>>>>>> ed4675a6b792696649f4a55b838e4b38ce18368f
// - 500 Erro no servidor