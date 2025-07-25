import express from "express";
import app from "../firebase/app.js"; // paro o Router e inicio o App 
import { getFirestore } from "firebase-admin/firestore"; // importa o fire
import { findAll } from "../services/produtosService.js";

const produtosRouter = express.Router();
// Busca por todos os produtos 
const db = getFirestore(app); // utiliza o app para iniciar a instancia do BD, faz a conecção cm qualquer função

produtosRouter.get("/produtos", async (req, res) => { // consulta todos itens do banco, confere e retorna a lista
    try { // executar todo processo p trazer a lista 
        const produtos = await findAll // importo do prosutosService, mas ele tbem é assincrono então preciso esperar
        return res.status(200).json(produtos); //retorna a lista 
    } catch (error) { // se o try der erro ele cai aqui 
        return res.status(500).json({ msg: "Erro interno no servidor" });

    }
});


// Consultando um item específico pelo id
produtosRouter.get("/produtos/:id", async (req, res) => { // consulta produto por id
    try { // executar todo processo p trazer a lista
        const id = req.params.id;
        const doc = await db.collection("produtos").doc(id).get(); // o Doc.id - especifica qual documento eu quero pegar(get). e não mais uma lista / collection retorna collectionReferenci
        if (doc.exists) {// como só quero 1 documento, não preciso do ForEach, uso IF ELSE       
            res.status(200).json(produto); // retorna o que eu pedi 
        } else {
            res.status(404).json({ msg: 'Produto não encontrado!' }); // se não encontrar, aparece essa mensagem
        }
    } catch (error) { // se o try der erro ele cai aqui 
        return res.status(500).json({ msg: "Erro interno no servidor" });

    }
});

// Adicionar um novo documento
produtosRouter.post("/produtos", async (req, res) => { // MESMA ROTA 
    try { // executar todo processo p trazer a lista
        const produto = req.body; //objetos do corpo da requisição
        await db.collection("produtos").add(produto); // especifico o que eu quero e chamo o ADD para adicionar a uma coleção 
        return res.status(201).json({ msg: "Produto Cadastrado" }); // Resposta que estou enviando 
    } catch (error) { // se o try der erro ele cai aqui 
        return res.status(500).json({ msg: "Erro interno no servidor" });

    }
});


// Atualizar um produto
produtosRouter.put("/produtos/:id", async (req, res) => {
    try { // executar todo processo p trazer a lista
        const id = req.params.id; // pega o ID da rota
        const produto = req.body; // pega os dados enviados no corpo da requisição

        const docRef = db.collection("produtos").doc(id); // guardo a referência ao documento - não tem conecção com o banco de dados. (posso usar  a referencia tanto p consultar e p alterar )
        const doc = await docRef.get(); // busca o documento p consultar pq foi até o banco e pegou 

        if (doc.exists) {
            await docRef.update(produto); // atualiza se existir
            return res.status(200).json({ msg: "Produto alterado." });
        } else {
            return res.status(404).json({ msg: "Produto não encontrado." });
        }

    } catch (error) { // se o try der erro ele cai aqui 
        return res.status(500).json({ msg: "Erro interno no servidor" });

    }
});


//Deletar um produto por ID
produtosRouter.delete("/produtos/:id", async (req, res) => {
    try { // executar todo processo p trazer a lista
        const id = req.params.id;
        const docRef = db.collection("produtos").doc(id); // guardei a referencia do obj
        const doc = await docRef.get(); // consulto 
        if (doc.exists) { // se existir vai apagar, se não existir vai para o erro
            await docRef.delete(); // excluo se o documento for encontrado, eu não preciso passar parametro no delet pq ja informei que quero deletar o ID 

        } else {
            return res.status(404).json({ msg: "Produto não encontrado." });
        }

        return res.status(200).json({ msg: "Produto deletado" })

    } catch (error) { // se o try der erro ele cai aqui 
        return res.status(500).json({ msg: "Erro interno no servidor" });

    }
})

export default produtosRouter; // acabou o fluxo do router e chama o index de volta 
