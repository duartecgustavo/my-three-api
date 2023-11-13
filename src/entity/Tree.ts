import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Usuarios } from "./User";

@Entity()
export class Arvores {
  static create(arg0: { especie: any; foto: any; localPlantio: any; usuario: { id: any; }; dataPlantio: any; }) {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  especie: string;

  @Column()
  foto: string;

  @Column()
  localPlantio: string;

  @ManyToOne(() => Usuarios, (usuario) => usuario.arvores)
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuarios;

  @CreateDateColumn({ type: "timestamp" })
  dataPlantio: Date;
}
