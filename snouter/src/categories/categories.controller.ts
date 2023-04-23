import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';

@Controller('categories')
@ApiTags('Category')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiCreatedResponse({ type: CategoryEntity })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOkResponse({ type: [CategoryEntity] })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Get(':id/products')
  getProducts(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getProducts(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CategoryEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CategoryEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }
}
