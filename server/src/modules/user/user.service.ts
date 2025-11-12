/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsuarioRepository } from "./user.repository";
import { InfoUsuario } from "./interfaces/tcc.interface";
import md5 from "md5";
import { PerguntaModel } from "./models/pergunta.model";
import { HistoricoRespostasModel } from "./models/historico_respostas.model";

@Injectable()
export class UsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository,
        private readonly perguntaRepository: UsuarioRepository
    ) {}

    /**
     * Registrar novo usuário
     */
    async registrarUsuario(dados: InfoUsuario): Promise<InfoUsuario> {
        if (!dados.senha) {
            throw new Error("Senha obrigatória");
        }

        // Criptografa antes de mandar para o repositório
        const senhaHash = md5(dados.senha);

        const usuarioCriado = await this.usuarioRepository.registraUsuario({
            ...dados,
            senha: senhaHash,
        });

        return usuarioCriado;
    }

    /**
     * Login do usuário
     */
    async login(usuario: string, senha: string): Promise<InfoUsuario | null> {
        const senhaHash = md5(senha);

        const usuarioEncontrado = await this.usuarioRepository.login(
            usuario, 
            senhaHash
        );

        // se não encontrou, retorna null
        if (!usuarioEncontrado) {
            return null;
        }

        return usuarioEncontrado;
    }


      async getPerguntas(): Promise<PerguntaModel[]> {
    return await this.perguntaRepository.listarPerguntas();
  }

  async getPerguntasPorTema(idTema: number): Promise<PerguntaModel[]> {
    return await this.perguntaRepository.listarPorTema(idTema);
  }

    async listarPorPergunta(idPergunta: number) {
    return await this.usuarioRepository.listarPorPergunta(idPergunta);
  }

  
  async listarPorPerguntaBloco(idPergunta: number) {
    return await this.usuarioRepository.listarPorPerguntaBloco(idPergunta);
  }


  async listarTemas() {
    return await this.usuarioRepository.listarTodos();
  }

  
    async salvarHistorico(dados: Partial<HistoricoRespostasModel>) {
    return await this.usuarioRepository.salvar(dados);
  }

  async listarPorUsuario(idUsuario: number) {
    return await this.usuarioRepository.listarPorUsuario(idUsuario);
  }
}
