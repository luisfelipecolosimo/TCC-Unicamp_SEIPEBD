/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'score' })
export class ScoreModel {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_score', type: 'int' })
  id: number;

    @ApiProperty()
  @Column({ name: 'id_usuario', type: 'int', default: 0 })
  id_usuario: number;

  @ApiProperty()
  @Column({ name: 'pontuacao', type: 'int', default: 0 })
  pontuacao: number;

  @ApiProperty()
  @Column({ name: 'nivel_atingido', type: 'enum', enum: ['Fácil', 'Médio', 'Difícil'], default: 'Fácil' })
  nivel_atingido: 'Fácil' | 'Médio' | 'Difícil';

  @ApiProperty()
  @Column({ name: 'data_score', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_score: Date;
}
