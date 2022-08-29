import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Mail adress' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Uncorrect email' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'User password' })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'Must be between 4 and 16 characters' })
  readonly password: string;
}
