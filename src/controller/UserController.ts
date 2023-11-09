import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/User";
import { Request, Response, response } from "express";

const repository = AppDataSource.getRepository(Usuarios);

export const getUsers = async (req: Request, res: Response) => {
  const users = await repository.find();
  return res.json(users);
};
export const createUsers = async (req: Request, res: Response) => {
  const user = await repository.save(req.body);
  return res.json(user);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await repository.findOneBy({ id: parseInt(id) });
  return res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await repository.update(id, req.body);

  if (user.affected == 1) {
    const userUpdated = await repository.findOneBy({ id: parseInt(id) });
    return res.json(userUpdated);
  } else {
    return res.status(404).json({message: "Usuario não existe"});
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await repository.delete(id);

  if (user.affected == 1) {
    return res.status(200).json({message: "Usuario excluido com sucesso"});
  } else {
    return res.status(404).json({message: "Usuario não existe"});
  }

  return res.json(user);
};
