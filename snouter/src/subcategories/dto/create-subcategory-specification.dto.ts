import { ApiProperty } from '@nestjs/swagger';

export class SubcategorySpecificationDto {
  @ApiProperty()
  name: string;
}
