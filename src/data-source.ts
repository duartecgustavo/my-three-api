import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuarios } from "./entity/User";
import { Arvores } from "./entity/Tree";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "suleiman.db.elephantsql.com",
  port: 5432,
  username: "kczvwzxn",
  password: "mtyA_mrcbEW9lx-zpMKTWT_gEA6XRQgB",
  database: "kczvwzxn",
  synchronize: true,
  logging: false,
  entities: [Usuarios, Arvores],
  migrations: [],
  subscribers: [],
});
