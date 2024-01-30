import  express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/user", UserController.listarUsers);
routes.get("/user/:id", UserController.listarUserId);
routes.post("/user", UserController.cadastrarUser);
routes.put("/user/:id", UserController.atualizarUser);
routes.delete("/user/:id", UserController.deletarUser);

export default routes;