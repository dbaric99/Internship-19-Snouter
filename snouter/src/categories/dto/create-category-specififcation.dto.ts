import { ApiProperty } from '@nestjs/swagger';

export class CategorySpecificationDto {
  @ApiProperty()
  name: string;
}
