import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CreateAccountController } from './controllers/create-account-controller';
import { envSchema } from './env';
import { PrismaService } from './prisma/prisma-service';
import { AuthModule } from './auth/auth';
import { AuthenticateController } from './controllers/authenticate-user-controller';

@Module({
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env),
    isGlobal: true
  }), AuthModule],
  controllers: [CreateAccountController, AuthenticateController],
  providers: [PrismaService],
})
export class AppModule {}
