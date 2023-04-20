import { ApiProperty } from '@nestjs/swagger';

export class CreateSubcategoryDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  categoryId: number;
}
