import { ApiProperty } from '@nestjs/swagger';
import { Category, Specification } from '@prisma/client';

export class CategorySpecificationDto {
  @ApiProperty()
  name: string;
  category: Category;
  specification: Specification;
}
