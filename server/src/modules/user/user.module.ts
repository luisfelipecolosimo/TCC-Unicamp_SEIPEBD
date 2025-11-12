/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './user.controller';
import { UsuarioRepository } from './user.repository';
import { UsuarioService } from './user.service';

import { HttpModule } from '@nestjs/axios';
import { UsuarioModel } from './models/usuario.model';
import { TemaPerguntaModel } from './models/tema_pergunta.model';
import { PerguntaModel } from './models/pergunta.model';
import { AlternativaModel } from './models/alternativa.model';
import { BlocoRespostaModel } from './models/bloco_resposta.model';
import { ComentarioModel } from './models/comentario.model';
import { ScoreModel } from './models/score.model';
import { HistoricoRespostasModel } from './models/historico_respostas.model';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UsuarioModel,
        TemaPerguntaModel,
        PerguntaModel,
        AlternativaModel,
        BlocoRespostaModel,
        ComentarioModel,
        ScoreModel,
        HistoricoRespostasModel,
      ],
      'MYSQL_CONNECTION',
    ),
    HttpModule,
  ],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, UsuarioService],
    exports: [UsuarioService],
})
export class UserModule {}
