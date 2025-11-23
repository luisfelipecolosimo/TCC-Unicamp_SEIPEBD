/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsuarioModel } from "./models/usuario.model";
import { InfoUsuario } from "./interfaces/tcc.interface";
import { PerguntaModel } from './models/pergunta.model';
import md5 from "md5";
import { AlternativaModel } from "./models/alternativa.model";
import { BlocoRespostaModel } from "./models/bloco_resposta.model";
import { TemaPerguntaModel } from "./models/tema_pergunta.model";
import { HistoricoRespostasModel } from "./models/historico_respostas.model";
import { ScoreModel } from "./models/score.model";
import { ComentarioModel } from "./models/comentario.model";


@Injectable()
export class UsuarioRepository {
    constructor(
        @InjectRepository(AlternativaModel, "MYSQL_CONNECTION")
        private alternativaModel: Repository<AlternativaModel>,
        @InjectRepository(BlocoRespostaModel, "MYSQL_CONNECTION")
        private  blocoRespostaModel: Repository<BlocoRespostaModel>,
        @InjectRepository(ComentarioModel, "MYSQL_CONNECTION")
        private  comentarioModel: Repository<ComentarioModel>,
        @InjectRepository(UsuarioModel, "MYSQL_CONNECTION")
        private usuarioRepository: Repository<UsuarioModel>,
        @InjectRepository(PerguntaModel, "MYSQL_CONNECTION")
        private  perguntaRepository: Repository<PerguntaModel>,
        @InjectRepository(TemaPerguntaModel, "MYSQL_CONNECTION")
        private temaPerguntaModel: Repository<TemaPerguntaModel>,
        @InjectRepository(HistoricoRespostasModel, "MYSQL_CONNECTION")
        private  historicoRespostasModel: Repository<HistoricoRespostasModel>,
        @InjectRepository(ScoreModel, "MYSQL_CONNECTION")
        private  scoreModel: Repository<ScoreModel>,
        
    ) { }

    /**
     * Registro de usuário
     * @param dados Usuário a ser cadastrado
     */
  async registraUsuario(dados: InfoUsuario): Promise<UsuarioModel> {
    // Verifica se já existe usuário com o mesmo login
    const usuarioExistente = await this.usuarioRepository.findOne({
        where: { usuario: dados.usuario }
    });

    if (usuarioExistente) {
        throw new Error("Usuário já existe. Escolha outro nome.");
    }

    const info: UsuarioModel = {
        id_usuario: 0,
        data_inativacao: '',
        data_nascimento: dados.data_nascimento,
        nome: dados.nome,
        sobrenome: dados.sobrenome,
        status: dados.status ?? 1,
        tipo: dados.tipo ?? 1,
        usuario: dados.usuario,
        senha: md5(dados.senha), // criptografa a senha
    };

    const userEntity = this.usuarioRepository.create(info);
    const novoUser = await this.usuarioRepository.save(userEntity);
    return novoUser;
}
    /**
     * Login de usuário
     * @param usuario Login do usuário
     * @param senha Senha em texto plano
     */
    async login(usuario: string, senha: string): Promise<UsuarioModel | null> {
      console.log("Tentando login para usuário:", usuario);
        const senhaMd5 = md5(senha);
        console.log("Senha MD5 gerada:", senhaMd5);
        const user = await this.usuarioRepository.findOne({
            where: {
                usuario,
                senha: senhaMd5,
            },
        });
        return user ?? null;
    }

     async listarPerguntas(): Promise<PerguntaModel[]> {
    return await this.perguntaRepository.find({
      relations: ['tema'],
      order: { id: 'ASC' },
    });
  }

  async listarPorTema(idTema: number): Promise<PerguntaModel[]> {
    return await this.perguntaRepository.find({
      where: { tema: { id: idTema } },
      relations: ['tema'],
    });
  }
    async RetornaPergunta(id: number): Promise<PerguntaModel[]> {
    return await this.perguntaRepository.find({
      where: { id: id },
    });
  }

    async listarPorPergunta(idPergunta: number): Promise<AlternativaModel[]> {
    return await this.alternativaModel.find({
      where: { pergunta: { id: idPergunta } },
     // relations: ['pergunta'],
    });
  }

    async listarPorPerguntaBloco(idPergunta: number): Promise<BlocoRespostaModel[]> {
    return await this.blocoRespostaModel.find({
      where: { id_pergunta: idPergunta },
       
    });
  }

  async listarTodos(): Promise<TemaPerguntaModel[]> {
    return await this.temaPerguntaModel.find();
  }


   async salvar(historico: Partial<HistoricoRespostasModel>): Promise<HistoricoRespostasModel> {
    const novo = this.historicoRespostasModel.create(historico);
    return await this.historicoRespostasModel.save(novo);
  }

  async listarPorUsuario(idUsuario: number): Promise<HistoricoRespostasModel[]> {
    return await this.historicoRespostasModel.find({
      where: { usuario: idUsuario },
      relations: ['usuario', 'pergunta'],
      order: { data_resposta: 'DESC' },
    });
  }

  async buscarPerguntaUnica(id: number) {
  return await this.perguntaRepository.findOne({
    where: { id },
    relations: ['tema']
  });
}
async buscarProximaPergunta(id: number) {
  return await this.perguntaRepository.findOne({
    where: { id: id + 1 }
  });
}

async incrementarScore(usuario: number, pontos: number) {
  await this.scoreModel.increment({ id_usuario: usuario }, "pontuacao", pontos);
  return await this.scoreModel.findOne({ where: { id_usuario: usuario } });
}


}
