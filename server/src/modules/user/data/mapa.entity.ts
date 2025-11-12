/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber, IsBoolean } from "class-validator";

/** DTO para Login */
export class LoginCheck {
    @IsString()
    @ApiProperty({ example: "luis.colosimo", description: "Nome de usuário para login" })
    public usuario: string;

    @IsString()
    @ApiProperty({ example: "123456", description: "Senha do usuário" })
    public senha: string;
}

/** DTO para Registro */
export class RegisterCheck {
    @IsString()
    @ApiProperty({ example: "Luis", description: "Nome do usuário" })
    public nome: string;

    @IsString()
    @ApiProperty({ example: "Colosimo", description: "Sobrenome do usuário" })
    public sobrenome: string;

    @IsString()
    @ApiProperty({ example: "luis.colosimo", description: "Usuário de login" })
    public usuario: string;

    @IsString()
    @ApiProperty({ example: "123456", description: "Senha do usuário" })
    public senha: string;

    @IsString()
    @ApiProperty({ example: "1995-07-02", description: "Data de nascimento (YYYY-MM-DD)" })
    public data_nascimento: string;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ example: 1, description: "Tipo do usuário (1=admin, 2=usuário comum)", required: false })
    public tipo?: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ example: 1, description: "Status do usuário (1=ativo, 0=inativo)", required: false })
    public status?: number;
}

export class HistoricoCheck {
  @IsNumber()
  usuario: number;

  @IsNumber()
  pergunta: number;

  @IsString()
  resposta_usuario: string;

  @IsBoolean()
  correta: boolean;
}
