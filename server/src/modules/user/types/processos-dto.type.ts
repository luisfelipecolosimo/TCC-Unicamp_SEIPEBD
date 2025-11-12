/* eslint-disable prettier/prettier */


import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class ProcessoDto {

    @ApiProperty({ type: Number })
    nnumeprocesso?: number;

    @ApiPropertyOptional({ type: String })
    cnomecriador?: string;

    @ApiPropertyOptional({ type: String })
    ddatacriacao?: string;

    @ApiPropertyOptional({ type: String })
    ddataenvio?: string;

    @ApiPropertyOptional({ type: String })
    dperiodoinicio?: string;

    @ApiPropertyOptional({ type: String })
    dperiodofim?: string;

}
