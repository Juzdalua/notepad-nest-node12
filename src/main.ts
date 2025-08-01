import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Debug from 'debug';
import { basename } from 'path';
import * as bcrypt from 'bcrypt'

const debug = Debug(`app:${basename(__dirname)}:${basename(__filename)}`);
console.log(`app:${basename(__dirname)}:${basename(__filename)}`)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  debug(123)
  
  const pwd = await bcrypt.hash('78xhdtls@', 10);
  console.log(pwd)
}
bootstrap();
