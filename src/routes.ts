import { Router, request, response, Request, Response } from "express";
import { getUsers } from "./controller/UserController";
const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "É 13 PORRA!!!" });
});
routes.get("/home", (request: Request, response: Response) => {
  return response.json({ message: "É 13 PORRA!!!" });
});

routes.get("/users", getUsers);

export default routes;
