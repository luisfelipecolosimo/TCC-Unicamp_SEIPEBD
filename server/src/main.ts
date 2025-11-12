/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
  });

  app
    .use(cookieParser())
    .useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
      }),
    )
    .setGlobalPrefix('tcc/api')
    .enableCors({
      origin: true,
      credentials: true,
    });

  const config = new DocumentBuilder()
    .setTitle('TCC')
    .setDescription('API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const documentacao = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('tcc/api/swagger', app, documentacao);

  await app.listen(9900, '0.0.0.0');
}

bootstrap();
