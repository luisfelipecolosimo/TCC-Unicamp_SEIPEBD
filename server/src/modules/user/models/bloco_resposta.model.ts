/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bloco_resposta' })
export class BlocoRespostaModel {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_bloco', type: 'int' })
  id: number;

  @ApiProperty()
  @Column({ name: 'id_pergunta', type: 'int', default: 0 })
  id_pergunta: number;

  @ApiProperty()
  @Column({ name: 'texto_bloco', type: 'varchar', length: 100 })
  texto: string;
}
