/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import DatabaseModule from './common/database/db.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath: '/opt/oracle/.env',
      isGlobal: true
    }),
     DatabaseModule, HttpModule, UserModule
  ],
  providers: [],
})
export class AppModule { }