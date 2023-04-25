import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  Length,
  IsArray,
  IsOptional,
} from 'class-validator';
import { CategorySpecificationDto } from './create-category-specififcation.dto';

export class CreateCategoryDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty({ required: true })
  name: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: [CategorySpecificationDto],
  })
  categorySpecs: CategorySpecificationDto[];
}
