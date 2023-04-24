import { ApiProperty } from '@nestjs/swagger';
import { State } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsInt,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ required: true })
  name: string;

  @IsString()
  @ApiProperty({ required: false })
  description: string;

  @IsNumber()
  @ApiProperty({ required: true })
  price: number;

  @IsDate()
  @ApiProperty({ required: true })
  createdAt: Date;

  @IsDate()
  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date | null;

  @ApiProperty({ required: true })
  state: State;

  @IsBoolean()
  @ApiProperty({ required: true })
  isSold: boolean;

  @IsInt()
  @ApiProperty({ required: true })
  subcategoryId: number;

  @IsInt()
  @ApiProperty({ required: true })
  sellerId: number;

  @IsInt()
  @ApiProperty()
  categoryId: number;

  @IsArray()
  @ApiProperty({ required: false, nullable: true })
  images: string[] | null;
}
