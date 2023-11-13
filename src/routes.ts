import { Router, request, response, Request, Response } from "express";
import {
  getUser,
  getUsers,
  createUsers,
  updateUser,
  deleteUser,
  createTree,
  getTreeCount
} from "./controller/UserController";
const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});
routes.get("/home", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});

routes.get("/users", getUsers);

routes.post("/users", createUsers);

routes.get("/users/:id", getUser);

routes.put("/users/:id", updateUser);

routes.delete("/users/:id", deleteUser);

routes.post("/tree", createTree);

routes.get("/tree/:id", getTreeCount);

export default routes;
