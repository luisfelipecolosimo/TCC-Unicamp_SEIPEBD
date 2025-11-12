/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'MAPA_CIRURGICO_NOTIFICACAO', schema: 'CUSTOMTASY' })
export class NotificacaoModel {
    @ApiProperty()
    @PrimaryColumn({ name: 'N_NUMENOTIFICACAO', type: 'int' })
    id: number;

    @ApiProperty()
    @Column({ name: 'D_DATAINCLUSAO', type: 'date' })
    inclusao: string;

    @ApiProperty()
    @Column({ name: 'D_DATAREFERENTE', type: 'date' })
    data_referente: Date;

    @ApiProperty()
    @Column({ name: 'C_TEXTO', type: 'varchar', length: 400 })
    texto: string;

    @ApiProperty()
    @Column({ name: 'C_TIPO', type: 'int' })
    tipo: number;


}
