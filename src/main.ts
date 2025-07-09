import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//root of file / entry point of nest js application


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // here we configure if any global setting is required like environment variable etc.

  // starts http server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
