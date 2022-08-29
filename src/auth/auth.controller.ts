import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, type: String })
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authServise.login(userDto);
  }

  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({ status: 200, type: String })
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authServise.registration(userDto);
  }
}
