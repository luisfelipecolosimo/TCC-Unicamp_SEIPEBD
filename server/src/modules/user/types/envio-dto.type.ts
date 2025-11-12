/* eslint-disable prettier/prettier */


import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class EnviosDto {

    @ApiProperty({ type: Number })
    nnumeenvio?: number;

    @ApiPropertyOptional({ type: String })
    cnomepessoa?: string;

    @ApiPropertyOptional({ type: String })
    ctelefone?: string;

    @ApiPropertyOptional({ type: String })
    cstatus?: string;

    @ApiPropertyOptional({ type: String })
    cobservacao?: string;

    @ApiPropertyOptional({ type: Number })
    nnumeprocesso?: number;

}
