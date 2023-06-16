import { Category } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { CategorySpecificationEntity } from 'src/general/entities/categorySpecification.entity';

export class CategoryEntity implements Category {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  categorySpecs: CategorySpecificationEntity[];
}
