/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TemaPerguntaModel } from './tema_pergunta.model';

@Entity({ name: 'pergunta' })
export class PerguntaModel {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_pergunta', type: 'int' })
  id: number;

  @ApiProperty()
  @ManyToOne(() => TemaPerguntaModel)
  @JoinColumn({ name: 'fk_tema' })
  tema: TemaPerguntaModel;

  @ApiProperty()
  @Column({ name: 'nivel_dificuldade', type: 'enum', enum: ['Fácil', 'Médio', 'Difícil'], default: 'Fácil' })
  nivel_dificuldade: 'Fácil' | 'Médio' | 'Difícil';

  @ApiProperty()
  @Column({ name: 'tipo_pergunta', type: 'enum', enum: ['MULTIPLA_ESCOLHA', 'BLOCOS'], default: 'MULTIPLA_ESCOLHA' })
  tipo_pergunta: 'MULTIPLA_ESCOLHA' | 'BLOCOS';

  @ApiProperty()
  @Column({ name: 'enunciado', type: 'text' })
  enunciado: string;

  @ApiProperty()
  @Column({ name: 'resposta_correta', type: 'text' })
  resposta_correta: string;

  @ApiProperty()
  @Column({ name: 'data_criacao', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;
}
