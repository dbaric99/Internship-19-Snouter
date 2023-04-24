import { ApiProperty } from '@nestjs/swagger';
import { SubcategorySpecificationDto } from './create-subcategory-specification.dto';

export class CreateSubcategoryDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  categoryId: number;

  @ApiProperty({
    required: false,
    type: [SubcategorySpecificationDto],
  })
  categorySpecs: SubcategorySpecificationDto[];
}
