import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SubcategorySpecificationDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @ApiProperty()
  name: string;
}
