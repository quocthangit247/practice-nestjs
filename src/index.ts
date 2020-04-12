import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);

  await app.listen(process.env.PORT);
}

bootstrap();
