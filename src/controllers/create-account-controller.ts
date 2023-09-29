import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma-service';
import { hash } from 'bcryptjs';

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    const { name, email, password } = body;

    const userWithEmailAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithEmailAlreadyExists) {
      throw new ConflictException('User already exists.');
    }

    const hashedPassword = await hash(password, 8);

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
