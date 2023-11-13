import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Usuarios } from "../entity/User";
import { Arvores } from "../entity/Tree";

const repository = AppDataSource.getRepository(Usuarios);
const repositoryTree = AppDataSource.getRepository(Arvores);

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
    return res.status(404).json({ message: "Usuario não existe" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await repository.delete(id);

  if (user.affected == 1) {
    return res.status(200).json({ message: "Usuario excluido com sucesso" });
  } else {
    return res.status(404).json({ message: "Usuario não existe" });
  }

  return res.json(user);
};

export const createTree = async (req: Request, res: Response) => {
  try {
    const treeData = req.body;

    const savedTree = await repositoryTree.save(treeData);

    return res.json(savedTree);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const getTreeCount = async (req: Request, res: Response) => {
  try {
    const idUser = req.params.id;

    if (!idUser) {
      return res.status(400).json({ message: "Parâmetro idUser ausente ou inválido" });
    }

    const userId = parseInt(idUser, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ message: "O idUser deve ser um número válido" });
    }

    const usuario = await repository.findOneBy({id: userId});

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const treeCount = await repositoryTree.count({ where: { usuario: { id: usuario.id } } });

    return res.json({ treeCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

