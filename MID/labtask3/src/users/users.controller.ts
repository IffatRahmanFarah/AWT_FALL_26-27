import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'User registered successfully',
      data: {
        fullName: createUserDto.fullName,
        email: createUserDto.email,
        age: createUserDto.age,
        accountType: createUserDto.accountType,
      },
    };
  }
}