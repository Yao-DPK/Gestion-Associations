import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('v1');
  app.use(helmet());
  const config = new DocumentBuilder()
    .setTitle('Gestion des Associations')
    .setDescription('Descriptions des APIs de la gestion des associations')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  // Enable CORS and allow the frontend origin
  app.enableCors({
    origin: 'http://localhost:4201', // Frontend origin in Docker
    methods: 'GET,HEAD,POST,PUT,DELETE,PATCH,OPTIONS',
    credentials: true, // Allow cookies, if needed
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
