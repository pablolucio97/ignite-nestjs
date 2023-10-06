import { Module } from '@nestjs/common';
import { AuthenticateController } from './controllers/authenticate-user-controller';
import { CreateAccountController } from './controllers/create-account-controller';
import { CreateQuestionController } from './controllers/create-question.controller';
import { FetchRecentQuestionsController } from './controllers/fetch-resent-questions-controller';
import { PrismaService } from './prisma/prisma-service';

@Module({
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
