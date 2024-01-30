import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso")
})

const app = express();
routes(app);

app.delete('/user/:id', (req, res) => {
  const index = buscarUser(req.params.id);
  users.splice(index, 1);
  res.status(200).json(users)
});



export default app;