import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CategorySpecificationDto {
  @ApiProperty()
  name: string;
  category: Category;
}
