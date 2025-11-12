/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UsuarioModel } from './usuario.model';
import { PerguntaModel } from './pergunta.model';

@Entity({ name: 'historico_respostas' })
export class HistoricoRespostasModel {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_historico', type: 'int' })
  id: number;

  @ApiProperty()
  @ManyToOne(() => UsuarioModel)
  @JoinColumn({ name: 'id_usuario' })
  usuario: number;

  @ApiProperty()
  @ManyToOne(() => PerguntaModel)
  @JoinColumn({ name: 'id_pergunta' })
  pergunta: number;

  @ApiProperty()
  @Column({ name: 'resposta_enviada', type: 'text' })
  resposta_enviada: string;

  @ApiProperty()
  @Column({ name: 'acertou', type: 'boolean' })
  acertou: boolean;

  @ApiProperty()
  @Column({ name: 'data_resposta', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_resposta: Date;
}
