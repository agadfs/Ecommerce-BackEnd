import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId},
  nome: { type: String },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cartao1: { type: String },
  cartao2: { type: String },
  cpf: { type: String },
  enderecocasa: { type: String },
  enderecoestado: { type: String },
  enderecopais: { type: String },
  metpagamento: { type: String },
  pix: { type: String }
}, { versionKey: false});

const user = mongoose.model("Users", userSchema);

export default user;