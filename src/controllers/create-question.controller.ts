import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/current-user-decorator';
import { UserPayloadSchema } from 'src/auth/jwt-strategy';

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  constructor() {}
  @Post()
  async handle(@CurrentUser() user: UserPayloadSchema) {
    return user.sub;
  }
}
