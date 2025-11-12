/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATABASE  } from "./db.bases";

@Module({
    imports: [
        DATABASE ()
    ],
    exports: [TypeOrmModule]
})
export default class DatabaseModule { }