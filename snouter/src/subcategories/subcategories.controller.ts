import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SubcategoryEntity } from './entities/subcategory.entity';

@Controller('subcategories')
@ApiTags('Subcategory')
export class SubcategoriesController {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Post()
  @ApiCreatedResponse({ type: SubcategoryEntity })
  create(@Body() createSubcategoryDto: CreateSubcategoryDto) {
    return this.subcategoriesService.create(createSubcategoryDto);
  }

  @Get()
  @ApiOkResponse({ type: [SubcategoryEntity] })
  findAll() {
    return this.subcategoriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SubcategoryEntity })
  findOne(@Param('id') id: string) {
    return this.subcategoriesService.findOne(+id);
  }

  //TODO: Fix this
  @Get(':id/products')
  getProducts(@Param('id') id: string) {
    return this.subcategoriesService.getProducts(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SubcategoryEntity })
  update(
    @Param('id') id: string,
    @Body() updateSubcategoryDto: UpdateSubcategoryDto,
  ) {
    return this.subcategoriesService.update(+id, updateSubcategoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SubcategoryEntity })
  remove(@Param('id') id: string) {
    return this.subcategoriesService.remove(+id);
  }
}
