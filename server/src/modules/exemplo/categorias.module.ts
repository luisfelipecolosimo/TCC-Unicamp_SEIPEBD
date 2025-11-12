/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { CategoriasController } from './categorias.controller';
//import { CategoriaService } from './categorias.service';
//import { CategoriaRepository } from './categorias.repository';
//import { CategoriaModel } from './models/categoria.model';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            // CategoriaModel
        ], "SOLUS_PROD"),
    ],
    // controllers: [CategoriasController],
    //  providers: [CategoriaService, CategoriaRepository],
})
export class CategoriasModule { }