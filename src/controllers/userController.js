import user from "../models/User.js";

class UserController {
  static async listarUsers(req, res) {
    try{
      const listaUsers = await user.find({})
      res.status(200).json(listaUsers);

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao requisitar usuarios`})
    }
  };
  static async listarUserId(req, res) {
    try{
      const id = req.params.id;
      const listaUser = await user.findById(id);
      res.status(200).json(listaUser);

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao requisitar usuario`})
    }
  };
  static async cadastrarUser(req, res) {
    try {
      const novoUser = await user.create(req.body)
      res.status(201).json({ message: "criado com sucesso", user: novoUser })
    }
    catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar usuario`})
    }
  };
  static async atualizarUser(req, res) {
    try{
      const id = req.params.id;
      await user.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "User Atualizado"});

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao atualizar usuario`})
    }
  };
  static async deletarUser(req, res) {
    try{
      const id = req.params.id;
      await user.findByIdAndDelete(id);
      res.status(200).json({message: "User Deletado"});

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao deletar usuario`})
    }
  };
};

export default UserController;