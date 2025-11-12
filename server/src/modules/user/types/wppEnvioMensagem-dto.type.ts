/* eslint-disable prettier/prettier */


import { ApiPropertyOptional } from '@nestjs/swagger';


export class WppEnvioMensagemDto {

    @ApiPropertyOptional({ type: Number })
    telefone?: number;

    @ApiPropertyOptional({ type: String })
    dia_ultil?: string;

    @ApiPropertyOptional({ type: String })
    tipoenvio?: string;

    @ApiPropertyOptional({ type: String })
    origem?: string;

    @ApiPropertyOptional({ type: Number })
    quantidade_tentativas?: number;

    @ApiPropertyOptional({ type: String })
    necessita_resposta?: string;

    @ApiPropertyOptional({ type: String })
    template?: string;

    @ApiPropertyOptional({ type: String })
    conteudo?: string;

}
