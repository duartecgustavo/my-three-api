import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Arvores } from "./Tree";

@Entity()
export class Usuarios {
  static findOne(id: any) {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  phone_number: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @OneToMany(() => Arvores, (arvore) => arvore.usuario)
  arvores: Arvores[];
}
