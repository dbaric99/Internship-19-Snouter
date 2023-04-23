import { ApiProperty } from '@nestjs/swagger';
import { CategorySpecification, Prisma } from '@prisma/client';
import { IsString, IsNotEmpty, MaxLength, IsArray } from 'class-validator';
import { CategorySpecificationDto } from './create-category-specififcation.dto';

export class CreateCategoryDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({ required: true })
  name: string;

  @IsArray()
  @ApiProperty({
    required: false,
    type: [CategorySpecificationDto],
  })
  categorySpecs: CategorySpecification[];

  parseInputData(): Prisma.CategoryCreateInput {
    return {
      name: this.name,
      categorySpecs: {
        create: this.categorySpecs.map((spec) => ({
          name: spec.name,
          category: { connect: { id: this.id } },
          specification: { connect: { id: spec.specificationId } },
        })),
      },
    };
  }
}
