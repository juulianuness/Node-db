import express from "express";
import {
  findAll,
  findById,
  remove,
  save, 
  update
} from "../services/usuariosService.js";

const usuariosRouter = express.Router();

usuariosRouter.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
  }
});

usuariosRouter.get("/usuarios/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await findById(id);
    if (usuario) {
      return res.status(200).json(usuario);
    } else {
      return res.status(404).json({ msg: "Usuário não encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
  }
});

usuariosRouter.post("/usuarios", async (req, res) => {
  try {
    const usuario = req.body;
    await save(usuario);
    return res.status(201).json({ msg: "Usuário cadastrado." });
  } catch (error) {
    return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
  }
});

usuariosRouter.put("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = req.body;
        const flag = await update(id, usuario);        
        if (flag) {
            return res.status(200).json({ msg: "Usuário atualizado." });
        } else {
            return res.status(404).json({ msg: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
    }
});

usuariosRouter.delete("/usuarios/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const flag = await remove(id);

    if (flag) {
      return res.status(200).json({ msg: "Usuário excluído." });
    } else {
      return res.status(404).json({ msg: "Usuário não encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
  }
});

export default usuariosRouter;

// Crie as funcionalidades necessárias para gestão de usuários no sistema de estoque.
// Para isso construa os pontos de extreminidades listados abaixo no projeto.

// GET /usuarios
// Deve retornar todos os usuários cadastrados.

// GET /usuarios/:id
// Deve retornar um único usuário pelo id.

// POST /usuarios
// Deve criar um novo usuário com nome, email, idade.

// PUT /usuarios/:id
// Deve atualizar as informações de um usuário com base no id.

// DELETE /usuarios/:id
// Deve remover um usuário pelo id.