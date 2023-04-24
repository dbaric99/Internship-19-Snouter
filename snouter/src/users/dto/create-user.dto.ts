import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  firstName: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  lastName: string | null;

  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  @ApiProperty({ required: true })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  hash: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  role: Role;

  @IsString()
  @IsOptional()
  @Matches(/^\+[1-9]\d{1,14}$/)
  @ApiProperty({ required: false, nullable: true })
  phoneNumber: string | null;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  addressId: number | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  profileImageUrl: string | null;
}
