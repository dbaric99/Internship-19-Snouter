import { ApiProperty } from '@nestjs/swagger';
import { SubcategorySpecificationDto } from './create-subcategory-specification.dto';
import { Prisma } from '@prisma/client';

export class CreateSubcategoryDto {
  id: number;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  categoryId: number;

  @ApiProperty({
    required: false,
    type: [SubcategorySpecificationDto],
  })
  subcategorySpecs: SubcategorySpecificationDto[];

  parseInputData(): Prisma.SubcategoryCreateInput {
    return {
      name: this.name,
      category: { connect: { id: this.categoryId } },
      subcategorySpecs: {
        create: this.subcategorySpecs.map((spec) => ({
          name: spec.name,
          subcategory: { connect: { id: this.id } },
        })),
      },
    };
  }
}
