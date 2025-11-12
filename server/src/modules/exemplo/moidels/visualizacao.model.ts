/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'MAPA_CIRURGICO_NOTIFICACAO_VISUALIZACAO', schema: 'CUSTOMTASY' })
export class VisualizacaoaModel {
    @ApiProperty()
    @PrimaryColumn({ name: 'N_NUMEVISU', type: 'int' })
    id?: number;

    @ApiProperty()
    @Column({ name: 'D_DATASIENTE', type: 'date' })
    data_siente: Date;

    @ApiProperty()
    @Column({ name: 'N_NUMEUSUA', type: 'int' })
    usuario: number;

    @ApiProperty()
    @Column({ name: 'N_NUMENOTIFICACAO', type: 'int' })
    notificacao: number;


}
