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


@Injectable()
export class UsuarioRepository {
    constructor(
        @InjectRepository(UsuarioModel, "MYSQL_CONNECTION")
        private usuarioRepository: Repository<UsuarioModel>,
        @InjectRepository(PerguntaModel, "MYSQL_CONNECTION")
        private  perguntaRepository: Repository<PerguntaModel>,
        @InjectRepository(AlternativaModel, "MYSQL_CONNECTION")
        private alternativaModel: Repository<AlternativaModel>,
        @InjectRepository(BlocoRespostaModel, "MYSQL_CONNECTION")
        private  blocoRespostaModel: Repository<BlocoRespostaModel>,
        @InjectRepository(TemaPerguntaModel, "MYSQL_CONNECTION")
        private temaPerguntaModel: Repository<TemaPerguntaModel>,
        @InjectRepository(HistoricoRespostasModel, "MYSQL_CONNECTION")
        private  historicoRespostasModel: Repository<HistoricoRespostasModel>,
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
        const senhaMd5 = md5(senha);
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

}
