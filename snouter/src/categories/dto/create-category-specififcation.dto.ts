import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CategorySpecificationDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @ApiProperty()
  name: string;
}
