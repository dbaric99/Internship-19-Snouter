import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ required: false, nullable: true })
  firstName: string | null;

  @ApiProperty({ required: false, nullable: true })
  lastName: string | null;

  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  hash: string;

  @ApiProperty({ required: true })
  role: Role;

  @ApiProperty({ required: false, nullable: true })
  phoneNumber: string | null;

  @ApiProperty({ required: false, nullable: true })
  addressId: number | null;
}
