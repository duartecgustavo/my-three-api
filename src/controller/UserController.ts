import { AppDataSource } from "../data-source"
import { Usuarios } from "../entity/User"
import {Request, Response, response } from "express";

const repository = AppDataSource.getRepository(Usuarios);

export const getUsers = async (req: Request, res: Response) => {
    const users = await repository.find();
    return res.json(users);
}