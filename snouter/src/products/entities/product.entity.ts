import { Product, State } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity implements Product {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: true })
  price: number;

  @ApiProperty({ required: true })
  createdAt: Date;

  @ApiProperty()
  slug: string;

  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date | null;

  @ApiProperty({ required: true })
  state: State;

  @ApiProperty({ required: true })
  isSold: boolean;

  @ApiProperty({ required: true })
  subcategoryId: number;

  @ApiProperty({ required: true })
  sellerId: number;

  @ApiProperty()
  categoryId: number;
}
