/* eslint-disable prettier/prettier */
import 'reflect-metadata';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';

export const DATABASE = async (): Promise<DynamicModule> =>
    TypeOrmModule.forRootAsync({
        name: 'MYSQL_CONNECTION',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get<string>('MYSQL_HOST'),
           port: Number(configService.get<string>('MYSQL_PORT') ?? 3306),
            username: configService.get<string>('MYSQL_USER'),
            password: configService.get<string>('MYSQL_PASSWORD'),
            database: configService.get<string>('MYSQL_DATABASE'),

            // Se estiver apenas lendo dados deixe false
            synchronize: false,

            autoLoadEntities: true,

            // logs
            logging: configService.get<string>('MYSQL_LOG') === 'true',
        }),
    });
