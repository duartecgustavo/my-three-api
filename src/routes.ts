import { Router, request, response, Request, Response } from "express";
import { getUser, getUsers, createUsers, updateUser, deleteUser } from "./controller/UserController";
const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "É 13 PORRA!!!" });
});
routes.get("/home", (request: Request, response: Response) => {
  return response.json({ message: "É 13 PORRA!!!" });
});

routes.get("/users", getUsers);

routes.post("/users", createUsers);

routes.get("/users/:id", getUser);

routes.put("/users/:id", updateUser);

routes.delete("/users/:id", deleteUser);

export default routes;
