import { Controller, Get } from '@nestjs/common';
import { PreAuthenticate } from '../middleware/pre-authen.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @PreAuthenticate()
  @Get()
  getHello(): string {
    return 'Hello World';
  }

  @Get('/test')
  getHello2(): string {
    return 'Hello Worl2d';
  }
}
