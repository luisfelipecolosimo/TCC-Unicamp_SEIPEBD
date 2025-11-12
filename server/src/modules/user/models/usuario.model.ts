/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class UsuarioModel {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ length: 45 })
    nome: string;

    @Column({ length: 45 })
    sobrenome: string;

    @Column({ length: 45 })
    usuario: string;

    @Column({ length: 100 })
    senha: string;

    @Column()
    data_nascimento: string;

    @Column({ default: 1 })
    tipo: number;

    @Column({ default: 1 })
    status: number;

    @Column({ nullable: true })
    data_inativacao?: string;
}
