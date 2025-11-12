/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    ParseIntPipe
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UsuarioService } from './user.service'; // antes MapaService
import type { InfoUsuario } from './interfaces/tcc.interface';
import { HistoricoCheck, LoginCheck, RegisterCheck } from './data/mapa.entity';
import { PerguntaModel } from './models/pergunta.model';
import { HistoricoRespostasModel } from './models/historico_respostas.model';


@ApiTags('Usuário')
@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @ApiOperation({ summary: 'Registrar usuário' })
    @ApiBody({ type: RegisterCheck })
    @Post('registrar')
    async registrar(@Body() body: InfoUsuario): Promise<{ status: number; message: string; content: InfoUsuario | null }> {
        try {
            const usuario = await this.usuarioService.registrarUsuario(body);
            return {
                status: 200,
                message: 'Usuário registrado com sucesso',
                content: usuario,
            };
        } catch (err) {
            return {
                status: 400,
                message: 'Erro ao registrar usuário',
                content: null,
            };
        }
    }

    @ApiOperation({ summary: 'Login de usuário' })
    @ApiBody({ type: LoginCheck })
    @Post('login')
    async login(@Body() body: { usuario: string; senha: string }): Promise<{ status: number; message: string; content: InfoUsuario | null }> {
        const usuario = await this.usuarioService.login(body.usuario, body.senha);
        if (!usuario) {
            return {
                status: 401,
                message: 'Usuário ou senha incorretos',
                content: null,
            };
        }
        return {
            status: 200,
            message: 'Login realizado com sucesso',
            content: usuario,
        };
    }

   //
      @Get('perguntas')
  @ApiOperation({ summary: 'Retorna todas as perguntas cadastradas' })
  @ApiResponse({ status: 200, type: [PerguntaModel] })
  async listarPerguntas(): Promise<PerguntaModel[]> {
    return await this.usuarioService.getPerguntas();
  }

  @Get('tema/:id')
  @ApiOperation({ summary: 'Retorna perguntas filtradas por tema' })
  @ApiResponse({ status: 200, type: [PerguntaModel] })
  async listarPorTema(@Param('id', ParseIntPipe) id: number): Promise<PerguntaModel[]> {
    return await this.usuarioService.getPerguntasPorTema(id);
  }


   @Get('pergunta/:id')
  @ApiOperation({ summary: 'Lista alternativas de uma pergunta' })
  async listarPorPergunta(@Param('id') id: number) {
    return await this.usuarioService.listarPorPergunta(id);
  }
 

    @Get('blocos/:id')
  @ApiOperation({ summary: 'Lista blocos de resposta de uma pergunta' })
  async listarPorPerguntaBloco(@Param('id') id: number) {
    return await this.usuarioService.listarPorPerguntaBloco(id);
  }

    @Get('temas')
  @ApiOperation({ summary: 'Lista todos os temas de perguntas' })
  async listarTemas() {
    return await this.usuarioService.listarTemas();
  }


  @Get(':historico/usuario/:usuario')
  @ApiOperation({ summary: 'Lista o histórico de respostas de um usuário' })
  async listarPorUsuario(@Param('usuario') usuario: number) {
    return await this.usuarioService.listarPorUsuario(usuario);
  }

  @Post('historico/salvar')
  @ApiOperation({ summary: 'Salva uma nova resposta no histórico' })
  @ApiBody({ type: HistoricoCheck })
  async salvar(@Body() body: HistoricoCheck): Promise<HistoricoRespostasModel> {
    const info:HistoricoRespostasModel ={
        acertou: body.correta,
        data_resposta: new Date(),
        id:0,
        pergunta:body.pergunta ,
        resposta_enviada:body.resposta_usuario,
        usuario:body.usuario 
    }
     return await this.usuarioService.salvarHistorico(info);
  }
}
