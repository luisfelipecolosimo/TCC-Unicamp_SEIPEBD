/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PerguntaModel } from './pergunta.model';

@Entity({ name: 'alternativa' })
export class AlternativaModel {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_alternativa', type: 'int' })
  id: number;

  @ApiProperty()
  @ManyToOne(() => PerguntaModel)
  @JoinColumn({ name: 'id_pergunta' })
  pergunta: PerguntaModel;

  @ApiProperty()
  @Column({ name: 'texto_alternativa', type: 'varchar', length: 255 })
  texto: string;

  @ApiProperty()
  @Column({ name: 'letra', type: 'char', length: 1 })
  letra: string;
}
