/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PerguntaModel } from './pergunta.model';

@Entity({ name: 'comentario' })
export class ComentarioModel {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_comentario', type: 'int' })
  id: number;

  @ApiProperty()
  @ManyToOne(() => PerguntaModel)
  @JoinColumn({ name: 'id_pergunta' })
  pergunta: PerguntaModel;

  @ApiProperty()
  @Column({ name: 'texto_comentario', type: 'text' })
  texto: string;
}
