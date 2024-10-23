import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
import multipart from 'fastify-multipart';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.register(fastifyStatic, {
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  app.register(multipart);

  const config = new DocumentBuilder()
    .setTitle('Contract API')
    .setDescription('API para gerenciamento de contratos e arquivos no Azure')
    .setVersion('1.0')
    .addTag('contracts')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}
bootstrap();
