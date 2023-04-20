import { Subcategory } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SubcategoryEntity implements Subcategory {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  categoryId: number;
}
