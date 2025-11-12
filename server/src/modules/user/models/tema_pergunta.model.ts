/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tema_pergunta' })
export class TemaPerguntaModel {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_tema', type: 'int' })
  id: number;

  @ApiProperty()
  @Column({ name: 'nome_tema', type: 'varchar', length: 100 })
  nome: string;
}
