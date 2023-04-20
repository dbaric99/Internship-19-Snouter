import { Address, Role, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty({ required: true })
  id: number;

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
  address: Address | null;

  @ApiProperty({ required: false, nullable: true })
  addressId: number | null;

  @ApiProperty({ required: false, nullable: true })
  profileImageUrl: string | null;
}
