/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'MAPA_CIRURGICO_WEB_V', schema: 'CUSTOMTASY' })
export class MapaModel {
    @ApiProperty()
    @Column({ name: 'HORA', type: 'varchar', length: 150 })
    hora: string;

    @ApiProperty()
    @PrimaryColumn({ name: 'GUIA', type: 'varchar', length: 150 })
    guia: string;

    @ApiProperty()
    @Column({ name: 'VALIDADE', type: 'date' })
    validade?: string;

    @ApiProperty()
    @Column({ name: 'CIRURGIA', type: 'varchar', length: 400 })
    cirurgia: string;

    @ApiProperty()
    @Column({ name: 'CARTEIRINHA', type: 'varchar', length: 150 })
    carteirinha: string;

    @ApiProperty()
    @Column({ name: 'PACIENTE', type: 'varchar', length: 400 })
    paciente: string;

    @ApiProperty()
    @Column({ name: 'IDADE', type: 'varchar', length: 400 })
    idade: string;

    @ApiProperty()
    @Column({ name: 'DATA_NASCI', type: 'varchar', length: 400 })
    data_nascimento: string;

    @ApiProperty()
    @Column({ name: 'TELEFONE', type: 'varchar', length: 400 })
    telefone: string;

    @ApiProperty()
    @Column({ name: 'CONVENIO', type: 'varchar', length: 400 })
    convenio: string;

    @ApiProperty()
    @Column({ name: 'MEDICO', type: 'varchar', length: 400 })
    medico: string;

    @ApiProperty()
    @Column({ name: 'OBSERVACAO', type: 'varchar', length: 400 })
    observacao?: string;

    @ApiProperty()
    @Column({ name: 'DATA_AGENDA', type: 'varchar', length: 400 })
    data_agenda: Date;


}
